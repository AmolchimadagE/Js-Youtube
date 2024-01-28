// primitive

// 7 type: string , number, boolean, null, undefined, symbol, BigInt,

// const score = 100
// const scorevalue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')
// console.log(id=== anotherId);




//refrence (non-primitive datatype)

//Array, object functions

const heros =["A.chimadage","sagar prasad","vikash singh"];
let myobj = {name:"hitesh",age: 22,}

const myFunction = function(){
    console.log("Hello Mom");

}
console.log ( typeof heros );


//type of opreator function is function null=>is object 

// stack (primitive), heap (non-primitive)

let myyoutubename ="@designwithAmol"

let anothername = "amolchimadge"
console.log(myyoutubename);
console.log(anothername)

let userone = {
    email:"amolchi@gmail.com"
    

}

let usertwo = userone
usertwo.email = "hitesh@google.com"
console.log(userone.email);
console.log(usertwo.email);






