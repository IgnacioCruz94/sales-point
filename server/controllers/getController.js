//const { response } = require('express');
const products = require('../models-db/products');

// Fecth all products
const getAll = async (req, res) => {
    try {
        /* const items = await products.find({})
    .select('_id name price') */
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
    //return res.send(items)  
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAll,
};