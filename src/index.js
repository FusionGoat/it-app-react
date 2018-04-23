import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Abonent from './Abonent'
import Login from './Login';
import Messages from './Messages'
import Accounts from './Accounts';


ReactDOM.render(
  <BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/Abonent" component={Abonent} />
        <Route path="/Login" component={Login} />
        <Route path="/Messages" component={Messages} />
        <Route path="/Accounts" component={Accounts} />

    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
