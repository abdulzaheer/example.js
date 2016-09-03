
      //variable is use the word var.
      //a pop up requests info with the prompt()
      /////////var yourName = prompt("What is your name?")

      //depending on the conditions, if performs differnt actions

      //////////if(yourName != null){

        //the text is set in an HTML element with the id sayHello
        //concatenate(combine) strings with the + operator
        //////////document.getElementById("sayHello").innerHTML = "Hello " + yourName;
      ///////////} else {

        //a poput opens with a message when we use the alert() function.
        ///////////alert ("Please enter a name next time");
      /////////////}

      // VARIABLES!
      //variables can contain letter, numbers, underscores or $,
      //but cannot start with a number, or contain spaces
      //variables are case sensitive
      var myName = "Jesus";
      var myAge = 33;

      //Variables don't have a defined type
      //For instance this statement will not cause error,
      //because we are giving the variable new data
      myName = 100;

      //MATH!
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

      //Here will will use the increment (++) operation
      //to add 1 to the given number
      //putting the ++ after the number add 1 after
      document.write("randNum++ = ", randNum++, "<br/>");

      //putting the ++ before adds the number before
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

      // these are the math properties and methods that
      // javascript has available.
      document.write("Math.E = ", Math.E, "<br/>");
      document.write("Math.PI = ", Math.PI, "<br/>");
      document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
      document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
      document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
      document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
      document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
      document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
      document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
      document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");
      document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");
      document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");
      document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");
      document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), ",br/>");
