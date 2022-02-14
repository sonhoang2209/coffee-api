const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket')

router.get('/' , async (req , res) => {
    try{
        const tickets = await Ticket.find();
        res.json(tickets);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:ticketId' , async (req , res) => {
    try{
        const ticket = await Ticket.findById(req.params.ticketId);
        res.json( ticket );
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/add' , async (req , res) => {
    const category = new Ticket({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        discount_rate: req.body.discount_rate,
        barcode: req.body.barcode
    });

    try{
        const saveCategory = await category.save();
        res.json(saveCategory);
    }catch( err ) {
        res.json({message: err});
    }
});

router.delete('/del/:ticketId' , async (req , res) => {
    try{
        const ticket = await Ticket.remove({_id: req.params.ticketId})
        res.json( ticket );
    }catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;
