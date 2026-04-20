//------------>splice() - add/remove
//Remove → splice(index, count)
//Add → splice(index, 0, items)
//Replace → splice(index, 1, newValue)


//returns
// let arr = [1,2,3,4,5,6] // 0 1,1,2
// let array = arr.splice(1,2);
// console.log(array)  //[ 2, 3 ]

//remove elements
// let arr = [1,2,3,4,5]
// arr.splice(1,2)
// console.log(arr) //[1,4,5]

//add elements
// let arr = [1,4,5,6,7] //output contain this memory space
// arr.splice(1,0,2,3)
// console.log(arr) //[ 1, 2, 3, 4, 5, 6, 7 ]


// Replace
// let arr = [1,2,3,4,5]
// arr.splice(1,4,99)
// console.log(arr)  //[ 1, 99 ]

//------------------>slice()-cut portion
// let arr = [10,20,30,40,50]
// let result = arr.slice(1,4)
// console.log(result)  //[ 20, 30, 40 ]

//using negative value
// let arr = [10,20,30,40,50]
// let result = arr.slice(-4)
// console.log(result) //[ 20, 30, 40, 50 ]