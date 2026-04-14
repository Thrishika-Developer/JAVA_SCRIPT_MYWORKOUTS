// Arrow function 
const additions = (firstNumber,secondNumber)=> firstNumber + secondNumber;
let sum = additions(10,20)
// console.log(sum) //30


const loanEmi = (principle,interest)=> principle+(principle*interest/100)
let loan = loanEmi(10000,10)
// console.log(loan) //11000



const  add = (a,b) => a + b
let results = add(5,4)
// console.log(results) //9


const message = () => "Hello world";
let result = message()
// console.log(result) //Hello world

const findCircleArea = (radius) => radius * radius * 22/7;
let circleArea = findCircleArea(10)
// console.log(circleArea) //314.2


// single parameter(no parentheses needed)
const square = x => x * x ;
let squareArea = square(10)
// console.log(squareArea)  //100



// Multiple lines(use {} and retun)
const promovalidate = (price,promocode) => {
    if(promocode == "sara"){
        return price -price * 20 / 100;
    }
    else {
        return price
    }
};
let discountprice = promovalidate(1000,"niv")
// console.log(discountprice)   // 1000