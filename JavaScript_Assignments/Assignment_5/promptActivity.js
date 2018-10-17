function getUsername() {
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
