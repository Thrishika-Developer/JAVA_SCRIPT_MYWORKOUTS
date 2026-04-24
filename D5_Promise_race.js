//Promise.race() - first finished wins

// function one(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Fast")
//         },3000);
//     })
// }
// function two(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Faster")
//         }, 2000);
//     })
// }
// function three(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Fastest")
//         },500);
//     })
// }

// Promise.race([
//     one(),two(),three(

//     )])
// .then(res => console.log(res));             //Fastest

//-----------------------------------------------------------------------------------------

//Example 2
function one(){
    return new Promise(res => setTimeout(() => {
        res("1st")
    },3000))
}
function two(){
    return new Promise(res => setTimeout(() => {
        res("2nd")
    },2000))
}
function three(){
    return new Promise(res => setTimeout(() => {
        res("3rd")
    },500))
}
Promise.race([one(),two(),three()])
.then(res=>console.log(res))  //3rd