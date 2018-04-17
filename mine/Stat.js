import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import './Login.css';



class Stat extends Component {
  componentWillMount() {
    const url = 'https://bms.it-tv.org/stat/api.php'
    let action = "get_messages";
    fetch(url, {
         method: 'POST',
         headers: {
           "Content-type": "application/x-www-form-urlencoded"
         },
         body: "action="+action+"&session="+ sessionStorage.getItem('sessionNumber')
       })
       .then(response => response.json())
       .then(parsedJSON => { sessionStorage.setItem('Data',parsedJSON.data)
         })
       .catch(error => console.log('parsing failed', error))
    }


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
