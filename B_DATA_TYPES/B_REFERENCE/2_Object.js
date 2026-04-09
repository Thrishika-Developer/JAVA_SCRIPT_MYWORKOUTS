let person = { Name : "thrishika",age : 21,year : 2005,havesiblings : true}
console.log("details-havesiblings",person.havesiblings)


let employee = {
    name : "thrishika",
    age : "20",
    location : "Thenkankuzhi",
    isworking : false,
    salary : null,
    skillset : ["python","java","html","css"],
    yearofexp : {
        "2022-2023" : "ghss",
        "2024-2026" : "amrita"

    }
}
console.log("employee name :",employee.name)
console.log("employee skillset : ",employee.skillset)
console.log("employee skillset : ",employee.skillset[2])
console.log("employee : ",employee.yearofexp["2022-2023"])