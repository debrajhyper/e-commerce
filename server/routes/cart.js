const express = require('express');
const {
    addToCart, // add item to cart
    removeFromCart, // remove item from cart
    getCart, // get cart items
    getCartItemCount // get cart item count
} = require('../controllers/cartController');
const authorizeMiddleware = require('../middleware/auth'); // middleware to authorize requests

const router = express.Router();

// add item to cart
router.post('/', authorizeMiddleware(process.env.AUTH_ROLE_BUYER), addToCart);
// remove item from cart
router.delete('/:id', authorizeMiddleware(process.env.AUTH_ROLE_BUYER), removeFromCart);
// get cart items
router.get('/', authorizeMiddleware(process.env.AUTH_ROLE_BUYER), getCart);
// get cart item count
router.get('/count', authorizeMiddleware(process.env.AUTH_ROLE_BUYER), getCartItemCount);

module.exports = router;