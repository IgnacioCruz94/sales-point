const products = require('../models-db/products');

// Fecth all products
const getAll = async (req, res) => {
    try {
    await products.find({})           
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
    });  
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAll,
};