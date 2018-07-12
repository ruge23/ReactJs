var React = require('react')
var ReactDOM = require('react-dom');
var LoginForm = require('./LoginForm.js'); // Importamos el Componente
var Loading = require('./Loading');
const host = 'http://10.6.6.235:3000';

var ContenedorLogin = React.createClass({
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
      if(this.state.isLoading) return (<Loading />);
      if(this.state.isAuthenticated) return(<p>Hola {this.state.username}</p>)
      return (
        <LoginForm
          onSubmit={this.authenticate}
        />
      )
    }
});




ReactDOM.render(<ContenedorLogin />, document.getElementById('app'));