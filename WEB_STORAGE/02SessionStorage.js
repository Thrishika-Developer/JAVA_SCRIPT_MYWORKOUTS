//Example 1
const container = document.querySelector(".session")
sessionStorage.setItem("sessionUser","thrishika")

let user = sessionStorage.getItem("sessionUser")
container.textContent=user
console.log(user)

//store object in local storage
let userObj ={
    name : "aslin",
    age : 21
}
localStorage.setItem("localUser",JSON.stringify(userObj))


//Get object from store

let data = JSON.parse(localStorage.getItem("localUser"))
console.log(data.name)

