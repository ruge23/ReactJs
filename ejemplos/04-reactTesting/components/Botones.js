var React = require('react');

var Botones = React.createClass({
  propTypes: {
    status: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  render: function () {
    var status = this.props.status;
    var botonComenzar;
      if (status === 'contando') {
        botonComenzar = <button className="btn btn-primary" onClick={ () => {this.props.onStatusChange('pausado')} }>Pausar</button>
      } else {
        botonComenzar = <button className="btn btn-success" onClick={ () => {this.props.onStatusChange('contando')} }>Comenzar</button>
      }
    return (
      <div className ='centrado'>
        <div className="controls">
          {botonComenzar}
          <button className="btn btn-warning" onClick={ () => { this.props.onStatusChange('frenado')} }>Frenar</button>
        </div>
      </div>
    )
  }
});

module.exports = Botones;
