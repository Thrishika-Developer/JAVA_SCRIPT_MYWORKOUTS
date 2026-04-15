// ----> This keyword

// const employee ={
//     emId : 121,
//     employee_firstName : "thrishika",
//     employee_lastName : "N S",

//     employee_fullName : function(){
//         return this.employee_firstName + "" + this.employee_lastName;
        
//     }
    
// }
// let employeeFullName = employee.employee_fullName()   
// console.log(employeeFullName)   //thrishikaN S

// this keyword using arrow function
//       ---> arrow function is focused on outer function
//       ---> arrow function not used object


// console.log(employeesFullName) //thrishan s



// ----->call()
// const employe= {
//     name : "thrishika",
//     age  : 27
// }
// function EmployeeDetails(){
//     console.log("Hello my name : ",this.name,"age :",this.age)
// }
// EmployeeDetails.call(employe)  //Hello my name :  thrishika age : 27

// call() 
// const employe= {
//     name : "thrishika",
//     age  : 27,
// }
// function EmployeeDetails(location){
//     console.log("Hello my name : ",this.name,"age :",this.age,"location :",location)
// }
// EmployeeDetails.call(employe,"kanniyakumari")  //Hello my name :  thrishika age : 27 location : kanniyakumari

// call() with two objects
// const employe= {
//     name : "thrishika",
//     age  : 27,
// }
//    const student ={
//     name : "aslin",
//     age  : 21
//    }
// function EmployeeDetails(student,location){
//     console.log("Hello my name : ",this.name,"age :",this.age,"location :",location)
//     console.log("student age",student.age)
// }
// EmployeeDetails.call(employe,student,"kanniyakumari")  //Hello my name :  thrishika age : 27 location : kanniyakumari student age 21

// ------> apply method
// const employe= {
//     name : "thrishika",
//     age  : 27,
// }
// function EmployeeDetails(location){
//     console.log("Hello my name : ",this.name,"age :",this.age,"location :",location)
// } 
// EmployeeDetails.apply(employe,["kanniyakumari"])     //Hello my name :  thrishika age : 27 location : kanniyakumari

// -------> bind method
// const employe= {
//     name : "thrishika",
//     age  : 27,
// }
// function employeeDetails(location){
//     console.log("Hello my name : ",this.name,"age :",this.age,"location :",location)
// } 
// let fn = employeeDetails.bind(employe,"kanniyakumari")
// fn()   //Hello my name :  thrishika age : 27 location : kanniyakumari







