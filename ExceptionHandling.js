//THROUGH exception handling we can catch and manage errors rather than
//crashing by surrounding problem code in a try block
//and handling it in a catch block

var custArray = ["Tom", "Bob", "Sally", "Sue"];

var getCust = function(index){
  if(index > custArray.length){
    throw new RangeError("Index must be >= 0 and <= " + custArray.length);
  } else {
    return custArray[index];
  }
}

try {
  document.write("Customer: ", getCust(5), "<br/>");
}
catch(ex){
  if(ex instanceof RangeError){
    document.write(ex.message + "<br/>");
  }
}
