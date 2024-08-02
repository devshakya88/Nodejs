const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

const products = [];

//Admin add product - GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product' });
});

//Admin add Product - POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
