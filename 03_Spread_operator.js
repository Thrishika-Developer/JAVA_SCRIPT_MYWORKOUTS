//with array

const arr1 = [1,2];
const arr2 = [3,4];
const result = [...arr1, ...arr2]
// console.log(result)  [ 1, 2, 3, 4 ]

//copy array

const arr = [1,2,3]
const copy = [...arr]
// console.log(arr)  [1,2,3]

//with objects
const user = {name : "thrishika"}
const updated = {...user,age : 25}
// console.log(updated)  { name: 'thrishika', age: 25 }

//Override values

const obj = {a: 1 , b: 2};
const newobj = {...obj , b: 3}
// console.log(newobj)  { a: 1, b: 3 }

//Function arguments

const nums = [1,3,4]
// console.log(Math.max(...nums))  4

//-----------------------------------------------------------------------------------------------------------------
// Rest Operator

//In arrays

const [a,b,...rest] = [1,2,3,4]
// console.log(rest)    //[ 3, 4 ]

//In objects

const users = {name : "thrishika",age : 21,city : "kanniyakumari"}
const {name,...others} = users
// console.log(others) //{ age: 21, city: 'kanniyakumari' }

//In function

function sum(...numbers){
    return numbers.reduce((a,b)=> a + b ,0)
}
console.log(sum(1,2,3,4,5))  //15
