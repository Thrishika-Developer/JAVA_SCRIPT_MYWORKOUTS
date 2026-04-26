//method 1

// const button = document.getElementById("btn")
// button.addEventListener("click",()=>{
//     console.log("event trigger") //event trigger
// })
//-------------------------------------------------------------------------------------------------
//method 2- event handling
// const username = document.getElementById("username")
// username.addEventListener("change",(event)=>{
    // console.log(event.target.value)  //sending value is send for example type hello,hello
// })
//----------------------------------------------------------------------------------------------------
//method - 3 attributes event handling

// function clickme(){
//     console.log("button is clicked") //when you click the button ,console.button is clicked shown
// }

// function changeEvent(event){
//     console.log(event.target.value)  //when you type it will show next to next

// }
//--------------------------------------------------------------------------------------------------------------

//Basic concepts

// const btn = document.getElementById("btn")
// function handleClick(){
//     console.log("user clicked button")
// }
// btn.addEventListener("click",handleClick())  //user clicked button

//-------------------------------------------------------------------------------------------------------
//addEventListener()

// const btn = document.querySelector("#btns")
// btn.addEventListener("click",()=>{
//     console.log("button clicked!")
// })                                    //button clicked!

//-------------------------------------------------------------------------------------------------------------------
//Common Events

//Click
// const btn = document.querySelector("#b")
// btn.addEventListener("click",()=>{
//     alert("Clicked!")
// })                        //pop up message - clicked

//input(typing)
// const input = document.querySelector("#input");
// input.addEventListener("input",(event)=>{
//     console.log("typing:",event.target.value)
// })// typing:h  typing: he  typing: hel typing:hell typing: hello

//submit(forms)
// const form = document.querySelector("#myform")
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();  //without preventdefault page reload data gone
//     console.log("form submitted!")
// })                              //form submitted

//mouse events
// const box =  document.querySelector(".box")
// box.addEventListener("mouseover",()=>{
//     box.style.background="yellow"

// })
//---------------------------------------------------------------------------------------------

//event Object(event)
// const click = document.querySelector("#click")
// click.addEventListener("click",(event)=>{
    // console.log(event)                 //more objects
    // console.log(event.target)              //<button id="click">click me</button>
    // console.log(event.type)             //click
// })
//-------------------------------------------------------------------------------------------------------

//Old method
// const button = document.querySelector("#button")
// button.onclick =()=> console.log("one")
// button.onclick=()=> console.log("two")  //two - overrides


//------------------------------------------------------------------------------
//Used addeventlistener
// const button = document.querySelector("#button")
// button.addEventListener("click",()=>{
//     console.log("one")
// button.addEventListener("click",()=>{
//     console.log("two") //onclick - one,then click -one,two...
// })
// })
//------------------------------------------------------------------------
//Multi events

// const box = document.querySelector("#mul")
// box.addEventListener("mouseenter",()=>{
//     box.style.background="green"
// }) 
// box.addEventListener("mouseleave",()=>{
//     box.style.background = "red"
// })
// box.addEventListener("click",()=>{
//     box.style.background = "blue"  //mouseenter - green,mouseleave - red,mouseclick - blue
//     console.log("clicked")   //click
// })
//---------------------------------------------------------------------------------

//Event Delegation
// document.querySelector("#list").addEventListener("click",(event)=>{
//     if(event.target.tagName ==="LI"){
//         console.log("clicked:",event.target.innerText)
       
//     }
// })
//--------------------------------------------------------------------------------------------------
//real example

const btn = document.querySelector("#clicked")
const box = document.querySelector("#texted")

btn.addEventListener("click",()=>{
    box.textContent = "you clicked!"
    box.classList.toggle("active")
})