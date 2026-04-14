// =========> Example 1

function add(a,b){
    return a+b;
}
let additionResult = add(4,5);
// console.log("result===>",additionResult)//9




// ==========>Default value
function subtraction(a=1,b=3){
    return a + b;
}
let subtractionResult1 = subtraction(5,4);
let subtractionResult2 = subtraction()

// console.log(subtractionResult1) //9
// console.log(subtractionResult2) //4



// ============>Rest parameter

function sumofCalc(...numbers){
    let result =0;

    for (let item of numbers){
        result += item
    }
    return result
    
}
let sumofcalcResult = sumofCalc(1,2,3,4,5)
// console.log(sumofcalcResult) //15




function sumofcalculation(type,...numbers){
    let result = 0;

    if(type=="sum"){
        for (let item of numbers){
            result += item;
        }

    }
    return result

}

let Result = sumofcalculation("sum",1,2,3,4,5)
// console.log(Result) // 15



// simple program
function sumofCalculation(firstNumber,SecondNumber){
    return firstNumber + SecondNumber;
}
let value = sumofCalculation(10,20)
// console.log(value) //30




//Interest Calculation
function InterestCalc(principleAmount,interstRate=8,loanType="home-loan"){
    let accurateInterestAmount = principleAmount * interstRate / 100;
    let emiAmount = principleAmount + accurateInterestAmount;
    return emiAmount;
}
let interest = InterestCalc(10000,10)

// console.log(interest)  //11000


//Function rest parameter
function homeLoanInterest(...arg){
    let principleAmount = arg[0];
    let interstRate = arg[1];
     
    return principleAmount + (principleAmount * interstRate/100);
}
let emiAmount = homeLoanInterest(50000,8);
// console.log("emi amount ===>",emiAmount) //54000