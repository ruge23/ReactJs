var React = require('react');
var Link = require('react-router').Link;

var prueba = require('../styles/estilos.ncss').prueba;

module.exports = React.createClass({
  render: function(){
  	console.log(prueba);
    return (
      <div className= {prueba}>
        Hola, Plataforma5!!
      </div>
    )
  }
});