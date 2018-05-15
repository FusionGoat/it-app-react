import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class Internet extends Component{

  render(){
    return(



  <Table  >
    <TableHeader
      displaySelectAll={false}
      >
      <TableRow>
        <TableHeaderColumn>IP</TableHeaderColumn>
        <TableHeaderColumn>MAC</TableHeaderColumn>
        <TableHeaderColumn>Статус</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
        displayRowCheckbox={false}
      	>
      <TableRow>
        <TableRowColumn>10.199.247.82 </TableRowColumn>
        <TableRowColumn>2c:fd:a1:cc:e1:0c </TableRowColumn>
        <TableRowColumn>Offline</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>10.199.247.83 </TableRowColumn>
        <TableRowColumn>08:60:6e:e2:30:d0</TableRowColumn>
        <TableRowColumn>Offline</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>10.199.247.231 </TableRowColumn>
        <TableRowColumn>00:21:91:2e:23:3c </TableRowColumn>
        <TableRowColumn>Offline</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>193.151.59.105 </TableRowColumn>
        <TableRowColumn>b0:6e:bf:a2:fb:f0 </TableRowColumn>
        <TableRowColumn>Online</TableRowColumn>
      </TableRow>

    </TableBody>
  </Table>
);
}
}
export default Internet;
