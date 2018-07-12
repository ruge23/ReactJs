var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        Hola, Plataforma5!!
        <a href='#/lista'>Link normal a la Lista</a>
        <Link to='lista' activeClassName= 'active' >Link de react-router a la Lista</Link>
        <Link to='/' activeClassName='active' >Link de react-router al Home</Link>
      </div>
    )
  }
});