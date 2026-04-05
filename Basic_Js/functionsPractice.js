
//Normal function
function sum (a,b){
    return a+b;
}


//Arrow Function
const sum = (a,b) =>{
    return a+b;
}

//Normal function
app.get('/sum', function (req,res){

})


//Arrow Function
app.get('/sum', (req,res) => {

})

const ans = sum(10,20);
console.log(ans);