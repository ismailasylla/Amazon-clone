var router = require('express').Router();





router.get('/',(req,res)=>{
    res.render('main/home.ejs');
});

router.get('/about', (req, res)=>{
    res.render('main/about.ejs');

});



module.exports = router;


