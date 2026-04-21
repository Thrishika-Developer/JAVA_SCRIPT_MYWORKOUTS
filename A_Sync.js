//Synchronous-blocking
//---> codes runs line by line,one after another

//Example 1
// console.log("start")
// console.log("stop")
// console.log("end")    //start stop end

//Example 2 
console.log("first")
console.log("second")
for(let i =0;i< 10000000000;i++){
}
console.log("third")          //first second (some delay) third

//so using asynchronous 