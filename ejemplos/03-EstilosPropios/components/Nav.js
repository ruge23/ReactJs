var React = require('react');
var Link = require('react-router').Link,
    IndexLink = require('react-router').IndexLink;

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
     <IndexLink className="btn btn-default" to="/" activeClassName="active">Inline</IndexLink>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link className="btn btn-default" to="/about" activeClassName="active" >Estilos globales</Link></li>
        <li><Link className="btn btn-default"to="/ejemplos" activeClassName="active">Css Modules</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
})