//callback hell example
function orderplacing(callback){
    callback("order placed.")
}
function orderdispatching(callback){
    callback("order has been dispatched.")
}
function ordershipping(callback){
    callback("order has be shipped by flipkart.")
}
function delivery(callback){
    callback("your order has been delivered successfull.")
}
orderplacing((result1)=>{
    console.log(result1);
    orderdispatching((result2)=>{
        console.log(result2);
        ordershipping((result3)=>{
            console.log(result3);
            delivery((result4)=>{
                console.log(result4);
                
            })
            
        })
    })
})