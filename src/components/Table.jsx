import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {cart} from '../Redux/selectors';
import { /* useDispatch, */ useSelector } from "react-redux";


export default function BasicTable() {
  const [clientMoney, setClientMoney] = React.useState(0);
  const productsAdded = useSelector(cart);
  const productsAddedUnique = [];

  function createData(productName, quantity, price) {
    return { productName, quantity, price};
  }
  
  productsAdded.map(x => productsAddedUnique.filter(a => a.name === x.name).length > 0 ? null : productsAddedUnique.push(x));

  const fillTable = productsAddedUnique.map((item) => {
    const itemsQuantity = productsAdded.filter((items) => {
      return items.name === item.name;
      })
    return createData(item.name , itemsQuantity.length, item.price);
  });
  const total = fillTable.map(({ price,quantity }) => price*quantity).reduce((sum, i) => sum + i, 0);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price&nbsp;(MXN)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fillTable.map((row) => (
            <TableRow
              key={row.productName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.quantity * row.price}</TableCell>
            </TableRow>
          ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell align="right" colSpan={1}>Total</TableCell>
              <TableCell align="right">{total}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" colSpan={1}>Client Money</TableCell>
              <TableCell align="right">
                <TextField id="money" label="$0.00" variant="outlined" type="number" onChange = {e => setClientMoney( e.target.value)}/>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" colSpan={1}>Change</TableCell>
              <TableCell align="right">{(clientMoney === 0)?"":clientMoney - total}</TableCell>
            </TableRow>
        </TableBody>
      </Table>

    </TableContainer>
  );
}
