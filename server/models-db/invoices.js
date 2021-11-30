const mongoose = require('mongoose');

//const newschema = new mongoose.Schema({product: {type: String}, quantity: {type: Number}, totalPrice: {type: Number}});

const schema = new mongoose.Schema({
    products: [],
    status: {
        type: Boolean,
        required: true,
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model("invoices", schema);
//mongoose.model("pruduct", newschema);