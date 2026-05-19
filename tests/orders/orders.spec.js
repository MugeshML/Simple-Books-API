const {test,expect}=require('@playwright/test');
const AuthAPI=require('../../pages/AuthAPI');
const OrdersAPI=require('../../pages/OrdersAPI');
const data=require('../../utils/testData');

test('Order Flow',async({request})=>{

const auth=new AuthAPI(request);

const tokenRes=await auth.createToken({
clientName:data.clientName,
clientEmail:data.clientEmail
});

const token=(await tokenRes.json()).accessToken;

const orders=new OrdersAPI(request);

const create=await orders.createOrder(token,{
bookId:data.bookId,
customerName:data.customerName
});

expect(create.status()).toBe(201);

const orderId=(await create.json()).orderId;

expect((await orders.getSingleOrder(token,orderId)).status()).toBe(200);

expect((await orders.updateOrder(token,orderId,{
customerName:data.updatedCustomerName
})).status()).toBe(204);

expect((await orders.deleteOrder(token,orderId)).status()).toBe(204);

});
