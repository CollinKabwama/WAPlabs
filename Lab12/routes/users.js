const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','users.html'))
})

router.post('/', (req,res)=>{
    const user = req.body
    res.status(201).json({ user })
})

module.exports = router;