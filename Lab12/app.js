const express = require('express');
const productRouter = require('./routes/products')
const userRouter= require('./routes/users')


const app = express();



app.use('/products',productRouter)
app.use('/users',userRouter)

app.listen(3000,()=>console.log("Listening to port 3000"));




