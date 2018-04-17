import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const url = 'https://bms.it-tv.org/stat/api.php'
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  redirect: false
  }
 this.handleClick = this.handleClick.bind(this);
 }

handleClick(event){
   let action = "auth";
   let login = this.state.username;
   let password = this.state.password;

  fetch(url, {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: "action="+action+"&login="+login+"&password="+password
      })
      .then(response => response.json())
      .then(parsedJSON => { localStorage.setItem('sessionNumber',parsedJSON.session);
      if(parsedJSON.result === 1){
        this.setState({redirect: true})
      }else{
        alert("try again")
       }
        })
      .catch(error => console.log('parsing failed', error))
}

render() {

  if (this.state.redirect) {
     return <Redirect push to="/Stat" />;
   }else{

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
               onClick={(event) => this.handleClick(event)}

             />

         </div>
         </MuiThemeProvider>
      </div>
    );}
  }
  }


const style = {
 marginLeft: 50,


};
export default Login;
