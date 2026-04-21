//event loop
// process (process nexttick)              Execute(callstack)     output         waiting     coderun 
// add()                                       add()               10              mod()      add()

// sub ()                                      sub()               0                          sub()

// mod()-delay                                                                                mul()

// mul()                                       mul()               100

// Asynchronous (non-blocking)
//---> tasks can run in background
//---> program does not wait

// Example 1
console.log("start")
console.log("stop")
setTimeout(()=>{
    for(i=0;i<1000000000000;i++){
        console.log(i)
    }
},3000);
console.log("end")  // start stop end 0 1 2 3 4 5.........