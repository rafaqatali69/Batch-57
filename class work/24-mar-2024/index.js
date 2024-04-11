// values can change at any time//
// let
// Declaration
var firstName;
// initialization
firstName = "Rafaqat Ali";
// values can not be change at any time
//const
var batch = "Batch 57";
/*batch = "batch 52";
 Roles of Variables
  1. spance not allowed
  2. letter, numbers,dollar sign, underscore*/
//let last;
var last2;
var last2$;
var lsat_2;
var last;
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
var fullname = "Ali";
// Numbers   --store numeric values ag
var age4 = 25;
// Boolean  -- true/false eg
var condition = true;
// undefined  -- eg
var abc;
console.log(abc);
// Null  -- null is specail value for saying that a variable is null vaue eg
var emplty = null;
// type annotations on variable
// variable name : data type 
var x;
// x = 4; // Error
// Template Litterals
// as we mention before its a way to deal with strings and specially dynamic
// strings
var myName = "Hello";
var name1 = "Rafaqat";
var fullname2 = myName + name1;
// Template Literals
// backticks ``
var fullName3 = "My Name is " + "".concat(myName, " ").concat(name1);
//Declare a variable for storing your favorite movie name with a string type annotation.
var moviename = "june 2021";
console.log(moviename);
//Create a template string to introduce youself, including your name and age.
var yourname = "Rafaqat Ali";
var age = 53;
var introduction = "".concat("My name is", " ").concat(yourname, " ").concat("and my age is", "  ").concat(age, " ").concat(("Years."));
console.log(introduction);
//Initialize a constant with a type annotation for your current mood as a boolean.
var mood = true;
console.log(mood);
//Combine a user's first and last name using template liternals and log the full name.
var firstname = "Rafaqat";
var lastname = "Ali";
var fullname4 = "".concat(firstname, " ").concat(lastname);
console.log(fullname);
//Create a variable for a user's age with a type annotation and assign a number to it.
var user_age = 53;
console.log(user_age) + "Years";
//Use a template string to display a product name and its price.
var productname = "Thinkpad";
var productprice = 421000.50;
console.log("".concat(productname, " ").concat("and price is", " ").concat(productprice));
//Declare variable to store the number of pets you have with a number type annotation.
var pets = 1;
console.log(pets);
//Declare a variable with a boolean type annotation indication if it is your birthday today.
function stringToBoolean(str) {
    return str
        .toLowerCase();
}
var b_day = stringToBoolean('It is your birthday today.');
console.log(b_day);
//Create a template string that includes a user's first name, last name, and age with proper lables.
var ufm = ("Rafaqat");
var ulm = ("Ali");
var uage = (53);
var alldetails = "".concat("First Name:").concat(ufm, " ").concat("Last Name:").concat(ulm, " ").concat("Age:").concat(uage);
console.log(alldetails);
//Initializea constant to hold your birth year with a number type annotation.
var birthyear = 1969;
console.log(("Birth Year is") + (" ") + (birthyear));
//Wite a line of code that user a template string to combine a city and country into a full address.
var city = "Lahore";
var country = "Pakistan";
var full_address = "".concat(city).concat(",", " ").concat(country);
console.log(full_address);
//Declare a variable for today's temperature with a number type annotation and assign a value to it.
var today_temperature = 27;
console.log((today_temperature) + ("*C"));
