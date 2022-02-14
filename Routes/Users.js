const express = require('express');
const router = express.Router();
const User = require('../models/User')


router.get('/' , async (req , res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:userId' , async (req , res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json( user );
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/login' , async (req , res) => {
    try{
        const user = await User.findOne({username: req.body.username}, function(err, docs){
            cb(docs);
        });
        res.json( user );
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/add' , async (req , res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        ticketList: req.body.ticketList
    });

    try{
        const saveUser = await user.save();
        res.json('dang ki tai khoan thanh cong');
    }catch( err ) {
        res.json({message: err});
    }
});

router.delete('/del/:userId' , async (req , res) => {
    try{
        const removeUser = await User.remove({_id: req.params.userId})
        res.json('delete : ' + removeUser);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.post('/upd/:userId' , async (req , res) => {
    try{
        const updateUser = await User.updateOne(
            {_id: req.params.userId}, 
            { $set: {
                username:req.body.username ,
                password: req.body.password,
                email: req.body.email,
                phone: req.body.phone
            }} 
        );
        res.json(updateUser);
    }
    catch( err ) {
        res.json({ message: err });
    }
});

module.exports = router;

