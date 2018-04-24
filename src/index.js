import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Container from './Container';



ReactDOM.render(
  <BrowserRouter>

    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/Container" component={Container} />

    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
