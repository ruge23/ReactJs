var React = require('react');

var Reloj = React.createClass({
  getDefaultProps: function () {
    tiempo: 0
  },
  propTypes: {
    tiempo: React.PropTypes.number
  },
  formatSeconds: function (tiempo) {
    var segundos = tiempo % 60;
    var minutos = Math.floor(tiempo / 60);

    if (segundos < 10) {
      segundos = '0' + segundos;
    }

    if (minutos < 10) {
      minutos = '0' + minutos;
    }

    return minutos + ':' + segundos;
  },
  render: function () {
    var {tiempo} = this.props;

    return (
      <div className="reloj">
        <span className="reloj-text">
          {this.formatSeconds(tiempo)}
        </span>
      </div>
    );
  }
});

module.exports = Reloj;
