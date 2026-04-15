//simple fuction------->Global scope
var a = 10;

function test(){
    console.log(a); 
}
// test()     //10
// console.log(a)  //10

// Program
var name = "thrishika";

function myname(){
    // console.log("Hello" + name);
}
// myname()                  //Hellothrishika
// console.log(name)        //thrishika


//------------> Function scope
function test(){
    var b = 20;
    // console.log(b)
}
// console.log(b) //error
// test()  //20  -works


var a =10;
function test(){
    var a = 20;
    // console.log(a)
}
// test()           //20
// console.log(a)  //10



// --------> Block scope
{
    var x=100;
}
// console.log(x) //100  //var ignores the block

{
    let y = 100;
}
// console.log(y)  //error-let and const follow block scope


if(true){
    var a = 10;

}
// console.log(a) //10


if(true){
    let z= 10;

}
// console.log(z) //error

