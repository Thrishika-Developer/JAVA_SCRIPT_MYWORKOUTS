let numbers = [10,20,30];
//key
for(let item in numbers){
    console.log("key====>",item)
}

// values//INK-in key
for (let item of numbers){ 
    console.log("Values===>",item)
}

// values
for (let item in numbers){
    console.log("Values===>",numbers[item])
}