import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import App from './componets/App.js';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
