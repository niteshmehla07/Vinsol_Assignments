//Constructor to initialize firstname and lastname
function NamingManager (displayName) {
  this.firstName = null;
  this.secondName = null;
  this.displayName = document.getElementById(displayName);
  this.init();
}

//initialize method to call required functions
NamingManager.prototype.init = function () {
  this.getFirstName();
  this.getSecondName();
  this.showName();
};

//Method of NameClass to get first name of user from prompt
NamingManager.prototype.getFirstName = function() {
  this.firstName = prompt("Enter first name: ","");
  if(this.firstName == null || this.firstName.trim() == "") {
    this.getFirstName();
  }
}

//Method of NameClass to get last name of user from prompt
NamingManager.prototype.getSecondName = function() {
  this.secondName = prompt("Enter last name: ","");
  if(this.secondName == null || this.secondName.trim() == "") {
    this.getSecondName();
  }
}

//Method of NameClass to alert and display result
NamingManager.prototype.showName = function() {
  alert("Hello " + this.firstName + " " + this.secondName);
  this.displayName.innerHTML = "Hello " + this.firstName + " " + this.secondName;
}

window.onload = function() {
  var namingManager = new NamingManager('textOutput');
}
