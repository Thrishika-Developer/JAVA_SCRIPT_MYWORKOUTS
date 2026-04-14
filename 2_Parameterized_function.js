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





