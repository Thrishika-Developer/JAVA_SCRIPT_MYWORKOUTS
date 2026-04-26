// //selctor

// const form = document.querySelectorAll("myform")
// // console.log("form===>",form)

// //-----------------------------------------------------------------------
// //submit event
// const forms= document.querySelector("#my-form");

// forms.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     // console.log("form submitted")  //form submitted
// })

//----------------------------------------------------------------------------

//Getting input value

const formed = document.querySelector("#table")
const input = document.querySelector("#usernames")



formed.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("value==>",input.value)
})              //value ====>thrishika

//-----------------------------------------------------------------------------------------------
//multiple inputs 
const form = document.querySelector(".forms")
const name = document.querySelector("#name")
const email = document.querySelector("#email")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("Name:",name.value)  //Name: thrishika
    console.log("Email:",email.value) //Email : thrishikasinger999@gmail.com
})
//---------------------------------------------------------------------------------------------
//form validation

const validationform = document.querySelector("#for")
const validationname = document.querySelector("#user")

validationform.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(validationname.value==""){
        alert("Name is required")
    }else{
        alert("Form submitted!")
    }                                   //input give - form submitted otherwise name is required pop up message shown

})

//---------------------------------------------------------------------------------------------------------------------
//Reset Form

const anyform = document.querySelector("#id")
anyform.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("submitted!")
    anyform.reset()
    
})

//-------------------------------------------------------------------------------------------------------------------------

//Real time input handling

const inputs = document.querySelector("#box")
inputs.addEventListener("input",(event)=>{
    console.log("typing:",event.target.value)
})                                       //typing:h typing:he typing:hel typing:hell typing:hello

//-------------------------------------------------------------------------------------------------------------------
//Access Form Elements Directly

const formvalue = document.querySelector("#mysform")
formvalue.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("value===>",event.target.users.value) //value===>ns
})

//-----------------------------------------------------------------------------------------

const formvalues = document.querySelector("#formid")
const forminput = document.querySelector("#task")
const list = document.querySelector("#list")

formvalues.addEventListener("submit",(e)=>{
    e.preventDefault()
    const forminput = document.querySelector("#task")
    console.log(forminput)
    if(forminput.value.trim()==="")
        return;
    const li=document.createElement("li")
    li.textContent = forminput.value;
    list.appendChild(li)
    forminput.value = "";// . apple .banana.................
})