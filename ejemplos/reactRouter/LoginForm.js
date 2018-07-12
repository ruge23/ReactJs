var React = require('react');

module.exports =  React.createClass({
  render: function(){
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input name="username" type="text" />
          <input name="password" type="password" />
          <button type="submit"> Enviar </button>
        </form>
      </div>
    )
  }
});

