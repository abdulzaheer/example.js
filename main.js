
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
      document.write("Max Num = ", Number.MAX_VALUE, "<br/>");
      //Here we'll figure out the minimum number javascript can hold.
      document.write("Min Num = ", Number.MIN_VALUE, "<br/>");
