//Constructor to initialize firstname and lastname
function NameClass (firstName, secondName, textId) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.textId = textId;
  this.textIdValue = document.getElementById(this.textId);
}

//Method of NameClass to get first name of user from prompt
NameClass.prototype.getFirstName = function() {
  this.firstName = prompt("Enter first name: ","");
  if(this.firstName == null || this.firstName.trim() == "") {
    this.getFirstName();
  }
}

//Method of NameClass to get last name of user from prompt
NameClass.prototype.getSecondName = function() {
  this.secondName = prompt("Enter last name: ","");
  if(this.secondName == null || this.secondName.trim() == "") {
    this.getSecondName();
  }
}

//Method of NameClass to alert and display result
NameClass.prototype.showName = function() {
  alert("Hello " + this.firstName + " " + this.secondName);
  this.textIdValue.innerHTML = "Hello " + this.firstName + " " + this.secondName;
}

window.onload = function() {
  var firstName = null,
      secondName = null;

  //Object of NameClass
  var name = new NameClass(firstName, secondName, 'textOutput');
  name.getFirstName();
  name.getSecondName();
  name.showName();

}
