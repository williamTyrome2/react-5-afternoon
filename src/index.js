import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';

<Provider store={store}>
<App />
 </Provider>, 
 document.getElementById('root');
registerServiceWorker();

