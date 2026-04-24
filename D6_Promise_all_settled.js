//Promise.allSettled() - wait for all success and failure

//Example 1
let number1 = Promise.resolve(1);
let number2 = Promise.resolve(2);
let number3 = Promise.reject("Error")

Promise.allSettled([number1,number2,number3])
.then(res => console.log(res))
.catch(error=> console.log(error))  //[{ status: 'fulfilled', value: 1 },{ status: 'fulfilled', value: 2 },{ status: 'rejected', reason: 'Error' }]

//----------------------------------------------------------------------------------

//Example 2

let p1 = Promise.resolve("ok")
let p2 = Promise.reject("Fail")

Promise.allSettled([p1,p2])
.then(res=>console.log(res))
.catch(error=> console.log(error))   //[{ status: 'fulfilled', value: 'ok' },{ status: 'rejected', reason: 'Fail' }]
