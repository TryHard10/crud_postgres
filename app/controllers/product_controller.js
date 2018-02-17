var Product = require('../models/product_model.js');

var express = require('express');

var router = express.Router();
var app = express()
var route = '/product';

function index(req, res)
{
    Product.fetchAll().then(response=>
    {
        res.json({error : false, data: response});
    }).catch(error=>
    {
        res.json({error : true, data : error});
    });   
}

app.get('/product', index);

module.exports = app;