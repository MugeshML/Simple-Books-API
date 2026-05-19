class AuthAPI{
constructor(request){this.request=request}
async createToken(data){
 return await this.request.post('/api-clients',{data});
}
}
module.exports=AuthAPI;
