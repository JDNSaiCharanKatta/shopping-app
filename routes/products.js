const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 },
  { id: 3, name: 'Headphones', price: 199 },
  { id: 4, name: 'Smartwatch', price: 249 },
  { id: 5, name: 'Wireless Mouse', price: 29 },
  { id: 6, name: 'Bluetooth Speaker', price: 89 },
  { id: 7, name: 'Smart TV', price: 799 },
  { id: 8, name: 'Tablet', price: 329 },
  { id: 9, name: 'Gaming Console', price: 499 },
  { id: 10, name: 'External Hard Drive', price: 89 },
  { id: 11, name: 'Wireless Earbuds', price: 129 },
  { id: 12, name: 'Camera', price: 599 },
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;


module.exports = router;
