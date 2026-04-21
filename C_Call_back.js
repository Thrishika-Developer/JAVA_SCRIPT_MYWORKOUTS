//callback- it is a function that you pass as an argument to another function 
//---> it execute later,after some task finishes.

// Example 1
// function productItem(){
//     setTimeout(() => {
//         console.log("product")
//     }, 2000);
// }
// function offerAnnouncement(){
//     console.log("offer enabled")
// }
// productItem()
// offerAnnouncement()   //offer enabled (some delay) product

//Example 2
// function productItem(callback){
//     setTimeout(() => {
//         console.log("product")
//         callback()
//     }, 2000);
// }
// function offerAnnouncement(){
//     console.log("offer enabled")
// }
// productItem(offerAnnouncement)   //product offer enabled

//Example 3 - advanced code
// function productItem(callback){
//     setTimeout(() => {
//         console.log("product")
//         callback("done")
//     }, 2000);
// }

// productItem(function(data){
//     console.log("data===>",data)
//     if (data == "done")
//         console.log("offer letter enabled") //product data===> done offer letter enabled
// })

// Example 4 
// function greet(name,callback){
//     console.log("hello"+name);
//     callback();
// }
// function sayBye(){
//     console.log("good bye!")
// }
// greet("thrishika",sayBye) //hellothrishika  good bye!

//Example 5 
// function productItem(callback){
//     let price = 6000
//     setTimeout(() => {
//         console.log("product")
//         callback(price)
//     }, 2000);
// }
// productItem(function(price){
//     var offer
//     if(price){
//         offer = price * 3/100;
//         console.log(offer)
//     }
// }) //product 180

//API style
// function fetchData(callback){
//     setTimeout(() => {
//         const data = { id:1,name : " thrishika "}
//         callback(data);    
//     }, 1000);
// }
// fetchData(function(result){
//     console.log(result)      //{ id: 1, name: ' thrishika ' }
// })


// callbacks hell- When multiple callbacks are nested inside each other, making the code hard to read and maintain.

//Example 1
// function productItem(callback){
//     let price = 6000
//     setTimeout(() => {
//         console.log("product")
//         callback(price)
//     }, 2000);
// }
// function productOffer(price,callback){
//     let offer
//     setTimeout(() => {
//         offer = price * 3/100
//         callback(offer)
        
//     },);
// }
// function accuratePrice(accPrice,offer){
//     setTimeout(() => {
//         accuPrice = accPrice - offer
//         console.log("accuratePrice===>",accuPrice) 
//     }, 1000);
// }
// productItem((price)=>{
//     // console.log(price)  //product 6000
//     productOffer(price,(offer)=>{
//         // console.log(offer) // product 180
//         accuratePrice(price,offer) //product 180  accuratePrice===> 5820


//     })
// })

// Example 2
// function productItem(callback){
//     setTimeout(() => {
//         console.log("product")
//         callback();
//     }, 2000);
// }
// function offerAnnouncement(){
//     console.log("offer enabled")
// }
// productItem(()=>{
//     offerAnnouncement()
// })    //product offer enabled






