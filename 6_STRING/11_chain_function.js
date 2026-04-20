//chain function - function call in one near another
let string = "thrishika N S is a software engineer"
let newStr =  string.charAt(10).toUpperCase() + "" + string.slice(0,9)
// console.log(newStr)

let reverseString  = newStr.split("").reverse().join("")
console.log(reverseString)