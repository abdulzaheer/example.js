//...ARRAYS!...///
//Arrays have variable sizes and can contain multiple types in JS
var CrashTest = ["George Hand", "123 Grand", 1220.545];

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
