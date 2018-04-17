import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import {browserHistory} from 'react-router';
import Stat from './Stat'
import Login from './Login';
ReactDOM.render(
  <BrowserRouter>
    <div>
        <Route path="/" component={App} />
        <Route path="/Stat" component={Stat} />
        <Route path="/Login" component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
