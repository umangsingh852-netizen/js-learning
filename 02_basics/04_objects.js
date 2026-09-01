// const tinderUser =  new Object()
const tinderUser = {}

tinderUser.id = "123abj"
tinderUser.email = "singh@gmail.com"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Uditanshu",
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);