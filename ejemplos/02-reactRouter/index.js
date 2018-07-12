var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router'). Router,
    Route = require('react-router').Router,
    hashHistory = require('react-router').hashHistory,
    Link = require('react-router').Link;


var ContenedorAmigos = React.createClass({
  render: function(){
    var name = 'Plataforma5'
    var amigos = ['Santi', 'Guille', 'Facu'];
    return (
      <div>
        <h3> Nombre: {name} </h3>
        <MostrarLista names={amigos} />
        <Link to='/' activeClassName="active">Link de react-router al Home</Link>
        <Link to='lista' activeClassName="active">Link de react-router a Lista</Link>
      </div>
    )
  }
});

var MostrarLista = require('./MostrarLista.js'); // Importamos el Componente
var HelloWord   = require('./HelloWorld.js');

// ReactDOM.render(<ContenedorAmigos>Hola!</ContenedorAmigos>, document.getElementById('app'));

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HelloWord}/>
    <Route path="lista" component={ContenedorAmigos}/>
  </Router>
), document.getElementById('app'))