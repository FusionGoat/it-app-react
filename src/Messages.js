import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Nav from './Navigation';
import ExitBtn from './ExitBtn';
import Loader from './Loader';
import {  Redirect} from 'react-router-dom'

class Messages extends Component {
  constructor(){
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };

  }
  componentDidMount() {
    let url = 'https://bms.it-tv.org/stat/api.php'
    let action = "get_messages";
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
  } else if (data === undefined) {
    return <div>
        <Redirect push to="/Login" />;
    </div>;
  }else if (!isLoaded) {
    return <div>
      <MuiThemeProvider>
      <Loader/>
      </MuiThemeProvider>
    </div>;
  } else {
   return (

        <MuiThemeProvider>
          <div>
          <AppBar title="Сообщения"/>
            <Nav/>
              {data.map(item => (
                <Paper style={style} zDepth={3}  rounded= {true} key={item.Id}>
                  <strong>{item.Time}</strong>
                  <p>{item.Text}</p>
                </Paper>
              ))}

              <ExitBtn/>
         </div>
         </MuiThemeProvider>

    );
  }
}}

export default Messages;
