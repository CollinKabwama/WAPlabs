const express = require('express');
const path = require("path")

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','products.html'))
})

router.post('/', (req,res)=>{
    const product = req.body
    res.status(201).json({ product })
})


module.exports = router;