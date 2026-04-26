//add
const btn = document.querySelector(".btn-one")
btn.addEventListener("click",()=>{
    btn.classList.add("btn1")
})
//remove
const bt = document.querySelector(".btn-two")
bt.addEventListener("click",()=>{
    bt.classList.remove("btn-two")
})
//toggle
const btns= document.querySelector(".btn-three")
btns.addEventListener("click",()=>{
    btns.classList.remove("btn-three")
    btns.innerText = "add me"
    btns.addEventListener("click",()=>{
          btns.classList.toggle("btn-two")
    })
   
})

//toggle class using list4
function toggleAction(){
    const togglecontainer = document.querySelector(".toggle-class")
    togglecontainer.classList.toggle("hideshow")
}
