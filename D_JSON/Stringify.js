//Object to json
const user  = {
    name : "thrishika",
    age  : 21
}
//Object - JSON
const json = JSON.stringify(user)
console.log(json)   //{"name":"thrishika","age":21}

//JSON - Object
const obj = JSON.parse(json)
console.log(obj)      //{ name: 'thrishika', age: 21 }
