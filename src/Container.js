
import {Tabs, Tab} from 'material-ui/Tabs';
import React, {Component} from 'react';
import Abonent from './Abonent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Messages from './Messages'
import Accounts from './Accounts';
import ExitBtn from './ExitBtn';

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
            <Tab label="Информация" value="a">
              <div>
                <Abonent/>
              </div>
            </Tab>
            <Tab label="Сообщения" value="b">
              <div>
                <Messages/>
              </div>
            </Tab>
            <Tab label="Счета" value="c">
              <div>
                <Accounts/>
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
