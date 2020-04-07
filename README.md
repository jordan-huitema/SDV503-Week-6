# SDV503-Week-6
Jordan huitema

Link to Lab-4 on Github
https://github.com/jordan-huitema/Lab-Three

Link to clone SDV503-Week-5
https://github.com/jordan-huitema/SDV503-Week-6.git

--Journal Week 6--

This week we focused on functions, paramaters, arguments and more

-----What is a function?
A function is a container that is only run when it is called. This is useful if you want to run the same code at multiple parts of a program, instead of writing the same code in multiple places you can make a function and just call the function to run the desired code.

-----How do you write a function?

function <function-name>() { <code> }
e.g. 
function example() { console.log("example function run") }

-----What is a parameter?

A parameter is a slot inside an a condition
e.g.
function <function-name>( <parameter> , <parameter> ) {}

-----What is a argument?

An argument is the value of a parameter (its whats inside a parameter)
e.g. 
function <function-name>( x , y = 1 ) {}
                           ^ These two parameters contain arguments

-----.length property

.length allows you to see how many values an array has or how many parameters are returned by a function

e.g.
arr = [1,2,3,4,5]
console.log(arr.length)  
Output = 5

function <function-name>( <parameter1> , <parameter2> ) { return <parameter1>, <parameter2>;}
console.log(<function-name>.length)
output 2

function <function-name>( <parameter1> , <parameter2> ) { return <parameter1>;}
console.log(<function-name>.length)
output 1

-----...Input

js allows you to set a parameter as an array by using "..." infront of the argument

e.g.

function example(...arr) {
    console.log(arr[2]);            Output 55
}
example(1,42,55,33);

let arr1 = [1,2];
let arr2 = [...arr1,3,4];
console.log(arr1);                  output 1, 2
console.log(arr2);                  Output 1, 2, 3, 4

Challenges

>This week the main challenge is remembering things, sitting in the same spot doing many diffrent classes through the same program with the same people is making it difficult to recall what i have done, when i did it, and who i did it with
when we are in class in person it is easier to recall what happend in that lesson because it is happening at a diffrent time in a diffrent place with diffrent people in diffrent spots. At home the only thing that changes is the webpage or document i have open.

>I struggled at first with the Lab-4 not due to the coding being difficult but because i didnt know how to convert a number to binary with maths so i couldnt translate it to code because i didnt know how to do it without code
after awhile of trolling through sites that wernt very helpful i realized toString() had 3 diffrent methods, mode or bases (not sure of the propper name) and i just used that to complete the the Lab.