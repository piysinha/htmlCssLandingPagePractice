class Promsie2 {
    constructor(fn){
        function afterdone(){
            this.resolve();
        }
        fn(afterdone)
    }
    then(callBack){
        this.resolve = callBack;
    }
}

function readTheFile(resolve){
    setTimeout(function(){
        console.log("callback based timeout compelted");
        resolve;
    }, 3000);
}

function setTimeoutPromisified () {
    return new Promsie2(readTheFile);
}

let test = setTimeoutPromisified();

function callBack(){
    console.log("callBack has been called");
}

test.then(callBack());