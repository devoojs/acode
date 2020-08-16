//Interaction: alert, prompt, confirm

alert("Hello");

let age = prompt('How are you?', 100);
console.log(`You are ${age} years old!`);

let isBoss = confirm("Are you boss?");
console.log( isBoss ); //click ok = true

//Type Conversions

let value = true;
console.log(typeof value);

value = String(value); // value = true
console.log(typeof value); // string

//Numeric Conversion

console.log( "6" / "2" );

//[1]
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);

//[2]
let mynum = "666";
let num2 = Number(mynum);
console.log(num2);

//Boolean Conversion

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
alert( Boolean("0") ); // true
alert( Boolean(" ") );