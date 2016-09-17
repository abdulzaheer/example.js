//-----------OO JAVASCRIPT----------!

/*The idea behind Object Oriented Programming is we are trying to modal the attributes and the capabilities of real world objects directly inside of our code*/

//Create a customer object by defining the attributes of John Smith
//The variable is a reference to the object in memory
var cust1 = {
  //defining attributes for our object, make sure to separate each with a comma
  name: "Christina Hernandez",
  street: "121 Savage Ln.",
  city: "Grand Hotel",
  state: "Waterloo",
  email: "ch@grandmaster.com",
  auto: "Century",
  balance: 899.78,
  //defining the cababilities / functions for our objects, make sure to separate each with a comma
  payDownBal: function(amtPaid){ //function for paying down balance inside of cust1 object
    this.balance -= amtPaid; //balance same as balance written two lines above
  },
  addToBal: function(amtCharged){ // function for adding to balance again inside of cust1 object
    this.balance += amtCharged; //balance same as balance written 5 lines above
  }
}; //after object is completely defined, be sure to use a semicolon at the end!


//retrieveing values stored inside of our object
document.write("Customer Name: ", cust1.name, "<br/>");
document.write("Email: ", cust1.email, "<br/>");
document.write("City: ", cust1.city, "<br/>");

//changing the value for the object
cust1.street = "321 Mowhawk";//change street
document.write("Customer street: ", cust1.street, "<br/>");
cust1.state = "Kansas";//change state
document.write("State: ", cust1.state, "<br/>");

//Adding a property to cust1
cust1.country = "KI";
document.write("Customer Counrty is: ", cust1.country, "<br/><br/>")

//Cycling through all the properties of an object, using a for loop with an if statement nested within.
for (var prop in cust1){//for loop
  if (cust1.hasOwnProperty(prop)){//if statement
    document.write(prop, "<br/>");//doc write
  }
}

//deleting a property
delete cust1.auto;

//Check if a property is in an object
document.write("<br/> Is there a name in cust1: ", "name" in cust1, "<br/>");//name
document.write("Is there a city in cust1: ", "city" in cust1, "<br/>");//city
document.write("Is there children in cust1: ", "children" in cust1, "<br/>");//children
document.write("Is there an auto in cust1: ", "auto" in cust1, "<br/><br/>");//auto

//Interacting with an object using a function
function getInfo(cust){
  return cust1.name + " lives at " +
  cust1.street + " in " +
  cust1.city + ", " +
  cust1.state + ".<br/> Her email address is " +
  cust1.email + " and she has a balance of $" +
  cust1.balance + "";
}

document.write(getInfo(cust1), "<br/><br/>"); //calling the getInfo function with cust1 passed as perameter.

//Call object methods:
cust1.payDownBal(290.50);
cust1.addToBal(10.00);

document.write(getInfo(cust1), "<br/><br/>");

// Create an object constructor
function Customer(name, street, city, state, email, balance){
  this.name = name;
  this.street = street;
  this.city = city;
  this. state = email;
  this.balance = balance;
  this.payDownBal = function(amtPaid){
    this.balance -= amtPaid;
  };
  this.addToBal = function(amtCharged){
    this.balance += amtCharged;
  };
}

var cust2 = new Customer("Sally Girl", "5654 SouthWest Block", "Grandlakes", "BS", "gtransam78@gt.com", 0.00);

cust2.addToBal(15.50);

//Define a shared prototype property for all objects
Customer.prototype.isCreditAvail = true;

//We define prototype methods that are shared by every object created
Customer.prototype.toString = function(){
  return this.name +
  " lives at " + this.street +
  " in " + this.city +
  " " + this.state +
  ".<br/> Her email is: " + this.email +
  " and she has a balance of $ " + this.balance.toFixed(2) +
  "  Is she Creditworthy : " + this.isCreditAvail;
};

document.write(cust2.toString());// the toString() method returns the value of a String object.
