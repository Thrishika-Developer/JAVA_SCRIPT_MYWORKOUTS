// offer program

// let productPrice = 500;
// let currentDate = new Date().getDate()
// let offerDate  = currentDate + 2

// if(currentDate != offerDate){
//     productPrice-=100
// }
// console.log("product price===>",productPrice)  //product price===> 400

// date getterfunction
 
let timeStap = new Date();

let year  = timeStap.getFullYear()
let month = timeStap.getMonth()+1
let currentDate = timeStap.getDate()
let day = timeStap.getDay()

switch(day){
    case 0:
        day = "sunday"
        break
    case 1:
        day = "monday"
        break

    case 2:
        day = "tuesday"
        break
    case 3:
        day = "wednesday"
        break
    case 4:
        day = "thursday"
        break
    case 5:
        day = "friday"
        break
    case 6:
        day = "saturday"
        break

}
let offerDate = currentDate + 10
console.log("day-",day)                         //day- friday
console.log(`${currentDate}-${month}-${year}`)  //17-4-2026