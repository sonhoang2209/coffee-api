const express = require('express');
const router = express.Router();
const Coffee = require('../models/Coffee')

router.get('/' , async (req , res) => {
    try{
        const coffees = await Coffee.find();
        res.json(coffees);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:coffeeId' , async (req , res) => {
    try{
        const coffee = await Coffee.findById(req.params.coffeeId);
        res.json(coffee);
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/add' , async (req , res) => {
    const coffee = new Coffee({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        options: req.body.options,
        images: req.body.images,
        thumbnail: req.body.thumbnail,
        slug: req.body.slug,
        type_id: req.body.type_id,
        new: 1,
    });

    try{
        const saveCoffee = await coffee.save();
        res.json(saveCoffee);
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/del/:coffeeId' , async (req , res) => {
    
    try{
        const removeCoffees = await Coffee.remove({_id: req.params.coffeeId})
        res.json(removeCoffees);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.post('/upd/:coffeeId' , async (req , res) => {
    try{
        const updateCoffee = await Coffee.updateOne(
            {_id: req.params.coffeeId}, 
            { $set: {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                options: req.body.options,
                images: req.body.images,
                thumbnail: req.body.thumbnail,
                slug: req.body.slug,
                type_id: req.body.type_id,
                new: req.body.new,
            }} 
        );
        res.json(updateCoffee);
    }
    catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;

