var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;


module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <ul> 
          <li>
            <Link to='/login' activeClassName='active'>Login</Link>
          </li>
          <li>
            <IndexLink to="/" activeClassName='active'>Home</IndexLink>
          </li>
        </ul>
        { this.props.children }
        <h2>Footer</h2>
      </div>
    )
  }
});