import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
  margin: 12,
};


class ExitBtn extends Component {
  constructor(){
    super();
    this.state = {

    };
    this.LogOutClick = this.LogOutClick.bind(this);
  }

  LogOutClick(event){
    let url = 'https://bms.it-tv.org/stat/api.php'
    let action = "exit";
        localStorage.removeItem('sessionNumber');
        fetch(url, {
             method: 'POST',
             headers: {
               "Content-type": "application/x-www-form-urlencoded"
             },
             body: "action="+action
           })
        window.location.reload()
  };

  render() {
    return (
       <RaisedButton label="Выход" primary={true} style={style} fullWidth={true} onClick={(event) => this.LogOutClick(event)}/>
    );
  }
}

export default ExitBtn;
