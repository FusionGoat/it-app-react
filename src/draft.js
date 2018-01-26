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
