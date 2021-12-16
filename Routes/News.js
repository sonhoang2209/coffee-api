const express = require('express');
const router = express.Router();
const Coffee = require('../models/News')

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
        res.json( coffee );
    }catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;
