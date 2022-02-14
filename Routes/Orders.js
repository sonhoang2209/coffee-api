const express = require('express');
const router = express.Router();
const Order = require('../models/Order')

router.get('/' , async (req , res) => {
    try{
        const orders = await Order.find();
        res.json(orders);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:orderId' , async (req , res) => {
    try{
        const order = await Order.findById(req.params.orderId);
        res.json( order );
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/add' , async (req , res) => {
    const order = new Order({
        id_user: req.body.id_user,
        fullName: req.body.fullName,
        list_product: req.body.list_product,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        ticket: req.body.ticket
    });

    try{
        const saveOrder = await order.save();
        res.json(saveOrder._id);
    }catch( err ) {
        res.json({message: err});
    }
});

router.patch('/upd/:Id' , async (req , res) => {
    try{
        const update = await Order.updateOne(
            {_id: req.params.Id}, 
            { $set: {
                id_user: req.body.id_user,
                fullName: req.body.fullName,
                list_product: req.body.list_product,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                ticket: req.body.ticket
            }} 
        );
        res.json(update);
    }
    catch( err ) {
        res.json({ message: err });
    }
});

router.post('/del/:orderId' , async (req , res) => {
    try{
        const remove = await Order.remove({_id: req.params.orderId})
        res.json(remove);
    }
    catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;

