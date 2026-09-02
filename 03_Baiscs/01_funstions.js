function sayMyName (){
    console.log("Udit")
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(3, 4)
// console.log("Result:", result);
// Here the console result will not print the answer in result variable cause the function is not returning the value it is directly printing inside the funciton block


// Now we will make another code blcok in which it will return the value

function addTwoNumbers(num1, num2){

    // let result = num1 + num2 
    // return result

    // THERE IS ALSO ANOTHER METHOD 

    return num1 + num2

}
const result = addTwoNumbers(3, 4)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("UDITANSHU"))

function calculateCartPrice(...num1){
    return num1
}
// c onsole.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Udit",
    price: 189
}

function HandleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// HandleObject(user)

// HandleObject(
//     {
//         username: "sam",
//         price: 4788
// })

const myNewArray = [200, 345, 654, 765]

function returnSecvalue(getArray){
    return getArray[1]
}
console.log(returnSecvalue(myNewArray)) 