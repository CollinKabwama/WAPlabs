const express = require('express');
const productRouter = require('./routes/products')
const userRouter= require('./routes/users')


const app = express();

app.use(express.json());
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.send("Home page")

})
app.use('/products',productRouter)
app.use('/users',userRouter)


app.use((req,res,next)=>{
    res.status(400).send("Resource not found");
})
app.use((err,req,res,next)=>{
    res.status(500).send("Something broke");
})

app.listen(3000,()=>console.log("Listening to port 3000"));




