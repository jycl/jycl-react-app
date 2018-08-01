import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * createStore
 * Creates a Redux store that holds complete state tree of your app.
 * @param {Function} reducer reducing function that returns the next state tree
 *                           given current state tree and an action to handle.
 * @param {any} preloadedState initial state, if reducer is from combineReducers,
 *                             this must be a plain object with the same shape as the keys
 *                             passed to it
 * @param {Function} enhancer store enhancer to enhance store with third-party capabilities
 *                            e.g. applyMiddleware extend Redux with custom functionality
 *                            redux-thunk lets action creators invert control by dispatching functions
 */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/**
 * <Provider store>
 * Makes the Redux store available to the connect() calls in the component hierarchy below.
 * https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
