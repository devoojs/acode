//Nullish Coalescing Operator '??'

x = a !== null && a !== undefined ? a : b;

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

height1 = height1 ?? 100;

let height2 = 0;

alert(height2 || 100); // 100
alert(height2 ?? 100); // 0

let height3 = null;
let width = null;
// مهم: استخدم الأقواس
let ar = (height ?? 100) * (width ?? 50);
console.log(ar); // 5000

let x = (1 && 2) ?? 3; // تعمل دون مشاكل
alert(x); // 2

// اجعل height=100 إذا كان null أو undefined
height = height ?? 100;