import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';


class Loader extends Component {

  render() {
    return (
      
        <CircularProgress size={100} thickness={5} />

    );
  }
}

export default Loader;
