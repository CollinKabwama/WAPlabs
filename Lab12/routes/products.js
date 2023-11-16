const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    console.log("Get product")
    res.end("Get product")
})

router.post('/', (req,res)=>{
    console.log("Post product")
    res.end("Post product")

})







module.exports = router;