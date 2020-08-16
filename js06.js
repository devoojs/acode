//Conditional branching: if, '?'
/*
let year = prompt('ECMAScript-2015?', '');
if (year == 2015) {
  alert('true');
} else {
  console.log('false')
}

let year2 = prompt('ECMAScript-2015','');

if (year2 < 2015) {
    console.log('<2015')
} else if (year2 > 2015) {
    console.log('=2015')
} else {
    console.log('=2015')
}


let ab;
let age = prompt('How Age?', '')
if (age > 18) {
  ab = true;
} else {
  ab = false;
}
console.log(ab);

let result = condition ? value1 : value2;

let myage = age > 18 ? true : false;
*/

let age2 = prompt('age?', 18);
let message = 
  (age2 < 3) ? 'Hi, baby!' :
  (age2 < 18) ? 'Hello!' :
  (age2 < 100) ? 'Greetings!' :
  'What an unusual age!';
console.log( message );

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
console.log('Right!') :
console.log('Wrong');

if ("0") {
  console.log( 'Hello' );
}

let re = (a + b < 4) ? 'Below' : 'Over';

let msg1 = 
  (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
  
  