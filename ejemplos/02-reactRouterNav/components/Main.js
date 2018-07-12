var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./Nav.js');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        { this.props.children }
      </div>
    )
  }
});