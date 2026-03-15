let fname = "John";
console.log(fname);

const firstname = "Jane";
console.log(firstname);

let age = 19;
let canVote = (age >= 60);
console.log(canVote);

function greet(name){
    return "Hello, " + name + "!";
}

console.log(greet("Piyush"));

function sum (a,b){
    return a + b;
}
console.log(sum(5, 10));
console.log(sum("Piyush"," Sinha"));

function vote(age) {
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(vote(10));

let users = ["Piyush", "Pallvi", "Shanu"]
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}

let user1 = {
    name: "Piyush",
    age: 30,
    gender: "male"
}

let user2 = {
    name: "Pallavi",
    age: 30,
    gender: "female"
}

function greetUser(user, voteEligible){
    if(user.gender === "male"){
        console.log("Hello, Mr. " + user.name + "! You are " + user.age + " years old.");
    }
    if(user.gender === "female"){
        console.log("Hello, Ms. " + user.name + "! You are " + user.age + " years old.");
    }
    console.log("Vote Eligible: " + voteEligible);
}

greetUser(user2, vote(user2.age));

let user3 = [{
    name: "Shanu",
    age: 10,
    gender: "male"
}, {
    name: "Pallavi",
    age: 30,
    gender: "female"
},{
    name: "Piyush",
    age: 30,
    gender: "male"
}]

function maleVoter(users){
    let maleVoters = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].gender === "male" && users[i].age > 18){
            maleVoters.push(users[i])
        }
    }
    return maleVoters;
}

console.log(maleVoter(user3));

function maleVoter2(users){
    let maleVoters = [];
    users.filter(user => {
        if(user.gender === "male" && user.age > 18){
            maleVoters.push(user);
        }
    })
    return maleVoters;
}

console.log(maleVoter2(user3));
