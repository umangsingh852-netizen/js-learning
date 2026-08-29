// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)

const bigNumber = 123456543234554n


// Reference (Non Primitive)

// Arrays, Object, Functions

//Arrays example 

const language = ["python", "java", "sql"]
let myObj = {
    name: "Udit",
    age: 21
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof anotherId);

//*******************Memory***************************

// Stack (Primitive), Heap (Non-Primitive)

//Stack
let myYoutubename = "uditdotcom"
let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "udit@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "uditkumar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

