const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Laptop', price: 999, image: '/images/laptop.jpg' },
  { id: 2, name: 'Phone', price: 499, image: '/images/phone.jpg' },
  { id: 3, name: 'Headphones', price: 199, image: '/images/headphones.jpg' },
  { id: 4, name: 'Smartwatch', price: 249, image: '/images/smartwatch.jpg' },
  { id: 5, name: 'Wireless Mouse', price: 29, image: '/images/mouse.jpg' },
  { id: 6, name: 'Bluetooth Speaker', price: 89, image: '/images/speaker.jpg' },
  { id: 7, name: 'Smart TV', price: 799, image: '/images/tv.jpg' },
  { id: 8, name: 'Tablet', price: 329, image: '/images/tablet.jpg' },
  { id: 9, name: 'Gaming Console', price: 499, image: '/images/console.jpg' },
  { id: 10, name: 'External Hard Drive', price: 89, image: '/images/harddrive.jpg' },
  { id: 11, name: 'Wireless Earbuds', price: 129, image: '/images/earbuds.jpg' },
  { id: 12, name: 'Camera', price: 599, image: '/images/camera.jpg' },
  { id: 13, name: 'Mechanical Keyboard', price: 109, image: '/images/keyboard.jpg' },
  { id: 14, name: 'Drone', price: 699, image: '/images/drone.jpg' },
  { id: 15, name: 'VR Headset', price: 399, image: '/images/vr.jpg' }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
