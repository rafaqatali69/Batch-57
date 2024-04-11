/* Problem-1 Hello Variable */
let greeting1 = "Hello, World";  //assign "Hellow World" to the variable greeting.
console.log(greeting1);          //Diplay/print of Variable greeting.

/* Problem-2 Basic Math */
let num1:number = 6;
let num2:number = 2;
 // sum function//
 let add9 = num1 + num2;
console.log(add9); //Display the sum of num1 value and num2 value//
//Subtraction/Difference function//
let sub1 = num1 - num2;
console.log(sub1); //Display the difference of Num1 value and Num2 value//
//Multiplication Function//
let Mul1 = num1 * num2;
console.log(Mul1); //Display the Product of Num1 value and Num2 value//
// Division Function with Quotient value//
let div1 = num1 / num2;
console.log(div1); // Display the Quotient value of Num1 value and Num2 Value//

/* Problem-3 Swaping Values */
let aa = 1, bb = 2;
console.log(aa);
console.log(bb);
aa = aa+ bb;
bb = aa- bb;
aa = aa - bb;
console.log(aa);
console.log(bb);
/*  Problem-4. Type Annotation (TypeScript)*/
let xyz1:string="This is string";
console.log(xyz1);
switch(xyz1){
    case xyz1:(5);       
    break;
}
/*  Problem-5. Modulas Operaters*/ 
let x1=15
let y1=20
console.log(y1%x1);

 /*  Problem-6. Increment Challenge */
 let incr1=20
 //incr1 = incr1+1
 incr1++
 console.log(incr1);
 /* Problem-7 Logical Gates */

 let Nationality1= "Pakistan";
let age1 = 25;
if (Nationality1== "Pakistan") {
    console.log(Nationality1)
    };
    if(age1 <=12 ){
        console.log("Child")}
        else{console.log("Adult")
        };
if (Nationality1== "Pakistan" && age1== 25)
{ console.log("Adult " + Nationality1 +" With " + age1)}
 else { console.log(" Not Pakistani Adults");
 }
/* Problem 8- Compound Assignment */
let c=20;
c+=2
console.log(c);
c-=5
console.log(c);
c*=3
console.log(c);
c/=2
console.log(c);
/* Problem 9- Even or Odd */

let o1=5;
if (o1%2==0){
    console.log("even")
}
    else {
        console.log("odd")
    }
    /* Problem 10- Voting Eligibility */
let age_voter = 20;
if (age_voter>=18){
    console.log("user is eligible to vote")
}
else{
    console.log("user is not eligible to vote")
}

/* Problem 11-Grading System */
let st_Marks=70;

if((st_Marks>=90) && (st_Marks<99)) {
    console.log("A++")
}
else if((st_Marks>=80) && (st_Marks<90))  {
console.log("A+")
}
    else if((st_Marks>=70) && (st_Marks<80))  {
        console.log("A")
}

else if((st_Marks>=60) && (st_Marks<70))  {
    console.log("B")

}

else if((st_Marks>=50) && (st_Marks<60))  {
    console.log("C")
}  
    else if((st_Marks>=40) && (st_Marks<50))  {
        console.log("F")   
}
/* Problem 12- Max of Three */
console.log(Math.max (6, 40, 101, 4,500));

/* Problem 13- Leap Year Checker */

function leap_year_check(year: number) {
    // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leap_year_check(2024));  
console.log(leap_year_check(2023));  

/* Problem 14- Fahrenheit to Celsius Converter */
// Already Function found to convert Fahrenheit to Celsius 
function fahrenheitToCelsius(fahrenheit_input_value: number): number {
    return (fahrenheit_input_value - 32) * 5/9;
}
const input_value_fahrenheitTemperature = 80
const calculated_celsiusTemperature = fahrenheitToCelsius(input_value_fahrenheitTemperature);
console.log(`${input_value_fahrenheitTemperature}°F 
is approximtscately equal to ${calculated_celsiusTemperature.toFixed(2)}°C.`);
/* Problem 15-Positive, Negative, or Zero */
let chcek_sign_num1=15;
let chcek_sign_num2=-20;
console.log(chcek_sign_num1);
console.log(chcek_sign_num2);

/* Problem 16- Multiplication Table */
let Table_num2=15;
let Sequence2
for(Sequence2=1; Sequence2<=10;Sequence2++){
    {
        console.log(`${Table_num2} x ${Sequence2} = ${Sequence2*Table_num2}`);
    }
}