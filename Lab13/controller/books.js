const Book = require('../models/books')

module.exports.getAllBooks = (req,res)=>{
    res.json(Book.getAllBooks())    
}

module.exports.getBookById = (req,res)=>{
    res.json(Book.getBookById(req.params.id))
}

module.exports.saveBook = (req,res)=>{
    const {title, isbn, publishedDate, author} = req.body;
    const newBook = new Book(null ,title, isbn, publishedDate, author)
    newBook.saveBook();
    res.status(201).json(newBook)

}

module.exports.updateBook = (req,res)=>{
    const {title, isbn, publishedDate, author} = req.body;
    const newBook = new Book(null ,title, isbn, publishedDate, author)
    newBook.id = req.params.id;
    newBook.updateById(req.params.id)
    res.status(200).json(newBook)
}

module.exports.deleteById = (req,res, next)=>{
    Book.deleteById(req.params.id);
    res.status(200).end();
}

