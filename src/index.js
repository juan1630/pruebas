import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter  } from 'react-router-dom';
import firebase from 'firebase';
import {Provider} from 'react-redux';

import {store} from './store/index';
import './index.css';
import App from './App';
//import AppRouter from './Router/Router.js';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyD2qnTusRmHYelrYg0UTGLdcwLudeNurW4",
    authDomain: "aqua-2464b.firebaseapp.com",
    databaseURL: "https://aqua-2464b.firebaseio.com",
    projectId: "aqua-2464b",
    storageBucket: "aqua-2464b.appspot.com",
    messagingSenderId: "285283566837"

});
//integramos firebase con react

/***
 * <BrowserRouter>    
    <AppRouter/>
</BrowserRouter
 * 
 */


const root = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, root);
registerServiceWorker();
