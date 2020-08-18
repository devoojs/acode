/*
let obj1 = {
  name: "John",
};
let key1 = prompt("What?", "name");
console.log( obj1[key1] );


let key2 = prompt("Which?", "apple");
let obj2 = {
  [key2]: 5,
};
console.log( obj2.apple );


function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
let user = makeUser("John", 30);
console.log(user.age); // John



let user1 = { name: "John", age: 30 };
console.log( "age" in user1 );
console.log( "nnnn" in user1 );

let user2 = {};
console.log( user2.noSuchProperty === undefined );




let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__);



let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  console.log( key );
  console.log( user[key] );
}



function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  console.log(key);
  return true;
}
console.log(isEmpty);



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

*/



let menu = {
  width: 20,
  height: 30,
  title: "My menu"
};
function num(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function myFun(obj){
  for (var key in obj){
    if (num(obj[key])){
      obj[key] *= 2;
    }
  }
}
myFun(menu);
console.log(menu.width + ' ' + menu.height + ' ' + menu.title);