// string value
const message = function(name){
    return "Hello" + name
}

console.log(message("Thrishika")); //HelloThrishika

// addition operator 

const sum = function(a,b){
    return a + b;
}
console.log(sum(10,20))  //30

// Addition 

const addition = function(){
    let a = 5;
    let b = 6;
    return a + b;
}
console.log(addition()) //11


// Interest 
const loanEmiAmount = function(...arg){
    let principleAmount = arg[0];
    let interestRate = arg[1];

    return principleAmount + (principleAmount*interestRate/100)
}
let homeLoan = loanEmiAmount(50000,10)
console.log(homeLoan)   //55000