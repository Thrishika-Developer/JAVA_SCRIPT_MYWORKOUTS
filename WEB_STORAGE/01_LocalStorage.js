// //Local storage
// //Store data
// localStorage.setItem("name","kavitha");
// localStorage.setItem("age",27)

// //Get Data
// const container= document.querySelector(".data-info")
// const userName = localStorage.getItem("name")


// //Remove
// // localStorage.removeItemL("name")

// container.innerHTML = userName;
// console.log("username====>",userName)
//------------------------------------------------------------------------
const ContainerTwo = document.querySelector(".data-info")
function register(){
    const userInformation ={
        "userName" : "thrishika",
        "age" : 21,
        "course" : "react"

    }
    localStorage.setItem("userInformation",JSON.stringify(userInformation))
    let productInfo =[{
        id : 1,
        productName :"T-shirt"
    }]
  localStorage.setItem("ProductInfo",JSON.stringify(productInfo))

   
}
 function ViewData(){

    let data =localStorage.getItem("userInformation")
    let productData =   JSON.parse(localStorage.getItem("productInfo"))
    ContainerTwo.innerText=data
    
}
function remove(){
    localStorage.removeItem("userInformation")
    ContainerTwo.innerText=``

}

//------------------------------------------------------------------------------------------
