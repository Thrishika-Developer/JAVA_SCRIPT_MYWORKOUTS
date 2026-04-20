// //Basic Examples
// const user = {
//     name  : "thrishika",
//     age   : 21,
//     isLoggedIN : true
// };
// //add property
// user.city = "nagercoil"
// //update property
// user.age = 20;
// //delete property
// delete user.isLoggedIN
// console.log(user.name)  //thrishika
// console.log(user["age"])//20
// console.log(user.city)  //nagercoil
// console.log(user.isLoggedIN) //undefined

// -------------> object with methods
// const user = {
//     name: "thrishika",
//     greet() {
//         console.log("hello" + this.name)
//     }
// }
// user.greet(); //hellothrishika

// ----------------> Nested object
// const user =  {
//     name : "thrishika",
//     address : {
//         city : "nagercoil",
//         pincode : 629804,
//     }
// };
// console.log(user.address.pincode) //629804


// build-in methods

const user = {
    name : "thrishika",
    age   : 21,
    isLoggedIn : true 
};

let key = Object.keys(user)
console.log(key) //[ 'name', 'age', 'isLoggedIn' ]
let value = Object.values(user);
console.log(value) //[ 'thrishika', 21, true ]
let entries = Object.entries(user);
console.log(entries)//[ [ 'name', 'thrishika' ], [ 'age', 21 ], [ 'isLoggedIn', true ] ]
