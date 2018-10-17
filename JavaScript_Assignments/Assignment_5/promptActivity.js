//Constructor to initialize firstname and lastname
function PromptClass (firstName, secondName, textId) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.textId = textId;
  this.textIdValue = document.getElementById(this.textId);
}

//Method of PromptClass to get first name of user from prompt
PromptClass.prototype.getFirstName = function() {
  this.firstName = prompt("Enter first name: ","");
  if(this.firstName == null) {
    this.getFirstName();
  } else {
    this.firstName = this.firstName.trim();
    if(this.firstName == "") {
      this.getFirstName();
    }
  }
}

//Method of PromptClass to get last name of user from prompt
PromptClass.prototype.getSecondName = function() {
  this.secondName = prompt("Enter last name: ","");
  if(this.secondName == null) {
    this.getSecondName();
  } else {
    this.secondName = this.secondName.trim();
    if(this.secondName == "")
      this.getSecondName();
  }
}

//Method of PromptClass to alert and display result
PromptClass.prototype.showName = function() {
  alert("Hello " + this.firstName + " " + this.secondName);
  this.textIdValue.innerHTML = "Hello " + this.firstName + " " + this.secondName;
}

window.onload = function() {
  var firstName = null,
      secondName = null;

  //Object of formConstructor
  var name = new PromptClass(firstName, secondName, 'textOutput');
  name.getFirstName();
  name.getSecondName();
  name.showName();

}
