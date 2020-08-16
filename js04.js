//Basic operators, maths

console.log( 5 % 2 ); // 1
console.log( 8 % 3 );

//console.log( 2 ** 2 ); // 4
//console.log( 2 ** 3 ); // 8
//console.log( 2 ** 4 ); // 16

let s = "my" + "string";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

console.log(2 + 2 + '1' ); // "41" and not "221

console.log( 6 - '2' ); // 4,
console.log( '6' / '2' );

let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let apples = "2";
let oranges = "3";
console.log( apples + oranges );

let a, b, c;
a = b = c = 2 + 2;

let n = 2;
n += 5; // now n = 7
n *= 2; // now n = 14


let counter = 4;
counter++;
console.log( counter );

let counter2 = 4;
counter2--;
console.log( counter2 ); // 1

let counter3 = 6;
let a2 = counter3++;
console.log(a2); // 1

let counter4 = 1;
let a3 = counter4++;
console.log(a3); // 1

let counter5 = 0;
counter5++;
++counter5;
console.log( counter5 ); // 2, 

let counter6 = 0;
console.log( ++counter6 ); // 1

let counter7 = 0;
console.log( counter7++ ); // 0

/*
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
*/

let a4 = 2;
let x4 = 1 + (a4 *= 2); //1+4


"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2


/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
*/

let a5 = prompt("First number?", 1);
let b5 = prompt("Second number?", 2);
console.log(a5 + b5); // 12