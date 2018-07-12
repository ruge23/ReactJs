var React = require('react')
var ReactDOM = require('react-dom');
// var Router = require('react-router').Router,s
    // Route = require('react-router').Route
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
    // hashHistory = require('react-router').hashHistory
var Login = require('./LoginContainer.js'); // Importamos el Componente
var Home = require('./Home.js');
var Main = require('./Main.js');

var Root = (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="login" component={Login} />
      </Route>
    </Router>
  )

ReactDOM.render(Root, document.getElementById('app'));