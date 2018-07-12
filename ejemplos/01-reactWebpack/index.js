var React = require('react')
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//   render: function(){
//     return (
//       <div>
//         Hola, Plataforma5!! {this.props.name}
//       </div>
//     )
//   }
// });

var ContenedorAmigos = React.createClass({
  render: function(){
    var name = 'Plataforma5'
    var amigos = ['Santi', 'Guille', 'Facu']
    return (
      <div>
        children: {this.props.children}
        <h3> Nombre: {name} </h3>
        <MostrarLista names={amigos} />
      </div>
    )
  }
});

var MostrarLista = require('./MostrarLista.js'); // Importamos el Componente

// var MostrarLista = React.createClass({
//   render: function(){
//     var lista = this.props.names.map(function(amigo){
//       return <li> {amigo} </li>;
//     });
//     return (
//       <div>
//         <h3> Amigos </h3>
//         <ul>
//           {lista}
//         </ul>
//       </div>
//     )
//   }
// });

ReactDOM.render(<ContenedorAmigos>Hola!</ContenedorAmigos>, document.getElementById('app'));