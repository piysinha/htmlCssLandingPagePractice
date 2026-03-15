//Input output class

const fs = require("fs");

// const contentsA = fs.readFileSync("a.txt", "utf-8") // Synchronus function
// const contentsB = fs.readFileSync("b.txt", "utf-8") // Synchronus function
// console.log(contentsA);
// console.log(contentsB);

function print(err, data){
    console.log(data)
}

fs.readFile("a.txt","utf-8", print) // reading file asnchronously
fs.readFile("b.txt","utf-8", print) // reading file asnchronously
console.log("Done!")
