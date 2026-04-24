//Promise.reject()- already failed promise

//Example 1
// let greetings = Promise.reject("error")
// greetings.catch((error=>console.log(error))) //error

//---------------------------------------------------------------------------------
//Example 2
// function checkLogin(isLoggedIn){
//     if(!isLoggedIn){
//         return Promise.reject("please login first")
//     }
//     return Promise.resolve("Welcome")
// }
// checkLogin(false)
// .catch(error=>{
//     console.log(error)
//     return "handled error"})
// .then(message=>console.log(message))              //please login first ,handled error

