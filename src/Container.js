
import {Tabs, Tab} from 'material-ui/Tabs';
import React, {Component} from 'react';
import Abonent from './pages/Abonent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Messages from './pages/Messages'
import Accounts from './pages/Accounts';
import Surv from './pages/Surv';
import ExitBtn from './actions/ExitBtn';
import SendMsg from './actions/SendMsg';
class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Личные данные" value="a">
              <div>
                <Abonent/>
              </div>
            </Tab>
            <Tab label="Сообщения" value="b">
              <div>
                <SendMsg/>
                <Messages/>
              </div>
            </Tab>

            <Tab label="Интернет" value="c">
              <div>
                <Abonent/>
              </div>
            </Tab>
            <Tab label="Телевидение" value="d">
              <div>
                <Abonent/>
              </div>
            </Tab><Tab label="Видеонаблюдение" value="e">
              <div>
                <Surv/>
              </div>
            </Tab>
            <Tab label="Оплата" value="f">
              <div>
                <Abonent/>
              </div>
            </Tab>
          </Tabs>
          <ExitBtn/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Container;
