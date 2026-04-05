// Axios vs fetch
//const axios = require("axios");

//using fetch
// function main(){
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(async (response)=>{
//             const json = await response.json();
//             console.log(json.title);
//         })
// }

async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: "GET"
    });
    const text = await response.json();
    console.log(text.title);
}
main();

//using axios

// async function main(){
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//     console.log(response.data.title);
// }