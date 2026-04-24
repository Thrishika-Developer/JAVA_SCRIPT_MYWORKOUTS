//promise - cleaner way to handle asynchronous operations

// let number =  new Promise((resolve,reject) =>
//     resolve(100))

// console.log(number) //Promise { 100 }



//how to call promise values
// let number =  new Promise((resolve,reject) =>
//    resolve(50))

// number.then(
//     (item)=>{
//         console.log("items=====>",item)
//     })                                      //items=====> 100
// number.catch(exception =>{
//     console.log("error===>",exception)
// })                                             //error===> 100






//simple method

// let number = new Promise((resolve,reject)=> resolve(100))
// number
// .then(item => console.log("data===>",item))
// .catch(error=> console.log("error=>",error)) //data===> 100

// let candidateName = Promise.resolve("thrishika")
// candidateName.then(item => console.log("resolved====>",item))
// .catch(error => console.log(error))           //resolved====> thrishika




//function promise
// function product(){
//     let productprice = 5000;
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(productprice)
//         }, 3000);
//     })
// }

// product().then(item =>console.log("resolve==>",item))   //resolve==> 5000


//more function with promise
function product(){
    let productprice = 5000;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve(productprice)
            reject("product failed")
        }, 3000);
    })
}

function offer(price){
    let offerPercentage = 3;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let offerPrice = (price * offerPercentage)/100;
            resolve(offerPrice)  
        },4000);
    })
}

product().then((price)=>
    offer(price).then((offerAmt)=>{
        console.log(offerAmt)
    })
)
.catch((error)=>console.log(error));






