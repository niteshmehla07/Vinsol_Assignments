//Constructor to initialize firstname and lastname
function formConstructor (firstName, secondName, textId) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.textId = textId;
  this.textIdValue = document.getElementById(this.textId);
}

//Method of formConstructor to alert and display result
formConstructor.prototype.alertValue = function() {
  alert("Hello " + this.firstName + " " + this.secondName);
  this.textIdValue.innerHTML = "Hello " + this.firstName + " " + this.secondName;
}

window.onload = function() {
  var firstName = null;
  var secondName = null;

  //Function to get value of Firstname and Lastname
  getFirstName();
  getSecondName();

  //Object of formConstructor
  var name = new formConstructor(firstName, secondName, 'textOutput');
  name.alertValue();

  //Function definition to get first name
  function getFirstName() {
    firstName = prompt("Enter first name: ","");
    if(firstName == null)
      getFirstName();
    else {
      firstName = firstName.trim();
      if(firstName == "")
        getFirstName();
    }
  }

  //Function definition to get first name
  function getSecondName() {
    secondName = prompt("Enter last name: ","");
    if(secondName == null)
      getSecondName();
    else {
      secondName = secondName.trim();
      if(secondName == "")
        getSecondName();
    }
  }

}

/*function getUsername() {
  var firstName = null;
  var secondName = null;
  getFirstName();
  getSecondName();
  alert("Hello " + firstName + " " + secondName);
  document.getElementById('textOutput').innerHTML = "Hello " + firstName + " " + secondName;

  function getFirstName() {
    firstName = prompt("Enter first name: ","");
    if(firstName == null)
      getFirstName();
    else {
      firstName = firstName.trim();
      if(firstName == "")
        getFirstName();
    }
  }
  function getSecondName() {
    secondName = prompt("Enter last name: ","");
    if(secondName == null)
      getSecondName();
    else {
      secondName = secondName.trim();
      if(secondName == "")
        getFgetSecondNameirstName();
    }
  }
}
*/
