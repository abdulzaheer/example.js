

///.....SWITCH STATEMENTS!....//// switch statements are used

//whenever you have a limited number of
//potential options for a value
var age = prompt("What is your age?");
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

document.write("You can vote! ", canIVote , "<br/>");
