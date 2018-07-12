var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./Nav.js');

module.exports = React.createClass({
  render: function(){
    return (
      <div className='container'>
        <Nav />
        <div className='row'>
        { this.props.children }
        </div>
      </div>
    )
  }
});