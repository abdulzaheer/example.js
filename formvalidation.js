function editNodeText(regex, input, helpId, helpMessage) //study on regex for better understadning of regex

{
  //See if the info matches the regex that was defined
  //if the wrong information was entered, warn them
  if (!regex.test(input)) {

    if (helpId != null)
      //We need to show a warning
      //Remove any warnings that may exist
      while (helpId.childNodes[0]){
        helpId.removeChild(helpId.childNodes[0]);//.removeChild() method removes a child node from the DOM
      }

      //Add new warning
      helpId.appendChild(document.createTextNode(helpMessage)); //the .createTextNode() method creates a Text Node with the specified text.

  } else {

    //if the right info was entered, then clear the help message
    if (helpId != null) {

      //remove any warnings that may exist
      while (helpId.childNodes[0]){
        helpId.removeChild(helpId.childNodes[0]); //.removeChild() method removes a child node from the DOM
      }
    }
  }
}

// inputField – ID Number for the html text box
// helpId – ID Number for the child node I want to print a warning in
function isTheFieldEmpty(inputField, helpId) {

  // See if the input value contains any text
  return editNodeText(/^[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}/, inputField.value, helpId, "Please enter a valid name.");
}


// inputField.value – Value typed in the html text box
function isAddressOk(inputField, helpId) {
  return editNodeText(/^[A-Za-z0-9\.\' \-]{5,30}$/, inputField.value, helpId, "Enter a Street (Ex.1234 Main St.)");
}


function isStateOk(inputField, helpId) {
  return editNodeText(/^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/, inputField.value, helpId, "Enter a State Code in Uppercase (Ex.NY, PA, CA)");
}


function isPhoneOk(inputField, helpId) {
  return editNodeText(/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/, inputField.value, helpId, "Enter a Phone Number (Ex.412-828-3000)");

}


function isEmailOk(inputField, helpId) {
  return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, inputField.value, helpId, "Enter an Email (Ex. derekbanas@newthinktank.com)");

}
