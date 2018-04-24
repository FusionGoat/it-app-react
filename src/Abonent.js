import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {  Redirect} from 'react-router-dom'

const url = 'https://bms.it-tv.org/stat/api.php'
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

const { error, data } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  }else if (data === undefined) {
    return <div>
        <Redirect push to="/" />;
    </div>;
  }  else {
   return (

        <MuiThemeProvider>
          <div>
            <Paper style={style} key={data.Id}>
              <h2>{data.Name}</h2>
              <p>Телефоны: {data.Phones}</p>
            </Paper>
          </div>
        </MuiThemeProvider>

    );
  }
}}

export default Abonent;
