//Modules
const express = require("express");
const router = express.Router();
const ProductsResources = express.Router();

// Controllers
const { 
    GetController, 
    PostController,
    //UpdateController,
    //DeleteController 
} = require('../controllers');

// All resources
ProductsResources.get('/', GetController.getAll);
ProductsResources.post('/', PostController.createProduct);
//ProductsResources.put('/:id', UpdateController.updateMsg);
//ProductsResources.delete('/:id', DeleteController.deleteMsg);

// All routes
router.use('/api/products', ProductsResources);

module.exports = router;