function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve, duration);
    });
}

// Promisified call back hell
// setTimeoutPromisified(1000).then(()=>{
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(()=>{
//         console.log("Hello");
//         setTimeoutPromisified(5000).then(()=>{
//             console.log("Hello There");
//         });
//     });
// });

//Promise chaining new method
setTimeoutPromisified(1000).then(()=>{
    console.log("Hi");
    return setTimeoutPromisified(3000).then(()=>{
        console.log("Hello");
        return setTimeoutPromisified(5000).then(()=>{
            console.log("Hello There")
        })
    })
})


// Old method
// setTimeout(function(){
//     console.log("HI");
//     setTimeout(function(){
//         console.log("Hello")
//         setTimeout(() => {
//             console.log("Hello There");
//         }, 5000);
//     },3000);
// },1000);

