//imports
const express = require('express');
const router = express.Router();
const { getProduct, addProduct, updateProduct } = require('./controllers/product.controller');

//define the api routes
router.get('/products/:stock_number', getProduct);
router.post('/products', addProduct);
router.put('/products/:stock_number', updateProduct);


//export the router
module.exports = router;