const invoices = require('../models-db/invoices');

// Add a new invoice
const createInvoice = async (req, res) => {
    const { status, products } = req.body;
    try {
        const newInvoice = await invoices.create({ status, products });
        return res.json({
            status: "Invoice added successfully",
            newInvoice
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createInvoice,
};