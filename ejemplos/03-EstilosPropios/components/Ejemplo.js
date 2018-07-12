var React = require('react');
var Link = require('react-router').Link;

const s = require('../styles/estilos.ncss');

module.exports = React.createClass({
  render: function(){
    return (
      <div className={s.prueba}>
        <h1 className={s.title}>Ejemplos 2</h1>
        <p className="prueba"> Ojo con los estilos globales </p>
        <p className={`${s.title} ${s.size}`}> Multiples Clases </p>
        <p className={ s.title + ' ' + s.size}> Multiples Clases </p>
      </div>
    )
  }
});