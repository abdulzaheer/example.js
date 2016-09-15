

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

document.write("<br/>")//line break

//the || conditional will return true if either the left or the right value of the || is true.
document.write("true || false ...will return: ", true || false, "<br/><br/>");
document.write("false || false ...will return: ", false || false, "<br/><br/>");
document.write("true || true ...will return: ", true || true, "<br/><br/>");

// the ! conditional converts the boolean to its opposite
// !true means not true. !false means not false
document.write("!true ...will return: ", ! true, "<br/><br/>");
document.write("!false ...will return: ", ! false, "<br/><br/>");

document.write("\"5\" == 5 will return: ", ("5" == 5), "<br/><br/>");
document.write("\"5\" === 5 will return: ", ("5" === 5), "<br/><br/>");
