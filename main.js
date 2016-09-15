
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
