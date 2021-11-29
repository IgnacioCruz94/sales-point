import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function createData(productName, quantity, price) {
  return { productName, quantity, price};
}

const productsAdded = [
  {name: 'Bike', quantity: 1 , price: 100},
  {name: 'TV', quantity: 2, price: 200},
  {name: 'Album', quantity: 4, price: 10},
  {name: 'Book', quantity: 10, price: 5},
  {name: 'Phone', quantity: 3, price: 500},
  {name: 'Computer', quantity: 2, price: 25}
];

const fillTable = productsAdded.map((item) => {
  return createData(item.name , item.quantity, item.price);
});

const total = fillTable.map(({ price }) => price).reduce((sum, i) => sum + i, 0);

export default function BasicTable() {
  const [clientMoney, setClientMoney] = React.useState(0);
  /* const products = useSelector((state) => state.itemCounter.cart);
  const cart = useSelector((state) => state.itemCounter.cart);
  const dispatch = useDispatch();

  const cartUpdated = () => (products.map((elem) => {
    if(cart.includes(elem.id)) {
      let counter = 0; 
      cart.map((element, index) => {
        if(elem.id === element.quantity) {
          counter += 1;
          dispatch(updateCart({index: index, quantity: counter}));
        }
      })
    }
  }));

  React.useEffect(() => {
    cartUpdated();
  },[]) */

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
              <TableCell align="right">{row.price}</TableCell>
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
