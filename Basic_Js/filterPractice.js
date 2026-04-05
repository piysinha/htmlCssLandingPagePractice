//Filtering
//Given an input array give back the even values from the array.

const arr = [1,2,3,4,5,6];
const newArr = [];

// Old School solution
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//Using Filter function

// function filterFunction(n){
//     if(n % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// const ans = arr.filter(filterFunction);
// console.log(ans);

//using filter function inside the filter function given by array

const ans = arr.filter((n)=>{
    if(n % 2 === 0){
        return true;
    }else{
        return false;
    }
});
console.log(ans);


