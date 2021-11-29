const products = require('../models-db/products');

// Add a new product
const createProduct = async (req, res) => {
    const { name, price } = req.body;

    try {
        const newProduct = await products.create({ name, price });
        return res.json({
            status: "Produuct added successfully",
            newProduct
        }); 
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createProduct,
};