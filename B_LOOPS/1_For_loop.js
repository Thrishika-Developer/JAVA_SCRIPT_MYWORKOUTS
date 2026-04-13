// Example  1
for( let i=0;i<11;i++)
    console.log(i)

// Example 2
// key value-default
let fruits = ["apple","banana","graphs","pineapple"]
for (let i=0; i<fruits.length;i++){
    console.log(i)
}

// values
let fruit = ["apple","banana","graphs","pineapple"]
for (let i=0; i<fruit.length;i++){
    console.log(fruit[i])
}

// var use
for(var i=1;i<5;i++){
    setTimeout(()=>{
    console.log(i)
})
}
