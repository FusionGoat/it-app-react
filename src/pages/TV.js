import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TV extends Component{

  render(){
    return(



  <Table
    selectable={false}
      >

    <TableBody
      displayRowCheckbox={false}
      >
      <TableRow>
        <TableRowColumn>Адрес предоставления:</TableRowColumn>
        <TableRowColumn>Ахматовой 7/15 квартира 317 </TableRowColumn>

      </TableRow>
      <TableRow>
        <TableRowColumn>Состояние услуги:</TableRowColumn>
        <TableRowColumn>Подключенный</TableRowColumn>

      </TableRow>
      <TableRow>
        <TableRowColumn>Лицевой счёт:</TableRowColumn>
        <TableRowColumn>13303170</TableRowColumn>

      </TableRow>
      <TableRow>
        <TableRowColumn>Пакет:</TableRowColumn>
        <TableRowColumn>Пакет 27+ (70 каналов)</TableRowColumn>

      </TableRow><TableRow>
        <TableRowColumn>Абонплата:</TableRowColumn>
        <TableRowColumn>63.50</TableRowColumn>

      </TableRow>

    </TableBody>
  </Table>

);
}
}
export default TV;
