import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Paper from 'material-ui/Paper';
import Nav from './Navigation';
import ExitBtn from './ExitBtn';

class Abonent extends Component {
  constructor(){
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };

  }
  componentDidMount() {
    const url = 'https://bms.it-tv.org/stat/api.php'
    let action = "get_abonent";
    fetch(url, {
         method: 'POST',
         headers: {
           "Content-type": "application/x-www-form-urlencoded"
         },
         body: "action="+action+"&session="+ localStorage.getItem('sessionNumber')
       })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


render() {
  const style = {

    padding: 50,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

const { error, isLoaded, data } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
   return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title="Инфа об абоненте"/>
          <Nav/>
            <Paper style={style} key={data.Id}>
              <h2>{data.Name}</h2>
              <p>Телефоны: {data.Phones}</p>
            </Paper>
            <ExitBtn/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}}

export default Abonent;
