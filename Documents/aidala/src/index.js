import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import apiConfig from './apiKeys';

var firebaseConfig = {
    apiKey: apiConfig.apiKey,
    authDomain: "aidalaapp.firebaseapp.com",
    databaseURL: "https://aidalaapp.firebaseio.com",
    projectId: "aidalaapp",
    storageBucket: "aidalaapp.appspot.com",
    messagingSenderId: apiConfig.messagingSenderId,
    appId: apiConfig.appId
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
