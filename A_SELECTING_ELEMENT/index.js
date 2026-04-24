//Id
const firstElement = document.getElementById("firstId")
// console.log("first id element===>"f,irstElement)  //<p id="firstId">Hello first program</p>


const content1 = document.getElementsByClassName("content")
const content2 = document.getElementsByClassName("content")[1]
// console.log("content1=====>",content1)          //<p class="content">Hello paragraph 1</p> <h1 class="content">Hello heading 1</h1> <h2 class="content">Hello heading 2</h2>
// console.log("content2=====>",content2)          //<h1 class="content">Hello heading 1</h1>



const paragraphtag = document.getElementsByTagName("p")
// console.log("paragraphtag======>",paragraphtag)   //<p id="firstId">Hello first program</p>     <p class="content">Hello paragraph 1</p>

const querySelector  = document.querySelector(".content")
// console.log("qurySelector====>",querySelector)    // <p class="content">Hello paragraph 1</p>

const  querySelectorid = document.querySelector("#firstId")
// console.log("querySelectorId=====>",querySelectorid)  //<p id="firstId">Hello first program</p>

const querySelectorTag = document.querySelector("p")
// console.log("querySelectorTag====>",querySelectorTag)   // <p id="firstId">Hello first program</p>


const querySelectorAll = document.querySelectorAll("#firstId")
// console.log(querySelectorAll)  // <p id="firstId">Hello first program</p> <h1 id="firstId">Hello first program</h1> <h2 id="firstId">Hello third program</h2>




document.querySelectorAll("#firstId").forEach(element =>{
    console.log(element)
})  // <p id="firstId">Hello first program</p>  <h1 id="firstId">Hello first program</h1> <h2 id="firstId">Hello third program</h2>