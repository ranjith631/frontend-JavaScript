/**
 * 1.          Basic Callback Execution
 Write a function called processNumber that accepts a number and a callback function. The processNumber function should double the number and pass the result to the callback function.

 */
function proccessNumber(num,callback){
 var double=num*2;
 callback(double);
 
}
function results(value){
    console.log("resluts "+value);
    
}
proccessNumber(10,results);

/**
 *     Callback with Array Iteration
 Write a function called forEachElement that takes an array and a callback function. The function should iterate over the array and execute the callback function for each element, passing the element as an argument.

 */

 function forEachElement(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
function printelement(element){
    console.log(element);   
}
let arr=[1, 2, 3, 4, 5];
forEachElement(arr,printelement);


/**
 * 3.          Simple Delayed Callback
 Write a function sayHello that accepts a name and a callback function. Use setTimeout to wait for 1 second and then call the callback function, passing the message "Hello, [name]!" (replace [name] with the provided name).

 */

 function sayHello(name,callback){
    setTimeout(() => {
        callback("hello "+name);    
    }, 1000);
 }
sayHello("raju",function(message){
    console.log(message);
    
})

/**
 * 4.          Callback on Condition
 Write a function checkEven that accepts a number and two callback functions. If the number is even, call the first callback with the number. If the number is odd, call the second callback with the number.

 */
function checkNum(number, evenCallback, oddCallback){
    if(number%2===0){
        evenCallback(number);
    }else{
        oddCallback(number);
    }
}
// checkNum(10,num=>console.log(num+"is even"),check);
checkNum(11,(num)=>console.log(num+"is even"),(num)=>console.log(num+"is odd"));


