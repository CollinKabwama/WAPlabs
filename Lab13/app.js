const express = require('express');


const bookRouter = require('./routes/books')
const app = express();


// middleware
app.use(express.urlencoded())
app.use(express.json())


// routes
app.get('/',(req,res)=>{
    res.status(200).json({"msg":"Testing"})
})
app.use('/books',bookRouter)











const port = 3000

app.listen(port, ()=> console.log(`Listening on port ${port}`) )