const express = require("express")
const router = express.Router()
const Product = require('../models/Product')
const fs = require('fs')
var util = require('util')

router.get('/', (req, res) => {

    Product.find({}, (err, products) => {
        res.json(products)

    })
    //show categorie

    router.get('/showc', (req, res) => {

        res.render('product/showc')

    })
    //serach product 
    router.get('/showp', function (req, res) {
        if (req.query.search) {
            const regex = new RegExp(escapeRegex(req.query.search), 'gi')
            Product.find({ categories: regex }, function (err, allProducts) {
                if (err) {
                    console.log(err)
                } else {
                    res.json({ products: allProducts })
                }
            }).sort({ "nutriments.energy_value": 1 }).collation({ locale: "en_US", numericOrdering: true })
        } else {

            Product.find({}, function (err, allProducts) {
                if (err) {
                    console.log(err)
                } else {
                    res.render('product/showp', { products: allProducts })
                }
            })
        }

    })



    //show single product
    router.get('/:_id', (req, res) => {

        console.log(req.params._id)

        Product.findOne({ _id: req.params._id }, (err, product) => {

            if (!err) {
                res.json({ product: product })
            }

        })

    })








})
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router