import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './js/reducers';
import Application from './js/Application';

import './index.less';

const store = createStore( rootReducer, applyMiddleware( thunk ));

const JSX = (
    <Provider store={store}>
        <HashRouter>
            <Application/>
        </HashRouter>
    </Provider>
);

ReactDOM.render(JSX, document.getElementById( 'application' ));