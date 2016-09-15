//Get current web page info
document.write("Current URL: ", window.location.href, "<br/>");
document.write("Current HOST: ", window.location.hostname, "<br/>"); //if using a file on your system...you will not see HOST
document.write("Current Path: ", window.location.pathname, "<br/>");

//Change site on button click
document.getElementById('goToGoogle').onclick = function(event){
  window.location.href = "http://google.com";
  //Or
  //window.location.assign("http://google.com")
}

//Go forward a page on clicking button
document.getElementById('forwardPage').onclick = function(event){
  history.forward();
}

//Go Back a page on clicking button
document.getElementById('backPage').onclick = function(event){
  history.back();
}

//Use history.go(-2) or history(2) to jump multiple pages!!!!! wow!

//reload page on button click.
document.getElementById('reload').onclick = function(event){
  window.location.reload(true);
}

//you can get all <p> tags and then target them like an array.
var pElements = document.getElementsByTagName('p');
pElements[0].style.backgroundColor = "#EFDECD";

//targeting the HTML
document.childNodes[1].style.backgroundColor = "pink";

//changing the color of the 1st child in sampDiv2
var sampDiv2 = document.getElementById('sampDiv2');
sampDiv2.childNodes[0].style.backgroundColor = "#F0FFFF";

//Style the 1st child of sampDiv2 1st child
sampDiv2.childNodes[0].childNodes[1].style.backgroundColor = "#BFAFB2";

//JavaScript can get confused by text nodes when targeting elements
//Text nodes are whitespace, which nodeType will identify with a 3
//while elements as a 1
//You can eleminate text nodes by deleting whitespace or by using a
//minimizer (lastChild and firstChild may not work)
document.write("Node Type: ", sampDiv2.childNodes[0].childNodes[0].nodeType, "<br/>");

document.write("Node Name: ", sampDiv2.childNodes[0].childNodes[1].nodeName, "<br/><br/>");

sampDiv2.childNodes[1].childNodes[2].style.backgroundColor = "#b165f4";

//Changing element attributes
var nttLogo2 = document.getElementById('logo2');

//check for attributes
document.write("Logo has alt : ", nttLogo2.hasAttribute("alt"), "<br/>");

//Change attributes
nttLogo2.setAttribute("alt", "NTT Logo2");

//Get attribute
document.write("Logo alt value: ", nttLogo2.getAttribute("alt"), "<br/><br/>");

//Get all attributes and print them
var attribList = document.getElementById('logo2').attributes;

for(i = 0; i < attribList.length; i++){
  document.write("Attribute ", i, " : ", attribList[i].nodeName, " : ", attribList[i].nodeValue, "<br/>");
}
document.write("<br/>");

//aDD a <p> tag element after setting an attribute and text
var paragraph3 = document.createElement("p");

paragraph3.setAttribute("id", "paragraph3");

paragraph3.innerHTML = " Será como árbol firmemente plantado junto a corrientes de agua,que da su fruto a su tiempo, y su hoja no se marchita;";

sampDiv2.appendChild(paragraph3);

//added another paragraph with .createElement()
var paragraph4 = document.createElement("p");
paragraph4.setAttribute("id", "paragraph3");

//Insert the element before the 1st Child using .insertBefore() method
paragraph4.innerHTML = " Cuán bienaventurado es el hombre que no anda en el consejo de los impíos, ni se detiene en el camino de los pecadores,";
sampDiv2.insertBefore(paragraph4, sampDiv2.childNodes[0]);
