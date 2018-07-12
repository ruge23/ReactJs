var React = require('react');
var Link = require('react-router').Link;

require('../styles/estilos.css');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="prueba">
        <h1>About</h1>
        <p className="alan">Alan</p>
      </div>
    )
  }
});