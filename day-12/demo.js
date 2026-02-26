console.log("start");
setTimeout(()=>{
    console.log("first call");
    
},5000);

for(i=0;i<=50000;i++){
    console.log("i");
    
}
setTimeout(()=>{
    console.log("second call");
    
},3000)
