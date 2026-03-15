// // Js Classes and Promise

// class Rectangle {
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
    
//     area(){
//         const area = this.width * this.height;
//         return area;
//     }
// }

// const rect = new Rectangle(2,4,"red");
// const area = rect.area();
// console.log(area);

// const now = new Date();
// console.log(now.getFullYear());

// const map = new Map();
// map.set('fname', "Piyush");
// map.set('age', 30);
// const fname = map.get("age")
// console.log(fname);

const fs = require("fs");

function readTheFile(sendTheFinalValue){
    fs.readFile("a.txt", "utf-8", function(err, data){
        sendTheFinalValue(data);
    });
}

function readFile (){
    return new Promise(readTheFile);
}

const p = readFile();

function callBack(contents){
    console.log(contents);
}

p.then(callBack);
