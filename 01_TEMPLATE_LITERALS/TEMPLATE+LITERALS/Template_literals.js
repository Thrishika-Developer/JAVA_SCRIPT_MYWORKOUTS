// //Multiple variable
// const firstName ="thrishika"
// const lastName = "N S"
// // console.log(`my name is ${firstName} ${lastName}`) //my name is thrishika N S

// //----------------------------------------------------------------------------------------------
// //Dynamic sentence
// const product ="laptop"
// const price = 50000
// // console.log(`The price of ${product} ${price}`)  //The price of laptop 50000

// //----------------------------------------------------------------------------------------------
// //Using loops
// const items = ["pen","book","bag"]
// items.forEach(item=>{
//     // console.log(`item:${item}`)   //item:pen item:book item:bag
// })

// //------------------------------------------------------------------------------------------------
// //Object Data
// const user= {
//     name : "thrishika",
//     age : 21
// }
// // console.log(`name: ${user.name} , Age: ${user.age}`) //name: thrishika , Age: 21
// //-------------------------------------------------------------------------------------------------

// //function + calculation

// function discount(price){
//     return price * 0.9
// }
// // console.log(`Discounted price is Rs ${discount(1000)}`) //Discounted price is Rs 900

// //-------------------------------------------------------------------------------------------------
// //condition ui message

// const marks =75;
// // console.log(`result: ${marks>50 ? "pass":"fail"}`) //result: pass

// //-----------------------------------------------------------------------------------------------------
// //Debugging 

// const a =10;
// const b =20;
// // console.log(`a= ${a},b= ${b},sum= ${a + b}`) //a= 10,b= 20,sum= 30
// //---------------------------------------------------------------------------------
// //Nested Template literals

// const name ="thrishika"
// // console.log(`hello ${`Mr. ${name}`}`)   //hello Mr. thrishika

// //-----------------------------------------------------------------------------

// //Default values
// const username = null;
// // console.log(`user : ${username || "guest"}`) //user : guest
// //--------------------------------------------------------------------------------------------


//basic syntax

// const name = "thrishika"
// console.log(`hello ${name}`)  //hello thrishika

// //---------------------------------------------------------------
// //string Interpolation
// const msg = "hello " + name + "!"

// // instead of use

// const msg = `hello ${name}!`

//--------------------------------------------------------------------
//multi line string

// const text = `this is line 1 
// this is line 2 
// this is line3`
// // console.log(text) - no need for \n
// //this is line 1 
// // this is line 2 
// // this is line3
// //----------------------------------------------------------------------------------------
// //Expression inside ${}

// const a = 5
// const b = 10
// console.log(`sum is ${a+b}`) //sum is 15

// //---------------------------------------------------------------------------------------
// //Function calls

// function greet(name){
//     return `Hi ${name}`
// }
// console.log(`${greet("thrishika")}`)  //Hi thrishika

// //-----------------------------------------------------------------------------

// //HTML Templates

// const name = "thrishika"
// const html =`
//  <div>
//     <h1>${name}</h1>
//     <P>welcome!</P>
//  </div>`;
//  document.body.innerHTML =html;  //thrishika welcome

 //conditional logic
 const islogIn = true;
 const msg = `user is ${islogIn ? "online": "offline"}`;
 console.log(msg)   //user is online

 //Tagged Templates

 function highlight(strings,value){
    return `${strings[0]}**${value}**${strings[1]}`;
 }
 console.log(highlight`hello ${"thrishika"} wow`) //hello **thrishika** wow
