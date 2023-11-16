const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    console.log("Get user")
    res.end("Get user")

})

router.post('/', (req,res)=>{
    console.log("Post user")
    res.end("Post user")

})




module.exports = router;