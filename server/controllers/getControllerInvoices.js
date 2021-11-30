const invoices = require('../models-db/invoices');

// Fecth all invoices
const getAllInvoices = async (req, res) => {
    try {
        const Invoices = await invoices.find({})
        return res.send(Invoices);  
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAllInvoices,
};