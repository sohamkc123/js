console.log("hello world")
// let var and const
let name="soham"//let value can be change in middle of the program
var adress="deepsana"
const pi=3.18
let score=null

// printing multiple things in table
console.table([name , adress])
console.log(name);

// how can we check the datatype
console.log(typeof "soham")
 console.log(typeof null);
console.log(typeof undefined);

// change to other datatype,conversion
let sarthak= Number(adress) 
console.log(typeof sarthak);
let s=69
let d=-s
console.log(d)

// some amazing things in js;check the results
console.log("1"+2+2)
console.log(1+2+"2");