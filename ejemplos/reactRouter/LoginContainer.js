var React = require('react');
var LoginForm = require('./LoginForm.js'); // Importamos el Componente
var Loading = require('./Loading');
const host = 'http://10.6.6.235:3000';
var Link = require('react-router').Link;

module.exports =  React.createClass({
    getInitialState: function(){
      return {
        isLoading: false,
        isAuthenticated: false,
        username: null
      }
    },
    authenticate: function(e) {
      e.preventDefault();
      const username = e.target[0].value;
      const password = e.target[1].value;
      this.setState({
        isLoading: true,
      });
      fetch(`${host}/login`,
            {
              mode: 'cors',
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `username=${username}&password=${password}&action=login`
            }
      ).then( response => response.json())
      .then( (response ) => {
        console.log(response);
        if(response.username){
          this.setState({
            isLoading: false,
            isAuthenticated: true,
            username: response.username
        });
        }
      }).catch( (err) => {
        this.setState({
          isLoading: false,
        });
      })
    },
    render: function() {
      let show;
      if(this.state.isLoading){
        return (<Loading />);
      } 
      if(this.state.isAuthenticated) {
        show = (
          <p>Hola {this.state.username}</p>
        )
      }else {
        show = (
          <LoginForm
            onSubmit={this.authenticate}
          />
        )
      }
      return (
        <div>
          {show}
        </div>

      )
    }
});
