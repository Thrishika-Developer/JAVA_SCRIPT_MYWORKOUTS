//map() - transforms every element and returns a new array
let num = [1,2,3,4,5]
let multiplyfive = num.map((value,index,arr)=>{
    return value * 5
});
console.log(multiplyfive)  //[ 5, 10, 15, 20, 25 ]

let multiply2 = num.map(val => val * 2)
console.log(multiply2)   //[ 2, 4, 6, 8, 10 ]
