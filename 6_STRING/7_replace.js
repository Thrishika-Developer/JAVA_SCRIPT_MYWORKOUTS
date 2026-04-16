// replace() - change text
let store = "hello my world"
let newstore = store.replace("my","this")
// console.log(newstore)   //hello this world



// replace only first occurance

let stores = "these these these"
let newstores = stores.replace("these","this")
// console.log(newstores)             //this these these



// to replace with not a string value-same string return
let str = "hello my world"
let newstr = str.replace("was","this")
// console.log(newstr)  //hello my world



// replace all-replaceAll()
let string = "these these these"
let newstring= string.replaceAll("these","this")
// console.log(newstring)  //this this this



//case - insensitive replace 
// ---> change string any case will accepted

let text = "Hello WORLD";
let result = text.replace(/world/i, "JavaScript");

// console.log(result);   // Hello JavaScript



//one string replace
let values = "hello my world"
let value = values.replace("ld","k")
// console.log(value) //hello my work



//2 string replace
let val = "hello my world"
let valuess= val.replace("l","k")
// console.log(valuess)   //heklo my world



