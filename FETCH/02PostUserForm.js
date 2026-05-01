const url=("https://fakestoreapi.com/users")
const UserData ={
    "id" : 0,  
    "username": "thrishika",
    "email": "thrishikasinger999@gmail.com",
    "password": "Test123"
}



const option={
    method : "POST",
    contentType : {
        headers :"application/json",
    },
    body : JSON.stringify(UserData)
}
fetch(url,option)
.then(response=>response.json())
.then(data=> console.log("data===>",data))
.catch(error => console.error(error))