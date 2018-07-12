var React = require('react');
var Reloj = require('./Reloj.js');
var Botones = require('./Botones.js');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      tiempo: 0,
      status: 'frenado'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case 'contando':
          this.handleStart();
          break;
        case 'frenado':
          this.setState({tiempo: 0});
        case 'pausado':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  handleStart: function () {
    this.timer = setInterval(() => {
      this.setState({
        tiempo: this.state.tiempo + 1
      });
    }, 1000);
  },
  handleStatusChange: function (nuevoEstado) {
    this.setState({status: nuevoEstado});
  },
  render: function () {
    return (
      <div>
        <Reloj tiempo ={ 615 }/>
        </div>
   	)
  }
});