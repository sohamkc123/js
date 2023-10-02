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

// stack and heap memory system example
let apple="hero"
let banana = apple
banana="tero bau"
console.log(banana)
console.log(apple);
// **************************************************
let user_1={
    email:"soham@gmail.com",
    password:"khoi birsey"
}
let user_2 = user_1
 user_2.password="yee yad aayo"
 /*mathi ko apple bana stack mrmory ko example ho jasma value change vai raxa yo xai
  heap memory ko kura ho aani value change hunna*/
console.log(user_1.password);
console.log(user_2.password);