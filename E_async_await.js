//async and await -code is similar look likes synchronous code,instead of .then() and .catch no need to write

//Example 1
// function product(){
//     let products =[
//         {   productName : "apple",
//             productPrice : 200
//         },

//         {
//             productName : "orange",
//             productPrice : 400
        
//         },
//     ]
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(products)  //reject - error
//         },2000);
//     })
// }

//    async function offer() {
//     try{
//          let productList = await product();          // no await promise pending
//         // console.log("offer execute",productList) //offer execute [{ productName: 'apple', productPrice: 200 },{ productName: 'orange', productPrice: 400 }]
//         let  offerProductList = productList.map(
//             value => {
//                 value.offer =value.productPrice*3/100
//                 value.createdBy = "thrishika"
//                 value.date = new Date().toLocaleDateString()
//                 value.finalPrice = value.productPrice-value.offer
//                 return value
//             }
//         )
//         console.log("offerproduct==>",offerProductList)
//     }catch(error){
//         console.log("error")
//     }
//    }
  
// offer()  //offerproduct==> [
//   {
//     productName: 'apple',
//     productPrice: 200,
//     offer: 6,
//     createdBy: 'thrishika',
//     date: '4/24/2026',
//     finalPrice: 194
//   },
//   {
//     productName: 'orange',
//     productPrice: 400,
//     offer: 12,
//     createdBy: 'thrishika',
//     date: '4/24/2026',
//     finalPrice: 388
//   }
// ]

//---------------------------------------------------------------------------------------

//Example 2
//basic example
// function fetchData(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Data received")
//         },1000);
//     })
// }

// async function getData(){
//     const result = await fetchData()
//     console.log(result)
// }
// getData()          //Data received

//---------------------------------------------------------------------------------------------
//getData() - makes a function return

// async function test(){
//     return "hello"
// }
// Promise.resolve("Hello")
// console.log(test())             //Promise { 'hello' }
// console.log(Promise.resolve("Hello")) //Promise { 'Hello' }

//-----------------------------------------------------------------------------------------------------

//Example 3
// async function hello(){
//     return "hi";
// }
// hello().then(res=> console.log(res))  //hi

//--------------------------------------------------------------------------------------------------------------------

//Waiting for a promise
// function wait(){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve("Done")
//         },2000);
//     })
// }
// async function run(){
//     console.log("start")
//     const result = await wait()
//     console.log(result)
//     console.log("End") //start ( 2 sec wait) Done End

// }
// run()

//----------------------------------------------------------------------------------------------------------------------

//without await

// function wait(){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve("Done")
//         },2000);
//     })
// }
// async function run(){
//     const result = wait()
//     console.log(result)
// }
// run()    //Promise { <pending> }

//--------------------------------------------------------------------------------------

//Error Handling 

// function getData(){
//     return new Promise((resolve,reject)=>{
//         reject("something went wrong")
//     })
// }
// async function test(){
//     try{
//         const res = await getData();
//         console.log(res)
//     }
//     catch(error){
//         console.log("error:",error)
//     }
// }
// test()         //error: something went wrong

//---------------------------------------------------------------------------------------------------------------------------------
//Multiple await
// function a(){
//     return new Promise(res=>{
//         setTimeout(() => {
//             res(1)
//         }, 2000);
//     })
// }
// function b(){
//     return new Promise(res=>{
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     })
// }
// async function slow(){
//     const x = await a()
//     const y = await b()
//     console.log(x+y)
// }

// slow()   //3

//--------------------------------------------------------------------------------------------------------------------------------
//Parallel

// function a(){
//     return new Promise(res=>{
//         setTimeout(() => {
//             res(1)
//         }, 2000);
//     })
// }
// function b(){
//     return new Promise(res=>{
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     })
// }
// async function fast(){
//     const[x,y]= await Promise.all([a(),b()])
//     console.log(x+y)
// }
// fast()   //3
//-----------------------------------------------------------------------------------------------------------------------------------------------

// login exmple
// function login(){
//     return new Promise(res=>{
//         setTimeout(() => {
//             res("user logged in")
//         }, 1000);
//     })
// }
// function getProfile(){
//     return new Promise(res=>{
//         setTimeout(() => {
//             res("profile data")
//         }, 1000);
//     })
// }
// async function app(){
//     const user = await login()
//     console.log(user)
//     const profile = await getProfile()
//     console.log(profile)
// }
// app()  //user logged in profile data

//-------------------------------------------------------------------------------------------------------------------------------
//Loop with await

// async function loopExample(){
//     for(let i=1;i<=3;i++){
//         await new Promise(res=>{
//           setTimeout(() => {
//              console.log(i)
//              res()
//           }, 1000);
       
//         })
//     }
// }
// loopExample()   //1 2 3
