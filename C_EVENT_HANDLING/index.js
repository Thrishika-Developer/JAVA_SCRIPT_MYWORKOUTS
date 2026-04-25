//method 1

// const button = document.getElementById("btn")
// button.addEventListener("click",()=>{
//     console.log("event trigger") //event trigger
// })

//method 2- event handling
// const username = document.getElementById("username")
// username.addEventListener("change",(event)=>{
    // console.log(event.target.value)  //sending value is send for example type hello,hello
// })

//method - 3 attributes event handling

function clickme(){
    console.log("button is clicked") //when you click the button ,console.button is clicked shown
}

function changeEvent(event){
    console.log(event.target.value)  //when you type it will show next to next

}