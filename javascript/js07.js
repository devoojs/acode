//|| (OR)
/*
result = a || b;

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

let hour = 1;

if (hour < 10 || hour > 18 || 'isWeekend') {
  console.log('ccc');
}

console.log(1 || 0);
console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0);

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");

true || console.log("not printed");
false || console.log("printed");


//&& (AND)

result = a && b;

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

let hour2 = 12;
let minute = 30;

if (hour2 == 12 && minute == 30) {
    console.log("The time is 12:30");
}

if (1 && 0) {
    console.log ("falsy");
}

console.log(1 && 0); // 0
console.log(1 && 5); // 5

console.log(null && 5);
console.log(0 && "no matter what");

alert(1 && 2 && null && 3); // null

alert(1 && 2 && 3); // 3

//! (NOT)

alert(!true); // false
alert(!0); // true

alert(!!"non-empty string"); // true
alert(!!null); // false

alert(Boolean("non-emp... ")); // true
alert(Boolean(null)); // false

alert( null || 2 || undefined );

alert( alert(1) || 2 || alert(3) );

alert( 1 && null && 2 );

alert( null || 2 && 3 || 4 );


//[1]
let age = 22;
if(age > 14 && age < 90) {
  console.log('14>>..<<90')
}else{
  console.log('else')
}

//[2]
let age1 = 11;
if (! (age1 >= 14 && age1 <= 90) ) {
  console.log('14>>..<<90');
}else{
  console.log('else');
}

//[3]
let age2 = 11
if (age2 >= 14 || age2 <= 90){
  console.log('14>>..<<90');
}else{
  console.log('else');
}

*/

let usrNam = prompt("Your Name?", '');
if (usrNam == 'aaa') {

   let ps = prompt('Password?', '');
   if (ps == 'ppp') {
     
      let ag = prompt('age?', '');
      if (ag == '22') {
        
        console.log('Welcome');
      }else if(ag == '' || ag == null) {
        console.log('Canceled ag');
      }else{
        console.log('Wrong ag')
      }
      
   }else if(ps == '' || ps == null) {
     console.log( 'Canceled ag' );
   } else {
     console.log( 'Wrong password' );
   }

} else if (usrNam == '' || usrNam == null) {
  console.log( 'Canceled' );
} else {
  console.log( "I don't know you" );
}
