
const errorMessage = document.querySelector(".error-message")
// console.log(form)
// console.log("form=====>",form[0][0])
// if(form[0][0].value == null || form[0][0].value==''){
//     console.log("error triggered")
// }
// else{
//     console.log("entered value",form[0][0].value)
// }

function formValidate() {
    event.preventDefault()
    // console.log("event trigger")  //event trigger

    const form = document.querySelectorAll("form")

    if (form[0][0].value == null || form[0][0].value == '') {
        errorMessage.innerHTML = ` <span style = color:red>please enter your username</span>`
    }
    else if (form[0][0].value.length < 3) {
        errorMessage.innerHTML = ` <span style = color:red> username must be minimum 3 letter required</span>`
    }
    else if (form[0][0].value.length > 5) {
        errorMessage.innerHTML = ` <span style = color:red> username not exclude 6 charecter </span>`
    }

    else {
        errorMessage.innerHTML = ""
        console.log("entered value", form[0][0].value)

        let formdata = {
            username: form[0][0].value
        }
        console.log("formdata===>", formdata)
    }

}
function changeEvent() {
    let data = event.target.value;
    // console.log("data===>",data)
    if (data.length > 2) {
        errorMessage.innerHTML = ""
    }
} 

