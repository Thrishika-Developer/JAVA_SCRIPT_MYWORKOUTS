//Inner text (only visible text )

// const selector = document.querySelectorAll("#firstId")
// // console.log(selector)  // <p id="firstId">Hello first program</p> <h1 id="firstId">Hello first program</h1> <h2 id="firstId">Hello third program</h2>
// for(let item of selector){
//     item.innerText ="Hello welcome\n to javascript"
// } 
//Hello welcome
// to javascript - page output

//--------------------------------------------------------------------------------------------------
//innerHTML - style added

// const names =document.querySelector(".name")
// console.log(names)// <div class="name">hello thrishika</div>

// names.innerHTML = `<span style='color : green'>hello thrisha</span>`  //<div class="name"><span style='color : green'>hello thrisha</span></div>   page output - hello thrisha -green color
//------------------------------------------------------------------------------------------------------------
//text content - faster than inner text

// const box = document.querySelector("#box")
// console.log(box.textContent)  //Hello Hidden
//textContent includes hidden text
// innerText ignores hidden text

// HTML Tag behaviour
// const boxed =document.querySelector("#box").textContent = "<b>Hello</b>"
// console.log(boxed)  //<b>Hello</b> ,not bold

//inner HTML

// const box = document.querySelector("#box").innerHTML="<b>hello </b>"
// console.log(box)  //page output - bold in hello

//-------------------------------------------------------------------------------------------------------------------------

//changing styles

// document.querySelector("#box").style.color = "red"; //hello -red color -page output

//-------------------------------------------------------------------------------------------------

//multiple styles

// const box =document.querySelector("#box")
// box.style.backgroundColor = "blue"
// box.style.width = "200px"
// box.style.borderRadius = "20px"
// box.style.padding = "60px"

// box.addEventListener("mouseover",()=>{
//     box.style.backgroundColor ="green"
// })
// box.addEventListener("mouseout",()=>{
//     box.style.backgroundColor = "blue"
// })

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Add class
// const paragraph = document.querySelector("#para").classList.add("active")

// //---------------------------------------------------------------------------------------------
// //remove clss

// const paragraphs =document.querySelector("#para").classList.remove("active")

// //---------------------------------------------------------------------------------------------------------------------
// //toggle class - switch , add to remove,show to hide

// const paragrap = document.querySelector("#para").classList.toggle("active")

//---------------------------------------------------------------------------------------------------------

//Real Example

// const btn = document.querySelector("button")
// const texting = document.querySelector("#text")

// btn.addEventListener("click",()=>{
//    texting.classList.toggle("active")
// })

// const btn = document.querySelector("button")
// const texting = document.querySelector("#text")

// btn.addEventListener("mouseover",()=>{
//     texting.innerText = "Mouseover!";
//     texting.style.backgroundColor = "orange";
//     texting.classList.toggle("active")
// })

//--------------------------------------------------------------------------------------------------------------
//Input box

const username = document.getElementById("username")
username.value = "thrishikasinger999@gmail.com"