const invoices = require('../models-db/invoices');

// Fecth all invoices
const getAllInvoices = async (req, res) => {
    try {

        const Invoices = await invoices.find({})
    /* .select('_id name price') */
    /* await products.find({})           
    .select('_id name price')
    .then(items => {
        const products = {
            Count: items.length,
            ProductsList: items.map(item => {
                return {
                    id: item._id,
                    name: item.name,
                    price: item.price,
                }
            })
        }
        res.send(products);
    }); */  
        return res.send(Invoices);  
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAllInvoices,
};