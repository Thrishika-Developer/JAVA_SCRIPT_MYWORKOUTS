//Array Destructuring

// const arr = [10,20,30]
// // const [a,b,c]= arr
// // console.log(a,b,c)//10 20 30
// const a = arr[0]
// const b = arr[1]
// console.log(a,b)  //10 20

//Skip values

// const [a,  ,c]= [10,20,30]
// console.log(a,c)  //10 30

//Default values

// const [a =5,b=10]=[1]
// console.log(a,b)  //1,10

//swap variables

// let x =1;
// let y =2;

// [x, y]=[y, x];
// console.log(x,y)  //2 1
//------------------------------------------------------------------------------------------

// Object Destructuring

// const user = {
//     name : "thrishika",
//     age : 21
// }
// const {name,age}=user;
// console.log(name,age) //thrishika 21

//Rename variables
// const  user ={
//     name : "thrisha",
// }
// const {name: username} = user;
// console.log(username)  //thrisha

//--------------------------------------------------------------------------------
//Default values
// const user ={
//     name : "thrishika"
// }
// const {city = "chennai"} =user
// console.log(city)  //chennai
//--------------------------------------------------------------------------------

//Nested destructuring
// const user ={
//     profile:{
//         name : "thrishika"
//     }
// }
// const{profile:{name}}=user
// console.log(name)  //thrishika

//--------------------------------------------------------------------------------------------
//Function parameters

// function greet({name,age}){
//     console.log(`Hello ${name},age ${age}`)
// }
// greet({name : "thrishika",age : 21})  //Hello thrishika,age 21

//------------------------------------------------------------------------------
//real user case

// const user = {
//     name : "thrishika",
//     skills : ["HTML","CSS","BOOTSTRP","JS"]
// }
// const {name,skills :[firstSkill,secondSkill]}=user  //a , b, ...a.
// console.log(firstSkill,secondSkill) //HTML CSS

//-------------------------------------------------------------------------------
//rest operator

const [a,...rest]=[1,2,3,4,5]
console.log(rest)  //[ 2, 3, 4, 5 ]

