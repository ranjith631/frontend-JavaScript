/**1.Write an arrow function that takes two parameters, a and b, and returns their sum.
 */
let sum=(a,b)=>{
    return(a+b)
}
console.log(sum(1,2));


/**
 * 2.Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
 */
let message=name=>"hello, "+name;
console.log(message("raj"));

/**
 * 3. Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.

 */
let checkEven=num=>num%2===0;
console.log(checkEven(5));
console.log(checkEven(2));


/**
 * 4.Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.

 */
let checkNum=num=>num>10;
console.log(checkNum(2));
console.log(checkNum(11));

/**
 *   Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”
 */
let longerString=(str1,str2)=>
str1.length>str2.length?str1:
str1.length<str2.length?str2:
"equal lenght.";

console.log(longerString("hi.","hello"));
console.log(longerString("","h"));
console.log(longerString("ok","ok"));
