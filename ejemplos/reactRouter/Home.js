var React = require('react');
var Link = require('react-router').Link;

const divStyle = {
  color: 'blue',
};

module.exports = function Home(props){
  return (
      <div style={divStyle}>
        <h1>Hola es el Home</h1>
      </div>
    )
}
