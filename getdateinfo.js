
//...DATE!...///
//get a date object
var curDate = new Date();

document.write("Date: ", curDate.getDate(), "<br/>");
document.write("Month: ", curDate.getMonth(), "<br/>");
document.write("Day: ", curDate.getDay(), "<br/>");
document.write("Year: ", curDate.getFullYear(), "<br/>");
document.write("Time: ", curDate.getHours(), ":", curDate.getMinutes(), ":", curDate.getSeconds(), ":", curDate.getMilliseconds(), "<br/>");

//create a date object for my birthday
var myBD = new Date("November 7, 2016");

var msForBD = myBD.getTime();
var timeNow = curDate.getTime();
var tilMyBD = msForBD - timeNow;

document.write("Days till Birthday: ", tilMyBD / (1000 * 60 * 60 * 25), "<br/><br/>")
