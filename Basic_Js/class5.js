
console.log("top of the file");

function timeoutPromise(resolve){
    console.log("timeoutPromise called");
    setTimeout(function(){
        console.log("callBack based set timeout compelted");
        resolve();
    }, 3000);
}

function setTimeoutPromisified(){
    console.log("setTimeoutPromisified called");
    return new Promise(timeoutPromise);
}

const test = setTimeoutPromisified();

function callBack(){
    console.log("timer is done");
}

test.then(callBack);

console.log("end of the file");

