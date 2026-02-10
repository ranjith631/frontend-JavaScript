//Discount Calculator

var purchaseAmount=prompt("enter the purchase amount to get discount:")
var discount=0;
if(purchaseAmount<50){
    discount=0;
    // console.log("No Discount below purchase of 500");  
}
else if(purchaseAmount>=50 && purchaseAmount<=100){
    discount=5;
    // console.log("dicount for you purchase 5%:"+);
    
}
else if(purchaseAmount>100 && purchaseAmount<=200){
    discount=10;
}
else if(purchaseAmount>=200){
    discount=15;
}
var dicountpercentage=(discount/100)* purchaseAmount;
var finalPrice=purchaseAmount - dicountpercentage;
if(purchaseAmount==0){
    console.log("no discount:");
    
}
else{
    console.log("your get "+discount+" %discount and your final price after discount: "+finalPrice);
    
}