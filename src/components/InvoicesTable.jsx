import * as React from 'react';
//import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(id, date, status,products) {
  return {
    id,
    date,
    status,
    history: products,
  };
}

const productsAdded = [[
    {name: 'Bike', quantity: 1 , price: 100},
    {name: 'TV', quantity: 2, price: 200},
    {name: 'Album', quantity: 4, price: 10},
    {name: 'Book', quantity: 10, price: 5},
    {name: 'Phone', quantity: 3, price: 500},
    {name: 'Computer', quantity: 2, price: 25}
  ],
  [{name: 'Bike', quantity: 1 , price: 100},
  {name: 'TV', quantity: 2, price: 200},
  {name: 'Computer', quantity: 2, price: 25}
  ],[
    {name: 'Book', quantity: 10, price: 5},
    {name: 'Phone', quantity: 3, price: 500},
    {name: 'Computer', quantity: 2, price: 25}
  ],[
    {name: 'Computer', quantity: 2, price: 25}
  ]
];


  const purchasesMade = [
    {id: 1, date: '2020-01-05' , status: 'finished',products: productsAdded[0]},
    {id: 2, date: '2020-01-06' , status: 'finished',products: productsAdded[1]},
    {id: 3, date: '2020-01-07' , status: 'canceled',products: productsAdded[2]},
    {id: 4, date: '2020-01-07' , status: 'finished',products: productsAdded[3]}

  ];


  const fillTable = purchasesMade.map((item) => {
    return createData(item.id , item.date, item.status, item.products);
  
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center"> 
          {row.id}
        </TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center"><Button>Cancel Purchase</Button></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell align="center">{historyRow.quantity}</TableCell>
                      <TableCell align="right">{historyRow.price * historyRow.quantity }</TableCell>
                    </TableRow>
                  ))}
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell align="right" colSpan={1}>Total</TableCell>
                      <TableCell align="right">{row.history.map(({ price,quantity }) => price*quantity).reduce((sum, i) => sum + i, 0)
                      }</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

/* Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}; */


export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fillTable.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
