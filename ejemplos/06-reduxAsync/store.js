import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const InitialState = {
  isFetching: false,
  imagenes: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, InitialState, composeEnhancers(
    applyMiddleware(thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware,
    )));

// const store = createStore(rootReducer,
//   compose(
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware, // neat middleware that logs actions
  // )));

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// store.dispatch(selectSubreddit('reactjs'));
export default store;
