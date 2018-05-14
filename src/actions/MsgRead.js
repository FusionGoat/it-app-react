import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const Error_ru = this.state;
const style = {
  margin: 12,

};

class MsgRead extends Component {
constructor(props){
  super(props);
  this.state={

  }
 this.handleClick = this.handleClick.bind(this);
 }
 handleClick(event){
    let url = 'https://bms.it-tv.org/stat/api.php'
    let action = "read_message";
    fetch(url, {
         method: 'POST',
         headers: {
           "Content-type": "application/x-www-form-urlencoded"
         },
         body: "action="+action+"&idea="+MsgId
       })
      .then(res => res.json())


    }

  render() {

return(
  <div>

      <RaisedButton
      color="primary"

      label="Отметить как прочитанное"
      primary={true}
      style={style}
      onClick={(event) => this.handleClick(event)}
    />

  </div>
  )
}


}
export default MsgRead;
