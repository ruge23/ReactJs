var React = require('react');
var Link = require('react-router').Link;

const vale = {
  color: 'blue',
  fontSize: '30px',
};

module.exports = React.createClass({
  render: function(){
    return (
      <div style={vale}>
        Hola, Plataforma5!!
        <p className="prueba">Alan</p>
      </div>
    )
  }
});