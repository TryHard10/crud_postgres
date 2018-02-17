var Product = require('../models/product_model.js');
var bodyParser = require('body-parser');
var express = require('express');

var router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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

function create(req, res)
{
    Product.forge(
        {
            product_name : req.body.product_name,
            product_price : req.body.product_price,
            product_description : req.body.product_description
        }
    ).save(null, {method : 'insert'}).then(product =>
        {
            res.json({error:false, data: product.toJSON()});
        }).catch(error =>
            {
                res.json({error : true, data : error});
            }
        )
}

function update(req, res)
{
    Product.where('product_id', req.params.id).fetch().then( product =>
    {
        product.save(
            {
                product_name : req.body.product_name,
                product_price : req.body.product_price,
                product_description : req.body.product_description
            }
        ).then(response =>
            {
                res.json({error:false, data: response});
            }).catch( error =>
                    {
                        res.json({error:true, data:error});
                    })
    }).catch(error =>
            {
               res.json({error: true, data:error});
            });
}

function show(req, res)
{
    Product.where('product_id', req.params.id).fetch().then( product =>
    {
        if(product == null)
        {
            res.json({error: true, data: "No existe"});
        }
        else
        {
            res.json({error: false, data: product});
        }
    }).catch( error =>
            {
                res.json({error:true, data:'No existe'});
            })
}

function _delete(req, res)
{
    Product.where('product_id', req.params.id).fetch().then( producto=>
    {
        producto.destroy().then( response =>
        {
            res.json({error:false, data: response});
        }).catch(error =>
        {
            res.json({error:true, data:error});
        })
    })
}


app.get(route, index);
app.get(route + '/:id', show);
app.post(route, create);
app.put(route + '/:id', update);
app.delete(route + '/:id', _delete);
module.exports = app;