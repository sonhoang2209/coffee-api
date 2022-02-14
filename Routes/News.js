const express = require('express');
const router = express.Router();
const News = require('../models/News')

router.get('/' , async (req , res) => {
    try{
        const coffees = await News.find();
        res.json(coffees);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:coffeeId' , async (req , res) => {
    try{
        const coffee = await News.findById(req.params.coffeeId);
        res.json( coffee );
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/add' , async (req , res) => {
    const newfeed = new News({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        html: req.body.html,
        url: req.body.url
    });

    try{
        const save = await newfeed.save();
        res.json(save._id);
    }catch( err ) {
        res.json({message: err});
    }
});

router.patch('/upd/:Id' , async (req , res) => {
    try{
        const update = await News.updateOne(
            {_id: req.params.Id}, 
            { $set: {
                title: req.body.title,
                thumbnail: req.body.thumbnail,
                html: req.body.html,
                url: req.body.url
            }} 
        );
        res.json(update);
    }
    catch( err ) {
        res.json({ message: err });
    }
});

router.post('/del/:Id' , async (req , res) => {
    try{
        const remove = await News.remove({_id: req.params.Id})
        res.json(remove);
    }
    catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;
