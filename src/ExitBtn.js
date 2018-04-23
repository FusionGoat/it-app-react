import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};


class ExitBtn extends Component {
  constructor(){
    super();
    this.state = {

    };
    this.LogOutClick = this.LogOutClick.bind(this);
  }

  LogOutClick(event){
        localStorage.removeItem('sessionNumber');
        window.location.reload()
  };

  render() {
    return (
       <RaisedButton label="Выход" primary={true} style={style} onClick={(event) => this.LogOutClick(event)}/>
    );
  }
}

export default ExitBtn;
