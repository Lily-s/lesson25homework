//1. Create three variables for numeric, string, and boolean data,
let num = 2025;
let string = "2025";
let bool = true;
console.log(num, string, bool);

// convert each of them to two other types
//(number -> string and boolean
let numToString = num.toString();
let numToBoolean = Boolean(num);
//let numToBool = !!numvalue;
console.log(numToString, numToBoolean);

//string -> number and boolean
let stringToNum = Number(string);
let stringToBoolean = Boolean(string);
console.log(stringToNum, stringToBoolean);

//boolean -> number and string
let booleanToNum = Number(bool);
let booleanToString = bool.toString();
console.log(booleanToNum, bool.toString());

//2. Below is a code that asks the user for two numbers and shows their sum.
// It does not work correctly. The code in the example outputs 12 (for the default field values).
// What is the error? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

a = Number(a);
b = Number(b);

alert(a + b); // 12

//3. What would be the result of the expressions below?

// "" + 1 + 0
//"10";

// "" - 1 + 0
//-1;

// true + false
// 1;

// 6 / "3"
//2;

// "2" * "3"
//6;

// 4 + 5 + "px"
// 9px;

// "$" + 4 + 5
//$45;

// "4" - 2
//2;

// "4px" - 2
//NaN;

// "  -9  " + 5
//'  -9  5';

// "  -9  " - 5
//-14;

// null + 1
//1;

// undefined + 1
//NaN;
