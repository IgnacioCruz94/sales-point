import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch} from 'react-redux';
import { AddInvoice } from '../Redux/invoicesSlice';
import {getInvoices} from '../Redux/invoicesThunks';
import {cleanCart} from '../Redux/cartProductsSlice';
import {cleanCounter} from '../Redux/itemsAddedSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({purchase}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getInvoices())
    // eslint-disable-next-line
  }, [open]);

  const refetchInvoices = () => {
    dispatch(AddInvoice(purchase))
    dispatch(cleanCart())
    dispatch(cleanCounter())
    setOpen(false)
  };

  return (
    <div style={{margin:'30px 30px 30px 30px', display: "flex", justifyContent: "center"}}>
      <Button onClick={handleOpen} sx={{alignSelf: "center"}}>Finish</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Successull Purchase
          </Typography>
          <Button 
          onClick={refetchInvoices}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
