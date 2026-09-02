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

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"udit1@Mail.com"
    },
    {
        id: 2,
        email:"udit2@Mail.com"
    },
    {
        id: 3,
        email:"udit3@Mail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));


const course = {
    coursename: "js-english",
    price: "999",
    courseInstructor: "Hithuman"
}

// cpurse instructor is too long so we will make antoehr variable and put the value ot course instructor inside that variable

const {courseInstructor: Instructor} = course

console.log(Instructor)


// {
//     "name": "Hithuman",
//     "ocursename": "js in DHh",
//     "price": "free"
// }

[
    {},
    {},
    {}
]   