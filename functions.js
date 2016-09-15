//...FUNCTIONS!..//
//Functions provide code, reuse, and eliminate repetitive code.

//Define a function that checks if a value is in an array
function inArray(arrayToCheck, value){
  for(i = 0; i < arrayToCheck.length; i++){
    if(arrayToCheck[i] === value){
      return true;
    }
  }
  return false;
}

var randArray = [1, 2, 3, 4, 5];

document.write("Is the number 4 inside of randArray? ", inArray(randArray, 4), "<br/>"); // this statement returns TRUE because 4 is inside randArray.

document.write("Is the number 6 inside of randArray? ", inArray(randArray, 6), "<br/>"); // this statement returns FALSE because 6 is not inside randArray.

document.write("Is the number 54 inside of randArray? ", inArray(randArray, 54), "<br/>");
document.write("Is the number 3 inside of randArray? ", inArray(randArray, 3), "<br/>");

//Local variables defined in functions CANNOT be accessed outside of the functions

function times2(num){
  var var2 = 2; //a local variable

  return num * var2;
}
//This statement causes an error:
//document.write("Value of var2: ", var2, "<br/>");
//because var2 if a local variable to function times2()
document.write("7 * 2 = ", times2(7), "<br/>");//calling the times2 function with a parameter of 7

//Pass a function as a parameter
function times3(num){
  return num * 3;
}
document.write("6 * 3 = ", times3(6), "<br/>");//calling the times3 function with a parameter of 6

function multiply(func, num){
  return func(num);
}

document.write("2 * 15 = ", multiply(times2, 15), "<br/>");

document.write("3 * 15 = ", multiply(times3, 15), "<br/>");

document.write("3 * 35 = ", multiply(times3, 35), "<br/>");

document.write("2 * 35 = ", multiply(times2, 35), "<br/>");

//Defining a function expressions
//We can assign functions to variables, store them in arrays,
//and pass them into other functions and return them from functions
var triple = function(num){
  return num * 3;
};

document.write("3 * 45 = ", multiply(triple, 45), "<br/>");
document.write("3 * 25 = ", multiply(triple, 25), "<br/>");
document.write("3 * 15 = ", multiply(triple, 15), "<br/>");
document.write("3 * 5 = ", multiply(triple, 5), "<br/>");
document.write(triple(3), "<br/>");

//Receiving the variable number of an argument
function getSum(){
  var sum = 0;
  for(i = 0; i < arguments.length; i++){ //the arguments object is a built-in object
    //it is an array-like object corresponding to the arguments passed to a function.
    sum += arguments[i];
  }
  return sum;
}

document.write("Sum Test 1: ", getSum(1, 2, 3, 4, 5), "<br/>");
document.write("Sum Test 2: ", getSum(45, 5, 5, 5, 5), "<br/>");
document.write("Sum Test 3: ", getSum(65, 2, 3, 4, 5), "<br/>");
document.write("Sum Test 4: ", getSum(11, 2, 3, 4, 5), "<br/>");
document.write("Sum Test 5: ", getSum(145, 5, 5, 5, 5), "<br/>");
document.write("Sum Test 6: ", getSum(165, 2, 3, 4, 5), "<br/>");

//Returning a variable number of arguments
function times_2(theArray){

  var newArray =[];
  for(i = 0; i < theArray.length; i++){
    newArray.push(theArray[i] * 2);
  }
  return newArray;
}

document.write("Array Doubled Test 1 : ", times_2([1, 2, 3, 4, 5]).toString(), "<br/>");


function times_3(theArray){ //numbers in array multiplied by 3

  var newArray = [];
  for (i = 0; i < theArray.length; i++){
    newArray.push(theArray[i] * 3);
  }
  return newArray;
}

document.write("Each array item multiplied by 3 Test 2: ", times_3([2, 1, 3, 4, 5]).toString(), "<br/>");

function divide_3(theArray){ //numbers in array divided by 3
  var newArray = [];
  for (i = 0; i < theArray.length; i++){
    newArray.push(theArray[i] / 3);
  }
  return newArray;
}

document.write("Each number in array divided by 3 Test3: ", divide_3([3, 6, 9, 12, 15, 18, 21]).toString(), "<br/>");

//Recursive function with factorial
function factorial(num){ //a function is a function that calls itself
  if(num <= 1){
    return 1;
  } else{
    return num * factorial(num - 1);
  }
}

document.write("Factorial of 10 : ", factorial(10), "<br/>"); //num = 10 * factorial(10) = 10 * 362880 = 3628800
document.write("Factorial of 9 : ", factorial(9), "<br/>"); //num = 9 * factorial(9) = 9 * 40320 = 362880
document.write("Factorial of 8 : ", factorial(8), "<br/>"); //num = 8 * factorial(8) = 8 * 5040 = 40320
document.write("Factorial of 7 : ", factorial(7), "<br/>"); //num = 7 * factorial(7) = 7 * 720 = 5040
document.write("Factorial of 6 : ", factorial(6), "<br/>"); //num = 6 * factorial(6) = 6 * 120 = 720
document.write("Factorial of 5 : ", factorial(5), "<br/>"); //num = 5 * factorial(5) = 5 * 24 = 120
document.write("Factorial of 4 : ", factorial(4), "<br/>"); //num = 4 * factorial(4) = 4 * 6 = 24
document.write("Factorial of 3 : ", factorial(3), "<br/>"); //num = 3 * factorial(3) = 3 * 2 = 6
document.write("Factorial of 2 : ", factorial(2), "<br/>"); //num = 2 * factorial(2) = 2 * 1 = 2
document.write("Factorial of 1 : ", factorial(1), "<br/>"); //num = 1 * factorial(1) = 1
document.write("Factorial of 0 : ", factorial(0), "<br/>");
