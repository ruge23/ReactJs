// Redux sólo puede tener un reducer.
// por eso vamosa  tener el Root Reducer
// donde vamos a incorporar los demas

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts.js';
import comments from './comments.js';

const rootReducer = combineReducers( {posts, comments, routing: routerReducer })

export default rootReducer;