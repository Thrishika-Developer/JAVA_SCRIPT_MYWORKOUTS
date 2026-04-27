// //Example 1
// const name =  null;
// console.log(name ?? "Guest");  //Guest

// //why not use
// const count = 0;
// console.log(count || 10);  //10 (wrong for this case)
// console.log(count ?? 10); //0

// //more example
// console.log(undefined??"Default");  //Default
// console.log(null ?? "default");  //default
// console.log(false ?? "Default");//false
// console.log(""?? "Default") //""

// // Real use case
// function greet(name){
//     const finalName = name ?? "Guest";
//     console.log(`Hello ${finalName}`)
// }
// greet()              //Hello Guest
// greet("thrish")     //Hello thrish
//--------------------------------------------------------------------

// const a = null;
// const b = "Hello";
// const c = "World";

// const result = (a ?? b) || c;
// console.log(result);   //Hello
// //----------------------------------------------------------------
// const a = undefined;
// const b = "";
// const c = "Fallback";

// const result = (a ?? b) || c;
// console.log(result);   //Fallback
// //-------------------------------------------------------
// const a = null;
// const b = "";
// const c = "Default";

// const result = a ?? (b || c);
// console.log(result);  //Default
//-----------------------------------------------------------
let str = null ?? "default";

console.log("str length====>",str.length)  //str length====> 7
console.log("str length====>",str.toUpperCase())    //str length====> DEFAULT

//----------------------------------------------------------------------------------------------------------------------