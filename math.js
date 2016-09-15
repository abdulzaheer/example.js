//....MATH!.....
//the document.write() outputs the
//data within the function to the browser.
document.write("5 + 4 = " + (5 + 4) + "<br/>");

//Unless you use (), using + instead of ,
//will treat everything as a string.
document.write("5 - 4 = " + (5 - 4) + "<br/>");
document.write("5 * 4 = " + (5 * 4) + "<br/>");
document.write("5 / 4 = " + (5 / 4) + "<br/>");

//The modulus gives us the remainder of a division
document.write("5 % 4 = " + (5 % 4) + "<br/>");

//there is a standard way to store numbers is javascript

//Here we'll figure out the maximum number javascript can hold
//notice no variables are used
//the Number.MAX_VALUE is part of the javascript library
document.write("Max Num = ", Number.MAX_VALUE, "<br/>");

//Here we'll figure out the minimum number javascript can hold.
//notice no variables are used
//the Number.MIN_VALUE is part of the javascript library
document.write("Min Num = ", Number.MIN_VALUE, "<br/>");

// in Javascript numbers have 16 digits of precision
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");

//if you go over 16 digits...things will get messed up
//here is what happens when we add another 0
//to the previous two statements.
precisionTest = 0.10000000000000001;
document.write(precisionTest + 0.10000000000000001, "<br/>");

//to round a number two decimal places use
// .toFixed(2)
var balance = 1563.87;
document.write("Monthly payment : $", (balance / 12).toFixed(2), "<br />");

//if three decimal places:
// .toFixed(3)
document.write("Monthly payment : $", (balance / 12).toFixed(3), "<br />");

// if four
// .toFixed(4)
document.write("Monthly payment : $", (balance / 12).toFixed(4), "<br />");

var randNum = 5;

//Here we will use the increment (++) operation
//to add 1 to the given number
//putting the increment (++) after the number adds 1 after
document.write("randNum++ = ", randNum++, "<br/>");

//putting the decrement (++) before the number adds 1 before the variable
document.write("++randNum = ", ++randNum, "<br/>");

//the same rules apply for decrement (--)
document.write("randNum-- = ", randNum--, "<br/>");
document.write("--randNum = ", --randNum, "<br/>");

/* (keep in mind: the randNum variable, in these examples,
is constantly being changed by each statement. So when you
look at the results on the document, be not deceived.) */

// These calculations assign their results to their own variables
//randNum += 5 means randNum = randNum + 5
document.write("randNum += 5 = ", randNum += 5, "<br/>");
//randNum -= 5 means randNum = randNum + 5
document.write("randNum -= 5 = ", randNum -= 5, "<br/>");
//randNum *= 5 means randNum = randNum + 5
document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
//randNum /= 5 means randNum = randNum + 5
document.write("randNum /= 5 = ", randNum /= 5, "<br/>");

// These examples demonstrate the order of operations
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br/>");
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br/>");

// These are the math properties and methods that are
// built inside of javascript
//The Math object allows you to perform
//mathematical tasks on numbers.
document.write("Math.E = ", Math.E, "<br/>");
document.write("Math.PI = ", Math.PI, "<br/>");
//the methods:

//.abs() ...gets the absolute value of a number
document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");

//.cbrt()...gets the cube root of a number
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");

//.ceil()...rounds a number to the ceiling (rounds up).
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");

//.floor()...rounds a number to the floor (rounds down).
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");

//.round()...standard round, in this case (6.45), it will round down.
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");

//.log()...calculates the natural logarithm.
document.write("Math.log(10) = ", Math.log(10), "<br/>");

//.log10()...calculates the natural logarithm to the base of 10
document.write("Math.log10(10) = ", Math.log10(10), "<br/>");

//.max()...gets the max value of
// either on of the values passed in. 10 or 5.
document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");

//.min()...gets the min value of
// either on of the values passed in. 10 or 5.
document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");

//.pow()...calculates the power of 4 by 2
document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");

//.sqrt()...calculates the square root of a number.
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");

//there are more methods that are not covered here.
//refer to Mozilla Developer Network (MDN) for a complete list


//calulating random values...
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");

//Converting stings to numbers

/* The Number() function converts the
object argument
to a number that represents the
object's value. */
document.write("Converted String : ", Number("3.14"), "<br/>");

/* the parseInt() function
parses a string and
returns an integer. */
document.write("Converted Int : ", parseInt("5"), "<br/>");

/* the parseFloat() function
parses a string and returns a
floating point number */
document.write("Converted Float : ", parseFloat("5.555"), "<br/>");
