///...LOOPING!....////

//looping is used anytime you want to perform a calculation
//a number of times as long as a condition is true

// WHILE LOOPS as long as a condition is true
var i = 1;

while(i <= 10){
  document.write(i + "<br/>");
  i++;

}

//DO WHILE is used when you must go through the loop at least once
do{
  var guess = prompt("Guess a number between 1 and 20");
} while(guess != 15)

alert("You guessed it! 15 was a number");

//FOR LOOP
//A for loop is 100% self-contained looping structure. Instead of having the value outside of the loop, everything goes inside!
for(j = 0; j <= 20; j++){

  //if j is divisible by 2 then skip back to the top of the loop
  if((j % 2) == 0){//IF statement

    continue; //means we want to stop everything else that follows in the for loop jump back up to the loop, incement the value of j and continue on with the loop structure
  }

  // if j is equal to 15 break completely out of the loop
  if(j === 15){
    break;
  }
  document.write (j, "<br/>")
}

document.write("<br/>");

var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};

//FOR IN cycles through an enumerable properties of an object
for(k in customer){
  document.write(customer[k], "<br/>");
}

document.write("<br/>");

var customer = {name : "Johnny Jo", address : "432 Grand", balance : 20.20};

for(i in customer){
  document.write(customer[i], "<br/>")
}
