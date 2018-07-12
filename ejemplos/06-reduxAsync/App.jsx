import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from './actions';

function MapStateToProperties(state) {
  return {
    imagenes: state.imagenes,
    isFetching: state.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

const Search = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs.query.value);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="query" placeholder="Type here" />
        <input type="submit" value="Search" />
      </form>
    );
  },
});

const Root = React.createClass({
  render() {
    if (this.props.isFetching) return (<img src="spinner.gif" />);
    return (
      <div>
      <Search onSubmit={this.props.fetchPost}/>
      {
      this.props.imagenes.map((img) => {
        return (
          <div>
            <h4>{img.title}</h4>
            <img src={img.url} alt="imagen" />
          </div>
        )
      })
      }
      </div>
    )
  },
});

export default connect(MapStateToProperties, mapDispatchToProps)(Root);
