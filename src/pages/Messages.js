import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
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
 this.handleClick = this.handleClick.bind(this);
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
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }
    handleClick(event){
     let url = 'https://bms.it-tv.org/stat/api.php'
     let action = "read_message";
     let MsgId =
     fetch(url, {
          method: 'POST',
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          },
          body: "action="+action+"&id=963889"})
       .then(res => res.json())
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
  } else if (data === undefined) {
    return <div>
      {alert("Вы не авторизованы!")}
        <Redirect push to="/" />;
    </div>;
  } else {
   return (

        <MuiThemeProvider>
          <div>
                {
                data.map(item => (
                <Paper style={style} zDepth={3}  rounded= {true} key={item.Id}>
                  <strong>{item.Time}</strong>
                  <p>{item.Text}</p>
                  {item.Id}
                  {item.NewMessage === 't'&&
                    <RaisedButton
                      color="primary"
                      label="Отметить как прочитанное"
                      primary={true}

                      onClick={(event) => this.handleClick(event)}
                    />
                  }
                  {item.NewMessage === 'f'&&
                  <p>Прочитано</p>
                  }
                </Paper>
              ))}


         </div>
         </MuiThemeProvider>

    );
  }
}}

export default Messages;
