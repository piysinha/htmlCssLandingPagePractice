
function setTimeoutPromisified(time){
    console.log("Timeout Promisified function called");
    return new Promise(function(resolve){
        setTimeout(resolve, time);
    });
}

function callBack(){
    console.log("Time has been passed");
}

const p = setTimeoutPromisified(10000);

p.then(callBack);