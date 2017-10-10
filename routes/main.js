var router = require('express').Router();
var User = require('../models/user');
var Product = require('../models/product');

router.get('/',(req,res)=>{
    res.render('main/home');
});

router.get('/about', (req, res)=>{
    res.render('main/about.ejs');

});

router.get('/products/:id', (req, res, next)=> {
    Product
    .find({ category: req.params.id })
    .populate('category')
    .exec(function(err, products){
        if(err) return next(err);
        res.render('main/category', {
            products: products
        });
    });
});

router.get('/product/:id', function(req, res, next){
    Product.findById({ _id: req.params.id }, function(err, product){
        if(err) return next();
        res.render('main/product', {
            product: product
        });
    });
});

module.exports = router;


