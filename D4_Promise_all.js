//Promise.all() - all must succeed,if one fails everything fails

//Example 1
// let number1 = Promise.resolve(1)
// let number2 = Promise.resolve(2)
// let number3 = Promise.resolve(3)

// Promise.all(
//     [number1,number2,number3]
// )

// .then(res =>console.log(res)) //[ 1, 2, 3 ]
// .catch(error=>console.log(error))

//-----------------------------------------------------
//Example 2
// let number1 = Promise.resolve(1)
// let number2 = Promise.reject("error")
// let number3 = Promise.resolve(3)

// Promise.all(
//     [number1,number2,number3]
// )

// .then(res =>console.log(res))
// .catch(error=>console.log(error)) //error

//-------------------------------------------------------------




