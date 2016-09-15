//...STRINGS!....
//remember: start counting with 0 :)
var randStr = "A long " + "string that " + "goes on and on! ";

document.write("The string within randStr is: ", randStr, "<br/>")

/* caltulating String length by
adding the .length() property
to the end of a variable. */
document.write("randStr string Length is: ", randStr.length + "<br/>"); // remember that when we count the string length we include the spaces

/* The .indexOf() method returns
the position of the first
occurrence of a specified
value in a string. In this case
"goes" starts at the 19 place of our string */
document.write("The index for \"goes\" is: ", randStr.indexOf("goes"), "<br/>");//Remember: when finding the index, begin the count with 0

//Return the value using a start and end index with the slice() method.
/* The .slice() method extracts
parts of a string and returns
the extracted parts in a new string. */
//in this case the slice starts at 19 and ends at 23.
document.write("The result using .slice(19,23) is: ", randStr.slice(19, 23) + " ...because the slice starts at character 19 and ends on 23.<br/>");

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
