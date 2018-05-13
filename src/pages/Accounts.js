import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
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
    let action = "get_accounts";
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
                    {data.map(item => (
              <Paper style={style} zDepth={3}  rounded= {true} key={item.Id}>
                <h2>Счет № {item.Number}</h2>
                <p>Текущий баланс: {item.NowSum}</p>
                <p>Текущий лимит: {item.NowLimit}</p>
              </Paper>
            ))}

        </div>
        </MuiThemeProvider>

    );
  }
}}

export default Messages;
