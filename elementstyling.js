// a link to all of the different types of ELEMENT STYLING javascript
//http://www.w3schools.com/jsref/dom_obj_event.asp

//Change background Color
document.getElementById('chgBkColor').onclick = function(event){
  document.getElementById('sampDiv').style.backgroundColor = "#EFDECD";
}

//chagne background image
document.getElementById('chgBkImg').onclick = function(event){
  document.getElementById('sampDiv').style.backgroundImage = "url('paraback.jpg')";
}

//change border style
document.getElementById('chgBorderStyle').onclick = function(event){
  document.getElementById('sampDiv').style.borderStyle = "solid";
}

//change border width
document.getElementById('chgBorderWidth').onclick = function(event){
  document.getElementById('sampDiv').style.borderWidth = "thick";
}

//change border Color
document.getElementById('chgBorderColor').onclick = function(event){
  document.getElementById('sampDiv').style.borderColor = "pink";
}
