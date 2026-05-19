class OrdersAPI{
constructor(request){this.request=request}

async createOrder(token,data){
return await this.request.post('/orders',{
headers:{Authorization:`Bearer ${token}`},
data
})
}

async getSingleOrder(token,id){
return await this.request.get(`/orders/${id}`,{
headers:{Authorization:`Bearer ${token}`}
})
}

async updateOrder(token,id,data){
return await this.request.patch(`/orders/${id}`,{
headers:{Authorization:`Bearer ${token}`},
data
})
}

async deleteOrder(token,id){
return await this.request.delete(`/orders/${id}`,{
headers:{Authorization:`Bearer ${token}`}
})
}
}
module.exports=OrdersAPI;
