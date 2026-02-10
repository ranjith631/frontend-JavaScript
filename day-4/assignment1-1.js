//e-commerce discount Application
var membership="vip";
var amount=1000;
var discount=0;
if(amount<0){
    console.log("invalid purchase");
    
}
else if(membership=="regular"){
    if(amount<100){
        discount=0;
    }
    else if(amount <=500){
        discount=0.05;
    }
    else{
        discount=0.10;
    }
}
else if(membership=="vip"){
    if(amount<100){
        discount=0.10;
    }
    else if(amount<=500){
        discount=0.15;
    }
    else{
        discount=0.20;
    }
}
else{
    console.log("invalid membership Type");
    
}
var finalprice=amount-(amount*discount);
console.log("Final price: $"+finalprice);
