class BooksAPI{
constructor(request){this.request=request}
async getStatus(){return await this.request.get('/status')}
async getBooks(){return await this.request.get('/books')}
async getSingleBook(bookId){
return await this.request.get(`/books/${bookId}`)
}
}
module.exports=BooksAPI;
