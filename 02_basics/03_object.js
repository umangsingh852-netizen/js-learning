// singleton
// object.create

// object literals
const mysym = Symbol("Key1")
const JsUser = {
    name: "Udit",
    "full name": "Uditanshu Singh",
    age: 18,
    [mysym]: "myKey1",
    location: "Jaipur",
    email: "udit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satruday"]
}

// console.log(JsUser["full name"]);
// console.log(JsUser.email)
// console.log(JsUser[mysym]);


JsUser.email = "Udit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "udit@microsoft.com"

// console.log(JsUser);


JsUser.greetings = function(){
    console.log("Hello Js User")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());