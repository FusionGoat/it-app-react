
import {Tabs, Tab} from 'material-ui/Tabs';
import React, {Component} from 'react';
import Abonent from './pages/Abonent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Internet from './pages/Internet'
import Messages from './pages/Messages'
import Accounts from './pages/Accounts';
import Surv from './pages/Surv';
import TV from './pages/TV';
import ExitBtn from './actions/ExitBtn';
import SendMsg from './actions/SendMsg';
import News from './pages/News';
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
                <Internet/>
              </div>
            </Tab>
            <Tab label="Телевидение" value="d">
              <div>
                <TV/>
              </div>
            </Tab><Tab label="Видеонаблюдение" value="e">
              <div>
                <Surv/>
              </div>
            </Tab>
            <Tab label="Оплата" value="f">
              <div>
                <Accounts/>
              </div>
            </Tab>
            <Tab label="Новости" value="g">
              <div>
                <News/>
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
