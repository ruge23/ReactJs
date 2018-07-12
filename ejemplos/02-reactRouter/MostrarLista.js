var React = require('react');

module.exports =  React.createClass({
  render: function(){
    var lista = this.props.names.map(function(amigo, i){
      return <li key={i}> {amigo} </li>;
    });
    return (
      <div>
        <h3> Amigos </h3>
        <ul>
          {lista}
        </ul>
      </div>
    )
  }
});

