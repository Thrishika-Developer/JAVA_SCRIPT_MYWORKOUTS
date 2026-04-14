// -----> closure

function outer(){
    let a =10;
    function inner(){
        let a = 20;
        console.log(a);
    }
    inner();
}
outer();
