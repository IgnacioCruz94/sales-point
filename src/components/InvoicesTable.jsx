import * as React from 'react';
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
import Loading from './Loading'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {getInvoices} from '../Redux/invoicesThunks';
import { useDispatch, useSelector } from "react-redux";
import { selectInvoicesProducts } from "../Redux/selectors";
import { UpdateInvoiceStatus } from "../Redux/invoicesSlice";

function createData(id, date, status,products) {
  return {
    id,
    date,
    status,
    history: products,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [statusValues, setStatusValues] = React.useState(row.status);
  const dispatch = useDispatch();

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
        <TableCell align="center">{(statusValues === true)?"finished":"canceled"}</TableCell>
        <TableCell align="center"><Button disabled={!statusValues} onClick={() => {
          setStatusValues(false)
          console.log(row.id)
          dispatch(UpdateInvoiceStatus(row.id))
          }}>Cancel Purchase</Button></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse key={row._id} in={open} timeout="auto" unmountOnExit>
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
                    <TableRow key={historyRow.productName}>
                      <TableCell component="th" scope="row">
                        {historyRow.productName}
                      </TableCell>
                      <TableCell align="center">{historyRow.quantity}</TableCell>
                      <TableCell align="right">{historyRow.price }</TableCell>
                    </TableRow>
                  ))}
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell align="right" colSpan={1}>Total</TableCell>
                      <TableCell align="right">{row.history.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
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

export default function CollapsibleTable() {
  const dispatch = useDispatch();
  const invoicesData = useSelector(selectInvoicesProducts);
  React.useEffect(
    () =>{
      if(invoicesData.length === 0){
        dispatch(getInvoices());
      }
      // eslint-disable-next-line
    }, [invoicesData]
  );

if (invoicesData.length === 0) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Loading/>
    </div>
  );
}
const fillTable = invoicesData.map((item) => {
    return createData(item._id, item.created_at, item.status, item.products);
}); 
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
