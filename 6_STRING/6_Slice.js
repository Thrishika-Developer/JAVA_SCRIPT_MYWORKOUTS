//slice(),substring() - cut string
//      -----> it start with correct index value
//      -----> but end with length of the string value

// Using slice()

let string ="thrishika is a girl"
let result = string.slice(0,9)
// console.log(result)  //thrishika

// using substring()
let strings ="thrishika is a girl"
let results = strings.slice(0,9)
// console.log(results) //thrishika

// using one value it will get that value to full string
let str ="thrishika is a girl"
let res = strings.slice(5)
// console.log(res)  //hika is a girl

// Using negative index - it allow reverse to all value but start -1
let s ="thrishika is a girl"
let r = strings.slice(-10,-1)  //end , start
console.log(r)                    //t h r i s h i k a        i s     a       g i r l 
                                    //                  -10      -7    -5          -1
  


