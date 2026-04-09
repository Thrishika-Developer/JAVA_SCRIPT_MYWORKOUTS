const school ={
    name : "ghss",
    location : "thuckalay",
    studentCount : 1000,
    currentStatus : true,
    schoolType : "stateboard",
    ourBranches : ["thuckalay","mondaymarket","karungal"]
}
// Destructure - logic

const {
    name,
    location,
    studentCount,
    schoolType
} = school

console.log("school name :",name)
console.log("school Type :",schoolType)