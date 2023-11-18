
let books=[
    {id:1, title:"title1", isbn:"isbn1", publishedDate:"date1", author:"author1" },
    {id:2, title:"title2", isbn:"isbn2", publishedDate:"date2", author:"author2" },
    {id:3, title:"title3", isbn:"isbn3", publishedDate:"date3", author:"author3" },
    {id:4, title:"title4", isbn:"isbn4", publishedDate:"date4", author:"author4" },
];
let counter = 5;


module.exports = class Book {
    constructor( id, title, isbn, publishedDate, author){
        this.id = id,
        this.title = title,
        this.isbn = isbn,
        this.publishedDate = publishedDate,
        this.author = author
    }

    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        return books.find(p=>p.id==id);
    }

    saveBook(){
        this.id = counter++;
        books.push(this)
    }

    updateById(id){
        const index =  books.findIndex(p=>p.index=id);
        if(index>-1){
            books[index] = this
        }else{
            throw new Error(`Book with ID: ${id} is not in the DB `)
        }
    }

    static deleteById(id){
        const index = books.findIndex(p=>p.id==id)
        if(index>-1){
            books.splice(index,1)
        }else{
            throw new Error(`Book with ID: ${id} is not in the DB `)
        }
    }


}



