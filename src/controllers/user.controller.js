const express = require("express");

const router = express.Router();

const User = require("../models/users.model");

router.post("/",async(req,res)=>{
    try{
        const user = await User.create(req.body);

        return res.status(201).send(user);
    } catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
})

module.exports = router;

