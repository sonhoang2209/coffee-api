const express = require('express');
const router = express.Router();
const Category = require('../models/Category')

router.get('/' , async (req , res) => {
    try{
        const Categories = await Category.find();
        res.json(Categories);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:categoryId' , async (req , res) => {
    try{
        const category = await Category.findById(req.params.categoryId);
        res.json( category );
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/add' , async (req , res) => {
    const category = new Category({
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        slug: req.body.slug,
        type_id: req.body.type_id,
    });

    try{
        const saveCategory = await category.save();
        res.json(saveCategory);
    }catch( err ) {
        res.json({message: err});
    }
});

router.delete('/del/:categoryId' , async (req , res) => {
    
    try{
        const removeCategory = await Category.remove({_id: req.params.categoryId})
        res.json(removeCategory);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.post('/upd/:categoryId' , async (req , res) => {
    try{
        const updateCategory = await Category.updateOne(
            {_id: req.params.categoryId}, 
            { $set: {
                name: req.body.name,
                thumbnail: req.body.thumbnail,
                slug: req.body.slug,
                type_id: req.body.type_id,
            }} 
        );
        res.json(updateCategory);
    }
    catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;

