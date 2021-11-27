import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

function LoginForm({productsAdded}) {
    
    const[details,setDetails]=useState({name:"", price:""});
 
    const submitHandler = e =>{
        e.preventDefault();
        productsAdded(details);
    }
    
  return (
        <form onSubmit = {submitHandler}>
            <div className="form-inner" style={{
                paddingBlock:"50px",
                display:"grid",
                justifyContent:"center",
                gap:"15px"
            }}>
                <h2>New Product Info</h2>
                <div className="form-group">
                    <TextField required type="text" label="Name" id="name" onChange = {e => setDetails({...details, name: e.target.value})}  value={details.name} />
                </div>
                <div className="form-group">
                    <TextField required type="number" label="Price" id="price" onChange = {e => setDetails({...details, price: e.target.value})}  value={details.price} />
                </div>
                <div>
                    <Button variant="contained" type="submit">
                    Send
                    </Button>
                </div>
            </div>
        </form>
  );
}

export default LoginForm;