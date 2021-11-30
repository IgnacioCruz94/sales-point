import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ProductForm from './AddProductForm';
import { AddProduct } from '../Redux/productsSlice';
import { useDispatch,useSelector } from 'react-redux';
import { selectProducts} from "../Redux/selectors";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [error,setError] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const productsData = useSelector(selectProducts);
  
  const productsAdded = details =>{
        if (productsData.filter(e => e.name === details.name).length === 0) {
          dispatch(AddProduct(details));
          setOpen(false);
        }
        else{
          setError('Error: Product already in system')
        }    
  }

  return (
    <div style={{margin:'0px 30px 30px 30px'}}>
      <Button onClick={handleOpen}>Add New Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProductForm productsAdded = {productsAdded} error = {error} />
        </Box>
      </Modal>
    </div>
  );
}
