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

//deleting a property
delete cust1.auto;

//Cycling through all the properties of an object, using a for loop with an if statement nested within.
for (var prop in cust1){//for loop
  if (cust1.hasOwnProperty(prop)){//if statement
    document.write(prop, "<br/>");//doc write
  }
}
