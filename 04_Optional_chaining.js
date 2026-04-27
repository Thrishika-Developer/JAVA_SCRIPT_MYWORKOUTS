//error reduced

// const user = {};
// console.log(user.profile.firstName)  //Error through
//------------------------------------------------------------------------
//using optional chaining
// const user = {};
// console.log(user ?.profile ?.name) //undefined  //object?.property,If object exists → continue,If null/undefined → return undefined
//-----------------------------------------------------------------------------------------
//Nested Example
// const user = {
//     profile : {
//         name : "thrishika",
//         age : 21
//     }
// } 
// console.log(user?.profile?.name) //thrishika
// console.log(user?.address?.city) //undefined
//--------------------------------------------------------------------------------------------------
//with arrays
// const users = [];
// console.log(users[0]?.name) //undefined
//------------------------------------------------------------------------------------------------------------
//with functions

// const user = {
//     sayHello(){
//         console.log("Hello!")
//     }
// }
// user.sayHello?.();  //Hello!

//-----------------------------------------------------------------------------------------------------------------------
//Combine with ??(default value)

// const name = user.profile?.name??"Guest"
// console.log(name)   //Guest

//------------------------------------------------------------------------------------
//real example (API)

// const data ={
//     user : {
//         details : null
//     }
// }
// console.log(data.user?.details?.email) //undefined

//---------------------------------------------------------------------------------
//correct 
// user?.profile?.name

// //wrong
// user?.profile.name

//---------------------------------------------------------------------------------------------






