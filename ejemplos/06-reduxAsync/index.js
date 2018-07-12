import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';

const Home = React.createClass({
  render: function(){
    return (
      <Provider store={store}>
        <div>
          <h3>Hola, Plataforma5!!</h3>
          <App />
        </div>
      </Provider>
    );
  }
});

ReactDOM.render(<Home />, document.getElementById('app'));
