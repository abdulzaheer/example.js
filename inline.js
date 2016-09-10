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
