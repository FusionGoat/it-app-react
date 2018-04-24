
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom'


class Nav extends Component {

  render() {
    return (
      
      <Paper zDepth={1} className="Nav">
        <ul>
         <li><Link to='/Abonent'>Инфа о юзере</Link></li>
         <li><Link to='/Accounts'>Счета</Link></li>
         <li><Link to='/Messages'>Сообщения</Link></li>
       </ul>
      </Paper>
    );
  }
}

export default Nav;
