//Modules
const express = require("express");
const router = express.Router();
const ProductsResources = express.Router();
const InvoicesResources = express.Router();

// Controllers
const { 
    GetController, 
    PostController,
    PostControllerInvoice,
    GetControllerInvoices
} = require('../controllers');

// All resources
ProductsResources.get('/products', GetController.getAll);
ProductsResources.post('/products', PostController.createProduct);
InvoicesResources.post('/invoices', PostControllerInvoice.createInvoice);
InvoicesResources.get('/invoices', GetControllerInvoices.getAllInvoices);

// All routes
router.use('/api', ProductsResources, InvoicesResources);

module.exports = router;