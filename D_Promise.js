//promise - cleaner way to handle asynchronous operations
let number =  new Promise((resolve,reject) =>
    resolve(100))

console.log(number) //Promise { 100 }