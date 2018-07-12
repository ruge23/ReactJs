import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App.js';
import Main from './components/Main.js';
import PhotoGrid from './components/PhotoGrid.js';
import Single from './components/Single.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux'; //Bindings from redux and React
import store, { history } from './store.js';

const router = (
	<Provider store={store}>
		<Router history={ history }>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}/>
				<Route path="view/:postId" component={Single}/>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'))