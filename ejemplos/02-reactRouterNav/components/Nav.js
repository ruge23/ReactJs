var React = require('react');
var Link = require('react-router').Link,
    IndexLink = require('react-router').IndexLink;

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Barra de Navegación</h2>
        <IndexLink to="/" activeClassName="active" >Home</IndexLink>
        <Link to="/about" activeClassName="active" >Componente2</Link>
        <Link to="/ejemplos" activeClassName="active">Componente3</Link>
      </div>
    );
  }
})