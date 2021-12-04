const express = require("express");

const router = express.Router();

const Student = require("../models/evaluation.model");

router.post("/",async(req,res)=>{
    try{
        const studnet = await Student.create(req.body);

        return res.status(201).send(student);
    } catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});

    }    
})

module.exports = router;