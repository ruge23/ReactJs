var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router'). Router,
    Route = require('react-router').Router,
    hashHistory = require('react-router').hashHistory,
    IndexRoute  = require('react-router').IndexRoute;

var Home   = require('./components/Home.js');
var CountDown   = require('./components/Countdown.js');
var Cronometro   = require('./components/Cronometro.js');
var Main   = require('./components/Main.js');

require('./styles/estilos.css');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="cronometro" component={Cronometro}/>
      <Route path="countdown" component={CountDown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);