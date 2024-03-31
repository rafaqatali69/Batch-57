//console.log(4);
//addition
var x = 5;
var y = 2;
var add = x + y;
var add1 = "x" + "y";
var add2 = "xy" + x + y;
var add3 = "xy" + add;
var add4 = x + y + "xy";
var add5 = x + "xy";
var add6 = x + y + "xy" + x;
console.log(add);
console.log(add1);
console.log(add2);
console.log(add3);
console.log(add4);
console.log(add5);
console.log(add6);
//Subtraction
var sub = x - y;
//let sub = "x" - "y" //error 
// let sub2 = "x" - 2 ; //error
// let sub3 = x - "y";
console.log(sub);
// Multiplication
var mult = x * y;
//let mult2 "x" * y; //error
console.log(mult);
//DIVISION
var divi = x / y;
console.log(divi);
// Expnentional 
var EXP = Math.pow(2, 5);
//assignment
var n = 5;
n += 5; //10
console.log(n);
//incremnet operators ++
n++; // n=n+1 //11
console.log(n);
n = n + 2;
n -= 5;
console.log(n);
// decrement operators --
n--; // n = n-1
//Comparision Operators
n = 5;
// ==  only comparision value of variable
n == 5; // true
n == 4; //false
// ===    comparsion value as well as data type of variable
// 5=5 ( number = number and 5==5 ) //true
var a = 5;
var b = 5;
var c = "5";
var d = 6;
a === b;
// c==d;
// logical conditions
n = 7;
n >= 7;
n <= 8;
n != 4;
// Logical operators (AND, OR, NOT)
// OR  operators IS ||
// T || T = T
// T || F = T
// F || T = T
// F || F = F
console.log(n == 5 || n == 6); // False
console.log(n == 5 || n >= 5); // ture
// AND operators is  && (ampersign)
// T && T = T
// T && F = F
// F && T = F
// F && F = T
console.log(n >= 5 && n <= 8);
// NOT (!)
// T = F
// F = T
console.log(!(n >= 5 && n <= 8));
// T && T = F
// T && F = T
// F && T = T
// F && F = F
// IF,ELSE, ELSE IF STATEMENTS
//Condition statement
// if (condition){} else {}
var Nationality = "Pakistan";
var age = 25;
if (Nationality == "Pakistan") {
    console.log(Nationality);
}
// else {console.log("Not "+Nationality);
else if (age <= 12) {
    console.log("Child");
}
else {
    console.log("Adult");
}
;
// odd and even
var num = 8;
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("odd");
}
