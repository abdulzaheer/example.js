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
  if (!char)
  return false;//if user clicked on some special character we can't work with

  document.getElementById('keyData').innerHTML = char + " was clicked";
  return true;
}
