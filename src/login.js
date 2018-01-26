import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import './Login.css'


const url = 'https://bms.it-tv.org/stat/api.php'
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',

  }
 }

  handleClick(event,result){
   let action = "auth";
   let login = this.state.username;
   let password = this.state.password;
   
   fetch(url, {

        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: "action="+action+"&login="+login+"&password="+password
      });
}

  handleClick2(event) {
       let action = "get_accounts";
       fetch(url, {

           method: 'POST',
           headers: {
             "Content-type": "application/x-www-form-urlencoded"
           },

           body: "action="+action
         })
         .catch( alert );
        }


render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Авторизация"
           />
           <TextField style={style}
             hintText="Введите ваш логин"
             floatingLabelText="Логин"

             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField style={style}
               type="password"

               hintText="Введите ваш пароль"
               floatingLabelText="Пароль"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton
               label="Войти"
               primary={true}
               style={style}
               onClick={(event) => this.handleClick(event)}/>
             <RaisedButton
               label="Получить данные"
               primary={true}
               style={style}
               onClick={(event) => this.handleClick2(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 5
};
export default Login;
