
      // You create variables that store values with var
      // Prompt() opens a popup that requests info
      var yourName = prompt("What is your name?")

      //depending on the conditions, the if statement performs different actions
      if(yourName != null){

        //the text is set in an HTML element with the id sayHello
        //concatenate(combine) strings with the + operator
        document.getElementById("sayHello").innerHTML = "Hello " + yourName;
      } else {

        //a poput opens with a message when we use the alert() function.
        alert ("Please enter a name next time");
      }

      //....VARIABLES!.....
      //variables can contain letter, numbers, underscores or $,
      //but cannot start with a number, or contain spaces
      //variables are case sensitive
      var myName = "Jesus";
      var myAge = 33;

      //Variables don't have a defined type
      //For instance this statement will not cause error,
      //because we are giving the variable new data
      myName = 100;

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

      //...STRINGS!....
      //remember: start counting with 0 :)
      var randStr = "A long " + "string that " + "goes on and on ";

      /* caltulating String length by
      adding the .length() property
      to the end of a variable. */
      document.write("String Length : ", randStr.length + "<br/>"); // remember that when we count the string length we include the spaces

      /* The .indexOf() method returns
      the position of the first
      occurrence of a specified
      value in a string. In this case
      "goes" starts at the 19 place of our string */
      document.write("Index for \"goes\" : ", randStr.indexOf("goes"), "<br/>");//Remember: when finding the index, begin the count with 0

      //Return the value using a start and end index with the slice() method.
      /* The .slice() method extracts
      parts of a string and returns
      the extracted parts in a new string. */
      //in this case the slice starts at 19 and ends at 23.
      document.write(randStr.slice(19, 23) + "<br/>");

      //Return everything after the start index
      document.write(randStr.slice(19) + "<br/>");

      //Return the value using the start index and length with the substr() method.
      /* The .substr() method extracts
      parts of a string, beginning at the
      character at the specified position
      and returns the specified
      number of characters. */
      //in this case the .substr() method
      // eturn from 19 up till 4 characters after
      document.write(randStr.substr(19, 4) + "<br/>");

      //Replace a string with the .replace() method.
      document.write(randStr.replace("and on", "forever") + "<br/>"); //"forever" replaces "and on" in the randStr variable.

      //Get chracter at an index with the .charAt() method.
      /* In this case .chart(2) returns
      the 2nd character of the string: l */
      document.write("At Index 2 : ", randStr.charAt(2) + "<br/>");
      /* In this case .chart(4) returns
      the 2nd character of the string: n */
      document.write("At Index 4 : ", randStr.charAt(4) + "<br/>");
      /* In this case .chart(6) returns
      the 2nd character of the string: " " *///a blank space
      document.write("At Index 6 : ", randStr.charAt(6) + "<br/>");
      /* In this case .chart(10) returns
      the 2nd character of the string: i */
      document.write("At Index 10 : ", randStr.charAt(10) + "<br/>");
      /* In this case .chart(19) returns
      the 2nd character of the string: g */
      document.write("At Index 19 : ", randStr.charAt(19) + "<br/>");

      //Split a string into an array with the .split() method.
      var randStrArray = randStr.split(" ");

      // Trim white space with .trim().
      randStr = randStr.trim();

      // convert all the letters in a string to
      // UPPERCASE letters using the the .toUpperCase() method.
      document.write(randStr.toUpperCase() + " FOREVER. " + "<br/>")

      // convert to lowercase with the .toLowerCase() method.
      document.write(randStr.toLowerCase() + " forever " + "<br/>");

      //styling with JS
      var strToStyle = "Random String";

      document.write("Big : ", strToStyle.big(), "<br/>");
      document.write("Bold : ", strToStyle.bold(), "<br/>");
      document.write("Font Color : ", strToStyle.fontcolor("pink"), "<br/>");
      document.write("Font Size : ", strToStyle.fontsize("8em"), "<br/>");
      document.write("Italics : ", strToStyle.italics(), "<br/>");
      document.write("Jesus' Github : ", strToStyle.link("http://github.com/jesushilariohernandez"), "<br/>");
      document.write("Small : ", strToStyle.small(), "<br/>");
      document.write("Strike : ", strToStyle.strike(), "<br/>");
      document.write("Sub : ", strToStyle.sub(), "<br/>");
      document.write("Sup : ", strToStyle.sup(), "<br/>");

      //...CONDITIONALS!....///
      //Relational Operators : == , != , > , < , >= , <=
      // === : Equal value and type
      // Logical Operators : && || !

      var age = prompt("What is your age?");

      if ((age >= 5) && (age <= 6)){
        document.write("Go to Kindergarten<br/>");
      } else if (age > 18){
        document.write("Go to College<br/>");
      } else {
        document.write("Go to Grade ", age - 5, "<br/>");
      }

      //the || conditional will return true if either the left or the right value of the || is true.
      document.write("true || false = ", true || false, "<br/>");
      document.write("false || false = ", false || false, "<br/>");
      document.write("true || true = ", true || true, "<br/>");

      // the ! conditional converts the boolean to its opposite
      // !true means not true. !false means not false
      document.write("!true = ", ! true, "<br/>");
      document.write("!false = ", ! false, "<br/>");

      document.write("\"5\" == 5 = ", ("5" == 5), "<br/>");
      document.write("\"5\" === 5 = ", ("5" === 5), "<br/>");

      ///.....SWITCH STATEMENTS!....//// switch statements are used
      //whenever you have a limited number of
      //potential options for a value
      var age = prompt("What is your age again?");
      switch(age){
        case 5 :
        case 6 :
          document.write("Go to Kindergarten <br/>");
          break;

        case 7 :
          document.write("Go to 1st Grade <br/>");
          break;

        default :
          document.write("Subtract 5 from your age <br/>");
      }

      // The TERNARY OPERATOR oassigns a value based on a conditions
      // (condition) ? ifTrue : ifFalse
      var canIVote = (age >= 18) ? true : false;

      document.write("Can I Vote : ", canIVote , "<br/>");

      ///...LOOPING!....////
      //looping is used anytime you want to perform a calculation
      //a number of times as long as a condition is true

      // WHILE LOOPS as long as a condition is true
      var i = 1;

      while(i <= 10){
        document.write(i + "<br/>");
        i++;

      }

      //DO WHILE is used when you must go through the loop at least once
      do{
        var guess = prompt("Guess a number between 1 and 20");
      } while(guess != 15)

      alert("You guessed it! 15 was a number");

      //FOR LOOP
      //A for loop is 100% self-contained looping structure. Instead of having the value outside of the loop, everything goes inside!
      for(j = 0; j <= 20; j++){

        //if j is divisible by 2 then skip back to the top of the loop
        if((j % 2) == 0){
          continue; //means we want to stop everything else that follows in the for loop jump back up to the loop, incement the value of j and continue on with the loop structure
        }

        // if j is equal to 15 break completely out of the loop
        if(j === 15){
          break;
        }
        document.write (j, "<br/>")
      }

      document.write("<br/>");

      var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};

      //FOR IN cycles through an enumerable properties of an object
      for(k in customer){
        document.write(customer[k], "<br/>");
      }

      document.write("<br/>");

      var customer = {name : "Johnny Jo", address : "432 Grand", balance : 20.20};

      for(i in customer){
        document.write(customer[i], "<br/>")
      }

      //...ARRAYS!...///
      //Arrays have variable sizes and can contain multiple types in JS
      var CrashTest = ["Test Dummy", "123 Grand", 1220.545];

      document.write("<br/>");
      //Accessing the first array item
      document.write("Index 1: ", CrashTest[0], "<br/>");
      document.write("Index 2: ", CrashTest[1], "<br/>");
      document.write("Index 3: ", CrashTest[2], "<br/>");

      //adding an item to an array
      CrashTest[3] = "Grand Impala";
      document.write("Index 4: ", CrashTest[3], "<br/>");

      //Overwriting index 2 and fitting everything else after index 2 without
      //overwritting (Put 0 for second parameter to not overwrite)
      CrashTest.splice(2, 1, "Los Angeles", "CA");

      //Deleting the 4th index item
      CrashTest.splice(4, 1);

      //Covert an array into a string (Also use toSTring())
      document.write("Array: ", CrashTest.valueOf(),  "<br/>");
      document.write("Array: ", CrashTest.toString(),  "<br/>");

      //Covert an array into a string with separator
      document.write("Array: ", CrashTest.join(", "), "<br/>");

      //deleting an index
      delete CrashTest[3];
      document.write(CrashTest , "<br/>");

      //sorting an array (reverse() for reverse sort)
      //This works for sorting strings
      CrashTest.reverse();
      document.write(CrashTest, "<br/>");

      CrashTest.sort();//based of off numerical/alphabetical sorting
      document.write(CrashTest, "<br/>");
      //Sorting numbers
      var numbers = [4, 3, 9, 1, 20, 43];

      //Ascending sort return x - y
      numbers.sort(function(x, y){ return x - y });
      document.write("Num Array: ", numbers.toString(), "<br/>");

      //Descending sort return y - x
      numbers.sort(function(x, y){ return y - x });
      document.write("Num Array: ", numbers.toString(), "<br/>");

      //combining Arrays
      var combineArray = numbers.concat(CrashTest);
      document.write(combineArray, "<br/>");
      document.write(combineArray.sort(), "<br/>");

      //Removing the last item
      CrashTest.pop();

      //adding items to the end
      CrashTest.push("34cal", "TX");

      //Deleting the first item
      CrashTest.shift();

      //Adds item to the first index
      CrashTest.unshift("Jesse James");

      for(var i = 0; i < CrashTest.length; i++){
        document.write(CrashTest[i], "<br/>");
      }

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

      document.write("In Array Test #1: ", inArray(randArray, 4), "<br/>"); // this statement returns TRUE because 4 is inside randArray.

      document.write("In Array Test #2: ", inArray(randArray, 6), "<br/>"); // this statement returns FALSE because 6 is not inside randArray.

      document.write("In Array Test #3: ", inArray(randArray, 54), "<br/>");
      document.write("In Array Test #4: ", inArray(randArray, 3), "<br/>");

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

      document.write("2 * 35 = ", multiply(times2, 35), "<br/><br/>");

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

      //Recursive function
      function factorial(num){
        if(num <= 1){
          return 1;
        } else{
          return num * factorial(num - 1);
        }
      }
      document.write("Factorial of 4 : ", factorial(4), "<br/>");
