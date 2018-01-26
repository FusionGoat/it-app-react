
import React, { Component } from 'react';
import Login from './Login'
import Stat from './Stat'
import AppBar from 'material-ui/AppBar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'



class Main extends Component {

render() {
return(

      <Login/>

);
}}
export default Main;
