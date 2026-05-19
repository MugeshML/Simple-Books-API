const {test,expect}=require('@playwright/test');
const BooksAPI=require('../../pages/BooksAPI');

test('Get Status',async({request})=>{
const books=new BooksAPI(request);
const response=await books.getStatus();
expect(response.status()).toBe(200);
});
