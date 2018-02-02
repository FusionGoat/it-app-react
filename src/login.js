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

  handleClick(event){
   let action = "auth";
   let login = this.state.username;
   let password = this.state.password;

   var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("action="+action+"&login="+login+"&password="+password);
    xhr.onreadystatechange = processRequest;
    function processRequest(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response1 = JSON.parse(xhr.responseText);
          localStorage.setItem('sessionNumber', response1.session);

 }
 }

 let action2 = "get_accounts";
 var xhr2 = new XMLHttpRequest();
  xhr2.open('POST', url, true);
  xhr2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr2.send("action="+action2+"&session="+localStorage.getItem('sessionNumber'));
  xhr2.onreadystatechange = processRequest2;
  function processRequest2(e) {
      if (xhr2.readyState === 4 && xhr2.status === 200) {
        var response2 = JSON.parse(xhr2.responseText);
        alert("Current balance" + response2.data[0].NowSum +"stored")


      }}

/*   fetch(url, {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: "action="+action+"&login="+login+"&password="+password+"&session="
      })
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({
          data:parsedJSON

        });

      })

      .catch(error => console.log('parsing failed', error))*/



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
 margin: 5,

};
export default Login;
