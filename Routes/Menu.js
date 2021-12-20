const express = require('express');
const router = express.Router();
const Coffee = require('../models/Coffee')
const Category = require('../models/Category')

router.get('/' , async (req , res) => {
    try{
        const coffees = await Coffee.find();
        const Categories = await Category.find();
        const menu = [];
        Categories.map(e => {
            var type = e.type_id;
            const products = coffees.filter(e => e.type_id = type);
            menu.push({
                "name": e.name,
                "thumbnail" : e.thumbnail,
                "slug": e.slug,
                "type_id": e.type_id,
                "products": products
            })
        })
        res.json(menu);
    }
    catch( err ) {
        res.json({message: err});
    }
}); 







module.exports = router;
