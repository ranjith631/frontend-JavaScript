/**
 * ask 1: Greeting Function
Scenario: Create a function that takes a name as an argument
and returns a greeting message.
Task:
Define a function greet that takes one parameter name.
The function should print a greeting message like “Hello, [name]!”.
Call the function with different names and print the results.
 */

function greeting(name){
    return("hello, "+name);
}
console.log(greeting("raaj"));


/**Task 2: Sum Function
Scenario: Create a function that takes two numbers as arguments and
returns their sum.
Task:
Define a function sum that takes two parameters a and b.
The function should return the sum of a and b.
Call the function with different numbers and print the results.
 */
function sum(a,b){
    return(a+b);
}
console.log(sum(10,10));


/**ask 3: Square Function
Scenario: Create a function that takes a number as an argument
and returns its square.
Task:
Define a function square that takes one parameter num.
The function should return the square of num.
Call the function with different numbers and
print the results.
 */

function square(a){
    return(a*a);
}
console.log(square(10));


/**Task 4: Average Function
Scenario: Create a function that takes an array of numbers
as an argument and returns the average.
Task:
hint:[2,5,2] =9/3=3
Define a function average that takes one parameter arr.
The function should return the average of the numbers in arr.
Call the function with different arrays and print the results.

 */
function average(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length
}
console.log(average([10,20,30,40]));//4(4/100=25)


/**Task 5: Vowels Function
Scenario: Create a function that takes a string as an argument and
returns weather the strings contains vowels or not .
Task:
Define a function that takes one parameter str.
The function should return whether string contains vowels or not.
use loops and if conditions
Call the function with different strings and print the results.
hello --a,e ,i ,o,u---it contains vowels
hll---it doesnt contains vowels
 */

function vowels(str){
    for(i=0;i<str.length;i++){
    let char=str[i];
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        return true;
    }
}
return false;
}
console.log(vowels("hello"));  
console.log(vowels("hll"));  
console.log(vowels("sky"));   
console.log(vowels("audio")); 
console.log(vowels("rhythm")); 
