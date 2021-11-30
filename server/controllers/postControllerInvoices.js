const invoices = require('../models-db/invoices');

// Add a new invoice
const createInvoice = async (req, res) => {
    const { index, status, products } = req.body;
    try {

        const newInvoice = await invoices.create({ index, status, products });
        return res.json({
            status: "Invoice added successfully",
            newInvoice
        });

        /* const isProductAlreadyAdded = await products.find({name: name}).exec();
        if(isProductAlreadyAdded.length > 0){
            return res.status(500).send('error, product already added');
        }
        const newProduct = await products.create({ name, price });
        return res.json({
            status: "Product added successfully",
            newProduct
        }); */ 
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createInvoice,
};