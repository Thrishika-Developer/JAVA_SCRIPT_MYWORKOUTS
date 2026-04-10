//shallow copy vs deep copy
//spread operator ===> when you change new array it will not affect old array


// Example 1  - shallo copy

var fruits = ["apple","orange","grapes"]
var newFruits = fruits //shallow copy
newFruits.push("gova")
newFruits.push("banana")
// console.log("fruits==>",fruits)
// console.log("fruits==>",newFruits)

// EXample 2 - deep copy   spread operator[...objectname]

var fruits = ["apple","orange","grapes"]
var newFruits = [...fruits] //deep copy
newFruits.push("gova")
newFruits.push("banana")
console.log("fruits==>",fruits)
console.log("fruits==>",newFruits)

