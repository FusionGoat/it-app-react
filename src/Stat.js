import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import './Login.css';



class Stat extends Component {


render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title="Личный кабинет"/>



         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Stat;
