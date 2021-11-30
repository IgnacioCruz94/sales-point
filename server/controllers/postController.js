const products = require('../models-db/products');

// Add a new product
const createProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        const isProductAlreadyAdded = await products.find({name: name}).exec();
        if(isProductAlreadyAdded.length > 0){
            return res.status(500).send('error, product already added');
        }
        const newProduct = await products.create({ name, price });
        return res.json({
            status: "Product added successfully",
            newProduct
        }); 
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createProduct,
};