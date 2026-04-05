//given an array create new array multipled by 2.
//[1,2,3] => [2,4,6]

const arr = [1,2,3,4,5];

//Basic Solution
const newArr = [];

// for(let i = 0;i < arr.length; i++){
//     newArr.push(arr[i] * 2);
// }

// console.log("Basic Solution" + newArr);

//Bit advance solution
// function transform(i){
//     return i * 2;
// }

// const ans = arr.map(transform);

//using the same method function but inside a map
const ans = arr.map((i)=>{
    return i * 2;
})
console.log(ans);


