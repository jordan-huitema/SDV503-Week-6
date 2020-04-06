//-----Functions Pt.1-----

//Paramater = Used slots in conditions

//Argument = The value of a paramater

//executing a function
function add(v1,v2) {
    return v1 + v2;
}

console.log(add(1,1))


//hardcoding paramaters
function eg(v1=10) {
    console.log(v1)
}

eg()

//All the paramaters!!

function allOfEm(a,s,d,f,g,h,j,k,l) {
    return ( a + s + d + f + g + h + j + k + l);
}

console.log(allOfEm(1,2,3,4,5,6,7,8,9));

//checking paramater length

console.log("allOfEm is " + allOfEm.length + " parameters long!");

/*
if(allOfEm.length == 9) {
    return allOfEm( 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 )
}
*/

//function legnth trickery 

function eg2(x,y = 10, z) {
    return console.log(x)
}

console.log(eg2.length);                                    //only outputs arguments, unused parameters are not counted

//checking argument length

function eg3(x,y,z) {
    console.log(arguments.length)                           //this counts arguments and not ununsed parameters
    console.log(eg3.length)                                 //this counts all parameters reguardless of if they are used
}

eg3(7,2);                                                   

//passing arrays to functions

function arrayEg(...args) {                                 //... args sets the argument as an array
    console.log(args[3])                                    //outputs the 4th value of an array
}

var arr = [1, 2, 3, 4, 5, 6]

arrayEg(... arr);                                           //calls arrayEg func with the array arr as its arguments

//inputing to an array

function arrayEg2(x,y,z,...args){                           //args is always an array, you cannot use array[] in older versons of js
   console.log(x,y,z,args)                                  
}

arrayEg2(5,2,4,5,2,3,4,45,6,7,34);                          //after asiging x,y,z parameters any additional parameters will be added to an array

//calling arrays nested in functions

arr = [1, 2, 3, 4, 5, 6]

function arrayEg3(...args){                                 
    console.log(args[5])                                    //pring array index 5 to log
 }
arrayEg3(...arr);                                           //index 5 is the 6th value of arr array so print 6

//rest parameter

function rest(...tstArr) {
    console.log(tstArr[5]);
}

rest(1,42,55,6674,234,51,63);

//spread operator 

let arr1 = [1,2,3,4];
let arr2 = [...arr1,5,6,7,8,9];

console.log(arr1);
console.log(arr2);


//lesson example 

function arraysForAll(...args) {
    console.log(args[0] + args[1]);
}

arraysForAll(5,5);      //output 10
