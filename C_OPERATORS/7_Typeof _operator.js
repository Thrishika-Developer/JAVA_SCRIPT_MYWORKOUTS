let CandidateName = "Thrishika";
let CandidateAge = 32;
let Candidateskillset = ["java","Angular","python"];

// console.log("name==>",typeof CandidateName)
// console.log("candidateskill sets==>",typeof Candidateskillset)

let firstValue = 25;
let secondValue = 25;
let result = (typeof firstValue=="number" && typeof secondValue== "number") ?
             firstValue + secondValue   :
             "Invalid Data types assigned"


console.log("result==>",result)