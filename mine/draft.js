import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Request } from 'react-axios'


export default class Login extends Component {
    constructor(props) {
      super(props);

      this.state = {
        login: "",
        password: "",
        action: "auth"
      };
    }


    validateForm() {
      return this.state.login.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();
    }


    render() {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="login" bsSize="large">
              <ControlLabel>Login</ControlLabel>
              <FormControl
                autoFocus
                value={this.state.login}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>

          </form>
        </div>
      );
    }
  }
  import React, { Component } from "react";
  import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
  import "./Login.css";

  export default class Login extends Component {
      constructor(props) {
        super(props);

        this.state = {
          login: "",
          password: ""
        };
      }

      validateForm() {
        return this.state.login.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
      }

      render() {
        return (
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="login" bsSize="large">
                <ControlLabel>Login</ControlLabel>
                <FormControl
                  autoFocus

                  value={this.state.login}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
                onClick = {send_action (auth,{this.state.login},{this.state.password})}
              >
                Login
              </Button>


            </form>
          </div>
        );
      }
    }
    function send_action (action,login,password) {
                  var XHR = new XMLHttpRequest();
                  XHR.open('POST', 'https://bms.it-tv.org/stat/api.php',true);
                  XHR.onreadystatechange = function() {
                  if (XHR.readyState == 4 && XHR.status == 200) {
                            alert(XHR.responseText);
                            response.data[0].NowSum
                  }};
                  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                  XHR.send("action="+action+"&login="+login+"&password="+password);}
                  fetch('https://mywebsite.com/endpoint/', {
                    method: 'POST',
                    headers: {

                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                      firstParam: 'yourValue',
                      secondParam: 'yourOtherValue',
                    })
                  })





                    handleClick2(event) {
                      let action = "get_accounts";
                      let xhr = new XMLHttpRequest();
                       xhr.open('POST', url, true);
                       xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                       xhr.send("action="+action+"&session="+sessionStorage.getItem('sessionNumber'));
                       xhr.onreadystatechange = processRequest;
                       function processRequest(e) {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                             let response1 = JSON.parse(xhr.responseText);
                             alert("У вас на счету " + response1.data[0].NowSum)
                              }}
                      }

                      handleClick3(event) {
                        let action = "get_abonent";
                        let xhr = new XMLHttpRequest();
                         xhr.open('POST', url, true);
                         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                         xhr.send("action="+action+"&session="+sessionStorage.getItem('sessionNumber'));
                         xhr.onreadystatechange = processRequest;
                         function processRequest(e) {
                              if (xhr.readyState === 4 && xhr.status === 200) {
                               let response1 = JSON.parse(xhr.responseText);
                               alert("Вас зовут " + response1.data.Name )
                                }}
                        }
                        handleClick4(event) {
                          let action = "get_messages";
                          let xhr = new XMLHttpRequest();
                           xhr.open('POST', url, true);
                           xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                           xhr.send("action="+action+"&session="+sessionStorage.getItem('sessionNumber'));
                           xhr.onreadystatechange = processRequest;
                           function processRequest(e) {
                                if (xhr.readyState === 4 && xhr.status === 200) {
                                 let response1 = JSON.parse(xhr.responseText);
                                 alert( response1.data[0].Text + "\n Дата: " +response1.data[0].Time )
                                  }}
                          }

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
