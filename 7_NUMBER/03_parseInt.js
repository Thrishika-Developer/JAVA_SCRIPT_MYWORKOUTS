//parseInt - conver string into an integer
//string to integer

// let str = "100";
// let strg = parseInt(str)
// console.log(strg)         //100
// console.log(typeof(str))  //string
// console.log(typeof(strg))  //number

// string with text
// let str = "100px";
// let strg = parseInt(str)
// console.log(strg)         //100
// console.log(typeof(str))  //string
// console.log(typeof(strg)) //number


// decimal number
// let str = "10.028";
// let strg = parseInt(str)
// console.log(strg)         //10
// console.log(typeof(str))  //string
// console.log(typeof(strg)) //number

// invalid start
// let str = "abc345";
// let strg = parseInt(str)
// console.log(strg)         //NaN
// console.log(typeof(str))  //string
// console.log(typeof(strg)) //number



//boolean
// let str = true;
// let strg = parseInt(str)
// console.log(strg)         //NaN
// console.log(typeof(str))  //boolean
// console.log(typeof(strg)) //number


//radix
// let val =parseInt("100",2)
// console.log(val)  //4
//1    0    0
//2²   2¹   2⁰ 
//= (1×2²) + (0×2¹) + (0×2⁰)= (1×4)  + (0×2)  + (0×1)= 4 + 0 + 0= 4

// let val =parseInt("A", 16)
// console.log(val) //10
//0–9 → same A = 10 B = 11 C = 12 D = 13 E = 14 F = 15
