import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const Error_ru = this.state;
const style = {
  margin: 12,

};
const style2 = {
    padding: 30,
    margin: 20,



};
class SendMsg extends Component {
constructor(props){
  super(props);
  this.state={
  Text:'',
  Error_ru:{},
  Error_ua:{},
  }
 this.handleClick = this.handleClick.bind(this);
 }
 handleClick(event){
    let url = 'https://bms.it-tv.org/stat/api.php'
    let action = "send_message";
    let Text = this.state.Text;
    fetch(url, {
         method: 'POST',
         headers: {
           "Content-type": "application/x-www-form-urlencoded"
         },
         body: "action="+action+"&text="+Text+"&session="+ localStorage.getItem('sessionNumber')
       })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            Error_ru: result.error_ru
          })
        })

    }

  render() {
const Error_ru = this.state;
return(
  <div>
    <Paper style={style2}>
      <h2>Форма обратной связи</h2>
    <TextField
    hintText="Введите Ваше сообщение"
    floatingLabelText="Текст сообщения"
    style={style}
    multiLine={true}
    rows={1}
    fullWidth={true}
    onChange = {(event,newValue) => this.setState({Text:newValue})}
    />

    <br/>
      <RaisedButton
      color="primary"
      fullWidth={true}
      label="Отправить сообщение"
      primary={true}
      style={style}
      onClick={(event) => this.handleClick(event)}
    />
  </Paper>
  </div>
  )
}


}
export default SendMsg;
