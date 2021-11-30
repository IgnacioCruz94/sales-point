const invoices = require('../models-db/invoices');

// Update an invoice status
const updateInvoiceStatus = async (req, res) => {
    const id = req.params.id;
    const status = req.body;
    const validator = await invoices.findById(id);

    try {
        if (validator) {
            if (status !== "") {
                await invoices.findByIdAndUpdate(id, status);
                return res.send("Status updated successfully");
            } else {
                res.send("The field 'status' is empty!");   
            }
        } else {
            res.send(`Could not find the id: ${id}`);
        }
    } catch (error) {
        res.status(500).send(`Error updating the message: ${error}`);
    }
};

module.exports = {
    updateInvoiceStatus,
};