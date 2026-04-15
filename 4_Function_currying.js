// Not a currying method - Example 1
function student(mark){
    function gradeCalc(){
        return mark >=90 ? "first clss" : "second class"
    }
    return gradeCalc
}
let studentGrade = student(75)
// console.log(studentGrade)  //[function : gradeCalc]
// console.log(studentGrade()) //second class
let grade = studentGrade()
// console.log(grade)    //second class



// In currying method  -  Example 2
function student(marks){
    function gradeCalc(){
        return marks >=90 ? "first clss" : "second class"
    }
    return gradeCalc
}
let grades = student(75)()
// console.log(grades)  //second class

// Example - 3
function employee(basicSalary){
    function grossSalary(){
        let hra = 2500
        let da = 1000
        let bonus = 6000
        let gross = basicSalary + hra + da + bonus;

        function netSalary(){
            let pf = 3600
            let pt = 1200
            let netSal = basicSalary - (pf + pt)
            return netSal
        }
        return netSalary
        }
    return grossSalary
}
let Salary = employee(50000)()()
// console.log("Salary===>",Salary)  //45200


// anonymous function -Example 4
function student(marks){
    return function(){
        return marks >=90 ? "first clss" : "second class"
    }
   
}
let graded = student(75)()
// console.log(grades)  //second class

function employee(basicSalary){
    return function(){
        let hra = 2500
        let da = 1000
        let bonus = 6000
        let gross = basicSalary + hra + da + bonus;

            return function(){
                let pf = 3600
                let pt = 1200
                let netSal = basicSalary - (pf + pt)
                return netSal
            }
        }
}
let Salarys = employee(50000)()()
// console.log("Salary===>",Salary) //45200


// Example 5
function add(a){
    return function(b){
        return a+b;
    }
}
let result = add(2)(3)
// console.log(result)

// EXample 6
function greet(name){
    return function(message){
        console.log(name + ":" + message);
    }
}
let messages = greet("thrishika")("singer")


