function processUser (name,callback){
    console.log("processing user===>",name);
    callback();   

}
function done(){
    console.log("Done!")
}
processUser("thrishika",done)

