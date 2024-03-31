"use strict";
// values can change at any time//
// let
// Declaration
let firstName;
// initialization
firstName = "Rafaqat Ali";
// values can not be change at any time
//const
const batch = "Batch 57";
/*batch = "batch 52";
 Roles of Variables
  1. spance not allowed
  2. letter, numbers,dollar sign, underscore*/
//let last;
let last2;
let last2$;
let lsat_2;
let last;
/* first latter must char,$,_
   first letter not be number
   second character may number */
//Data Types
// Primitive Data Type and Non Primitive data type
/* primitive data type can store only 1 value and Non primitive
   data type can store more than 1 values */
// Non Primitive Data Types//
// string 
//(can store text value) like "ALI"
let fullname = "Ali";
// Numbers   --store numeric values ag
let age4 = 25;
// Boolean  -- true/false eg
let condition = true;
// undefined  -- eg
let abc;
console.log(abc);
// Null  -- null is specail value for saying that a variable is null vaue eg
let emplty = null;
// type annotations on variable
// variable name : data type 
let x;
// x = 4; // Error
// Template Litterals
// as we mention before its a way to deal with strings and specially dynamic
// strings
let myName = "Hello";
let name1 = "Rafaqat";
let fullname2 = myName + name1;
// Template Literals
// backticks ``
let fullName3 = "My Name is " + `${myName} ${name1}`;
//Declare a variable for storing your favorite movie name with a string type annotation.
let moviename = "Dune 2021";
console.log(moviename);
//Create a template string to introduce youself, including your name and age.
let yourname = "Rafaqat Ali";
let age = 53;
let introduction = `${"My name is"} ${yourname} ${"and my age is"}  ${age} ${("Years.")}`;
console.log(introduction);
//Initialize a constant with a type annotation for your current mood as a boolean.
const mood = true;
console.log(mood);
//Combine a user's first and last name using template liternals and log the full name.
let firstname = "Rafaqat";
let lastname = "Ali";
let fullname4 = `${firstname} ${lastname}`;
console.log(fullname);
//Create a variable for a user's age with a type annotation and assign a number to it.
let user_age = 53;
console.log(user_age) + "Years";
//Use a template string to display a product name and its price.
let productname = "Thinkpad";
let productprice = 421000.50;
console.log(`${productname} ${"and price is"} ${productprice}`);
//Declare variable to store the number of pets you have with a number type annotation.
let pets = 1;
console.log(pets);
//Declare a variable with a boolean type annotation indication if it is your birthday today.
function stringToBoolean(str) {
    return str
        .toLowerCase();
}
const b_day = stringToBoolean('It is your birthday today.');
console.log(b_day);
//Create a template string that includes a user's first name, last name, and age with proper lables.
let ufm = ("Rafaqat");
let ulm = ("Ali");
let uage = (53);
let alldetails = `${"First Name:"}${ufm} ${"Last Name:"}${ulm} ${"Age:"}${uage}`;
console.log(alldetails);
//Initializea constant to hold your birth year with a number type annotation.
const birthyear = 1969;
console.log(("Birth Year is") + (" ") + (birthyear));
//Wite a line of code that user a template string to combine a city and country into a full address.
let city = "Lahore";
let country = "Pakistan";
let full_address = `${city}${","} ${country}`;
console.log(full_address);
//Declare a variable for today's temperature with a number type annotation and assign a value to it.
let today_temperature = 27;
console.log((today_temperature) + ("*C"));
