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
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><IndexLink className="btn btn-default" to="/" activeClassName="active" >Home</IndexLink></li>
        <li><Link className="btn btn-default" to="/cronometro" activeClassName="active" >Crónometro</Link></li>
        <li><Link className="btn btn-default"to="/countdown" activeClassName="active">CountDown</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
})