const user = {
    username: "Udit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomeMessage()
user.username = "Sam"
// user.welcomeMessage()

// function chai(){
//     let username = "Udit"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "Udit"
    console.log(this);

}
chai()

const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4))

 