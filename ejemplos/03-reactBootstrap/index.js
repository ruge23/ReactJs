var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router'). Router,
    Route = require('react-router').Router,
    hashHistory = require('react-router').hashHistory,
    IndexRoute  = require('react-router').IndexRoute;

var Home   = require('./components/Home.js');
var About   = require('./components/About.js');
var Ejemplo   = require('./components/Ejemplo.js');
var Main   = require('./components/Main.js');

// require('script!jquery/dist/jquery.min.js');
// require('bootstrap/dist/css/bootstrap.css');
// require('bootstrap/dist/js/bootstrap.min.js');
// ReactDOM.render(<ContenedorAmigos>Hola!</ContenedorAmigos>, document.getElementById('app'));

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="ejemplos" component={Ejemplo}/>
    </Route>
  </Router>,
  document.getElementById('app')
);