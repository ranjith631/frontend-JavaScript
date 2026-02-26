// function sum(val){
//     return new Promise((resolve,reject)=>{
//         resolve(val+10);
//     })
// }


// function mul(val){
// return new Promise((resolve,reject)=>{
//     resolve(val*2);
// })
// }

// function sub(val){
//     return new Promise((resolve,reject)=>{
//         resolve(val-5);
//     })
// }

// function div(val){
//     return new Promise((resolve,reject)=>{
//         resolve(val/2);
//     })
// }
// sum(10).then(res1=>console.log(res1));
// mul(res1).then(res2=>console.log(res2));
// sub(res2).then(res3=>console.log(res3));
// div(res3).then(res4=>console.log(res4));

// sum(10).then(res1=>{
//     console.log(res1);
//     mul(res1).then(res2=>{
//         console.log(res2);
//         sub(res2).then(res3=>{
//             console.log(res3);
//             div(res3).then(res4=>{
//                 console.log(res4);
                
//             })
            
//         })
//     })
    
// })



let promise1= new Promise((resolve,reject)=>{
    console.log("promise 1");
    setTimeout(() => {
        resolve("success 1")
    }, 3000);
    
})

let promise2= new Promise((resolve,resject)=>{
    console.log("promise 2");
    setTimeout(() => {
        resolve("success 2")
    }, 1500);
    
})

let promise3= new Promise((resolve,reject)=>{
    console.log("promise 3");
    setTimeout(() => {
        resolve("success 3")
    }, 1000);
    
})

// promise1.then(res=>{console.log(res)});
// promise2.then(res=>{console.log(res)});
// promise3.then(res=>{console.log(res)});
promise1.then(res1=>{console.log(res1);
    promise1.then(res2=>{console.log(res2);
        promise3.then(res3=>{console.log(res3);
            
        })
    })
})