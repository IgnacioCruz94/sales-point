const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    products: [],
    status: {
        type: Boolean,
        required: true,
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model("invoices", schema);
