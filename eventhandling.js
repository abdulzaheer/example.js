// a link to all of the different types of EVENT HANDLING javascript
//http://www.w3schools.com/jsref/dom_obj_event.asp


///...EVENT HANDLING!...
function openAlert(message){
  alert(message);
}

function getChar(event){

  //event.which returns the key or mouse
  // button that was clicked
  if (event.which == null){ //null means: no value

    //return the char if not a special character
    return String.fromCharCode(event.keyCode); //IE
  } else if (event.which!=0 && event.charCode!=0){
    return String.fromCharCode(event.which); //Other Browsers
  } else {
    return null; //if user clicked on some special character we can't work with
  }
}

document.getElementById('charInput').onkeypress = function(event){
  var char = getChar(event || window.event)//older versions of IE
  if (!char) return false;//if user clicked on some special character we can't work with

  document.getElementById('keyData').innerHTML = char + " was clicked";
  return true;
}

//change text whenever the input gains focus
document.getElementById('charInput').onfocus = function(event){
  document.getElementById('keyData').innerHTML = "Input Gained Focus";
}

//Change text when the input loses Focus
document.getElementById('charInput').onblur = function(event){
  document.getElementById('keyData').innerHTML = "Input Lost Focus";
}

//Change the text when text is selected
document.getElementById('charInput').onselect = function(event){
  document.getElementById('keyData').innerHTML = "Text Selected";
}

//Add a listener that triggers a function when the browser is resized.
window.addEventListener("resize", browserResized);

function browserResized(){
  document.getElementById('keyData').innerHTML = "I've been resized.";
}

//Make an image show when you click on it button
document.getElementById('logoButton').onclick = function(event){

  //Change the class for the image
  document.getElementById('logo').className = "show";
}

//Make an image invisible when you click on it
document.getElementById('logo').onclick = function(event){

  //Change the class for the image
  document.getElementById('logo').className = "hidden";
}

//Change image source with .onmouseover
document.getElementById('logo').onmouseover = function(event) {
  document.getElementById('logo').src = "printlogoside.png";
  document.getElementById('mouseInput').value = "Mouse took on."
}

//Change image source with .onmouseout
document.getElementById('logo').onmouseout = function(event) {
  document.getElementById('logo').src = "printlogo.png";
  document.getElementById('mouseInput').value = "Mouse took off!";
}

//Get mouse X and Y coordinates
document.body.onmousemove = function(e){
  e = e || window.event; //for IE

  //Get pageX, PageY: Mouse position relative to the html document
  var pageX = e.pageX;
  var pageY = e.pageY;
  if (pageX === undefined){

    //clientX, clientY: Mouse position relative to the browsers viewport
    //scrollLeft, scrollTop: Pixels an element is scrolled left or
    //from top
    pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    pageY = e.xlientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  document.getElementById('mouseX').value = pageX;
  document.getElementById('mouseY').value = pageY;
};

//Clearing all input elements
document.getElementById('clearInputs').onclick = function(event){
  var inputElements = document.getElementsByTagName('input');

  for(var i = 0; i < inputElements.length; i++){
    if(inputElements[i].type == "text"){
      inputElements[i].value = "";
    }
  }
}

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

document.write("Days till Birthday: ", tilMyBD / (1000 * 60 * 60 * 25), "<br/>")
