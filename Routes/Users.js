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

router.post('/add' , async (req , res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
    });

    try{
        const saveUser = await user.save();
        res.json(saveUser);
    }catch( err ) {
        res.json({message: err});
    }
});

router.delete('/del/:userId' , async (req , res) => {
    try{
        const removeUser = await User.remove({_id: req.params.userId})
        res.json(removeUser);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.patch('/upd/:userId' , async (req , res) => {
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

