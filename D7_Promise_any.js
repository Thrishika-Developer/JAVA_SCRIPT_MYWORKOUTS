//Promise.any() - first success wins (ignores failures)

let p1 = Promise.reject("Error1")
let p2 = Promise.reject("Error2")
let p3 = Promise.resolve("success")

Promise.any([p1,p2,p3])
.then(res => console.log(res))
.catch(error=>console.log("error"))  //success

//----------------------------------------------------

//Example 2

Promise.any([
    Promise.reject("A"),
    Promise.reject("B")
])
.then(res => console.log(res))
.catch(error=>console.log(error)) //[AggregateError: All promises were rejected] { [errors]: [ 'A', 'B' ] }