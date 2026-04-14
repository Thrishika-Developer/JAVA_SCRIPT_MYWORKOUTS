// Arrow function 
const  add = (a,b) => a + b
let results = add(5,4)
// console.log(results)


const message = () => "Hello world";
let result = message()
// console.log(result)

const findCircleArea = (radius) => radius * radius * 22/7;
let circleArea = findCircleArea(10)

// console.log(circleArea)

// single parameter(no parentheses needed)
const square = x => x * x ;
let squareArea = square(10)
// console.log(squareArea)

const addition = (a,b) => a + b;
let final = addition(5,5)
// console.log(final)

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
console.log(discountprice)