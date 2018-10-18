function FormValidationClass(formName,loginId,emailId,name,homePage,aboutMe,notification) {
  this.loginId = document.forms[formName][loginId];
  this.emailId = document.forms[formName][emailId];
  this.name = document.forms[formName][name];
  this.homePage = document.forms[formName][homePage];
  this.aboutMe = document.forms[formName][aboutMe];
  this.checkNotification = document.forms[formName][notification];
}

FormValidationClass.prototype.formValidation = function() {
  var field = [this.loginId, this.emailId, this.name, this.homePage];
  for(var i=0; i<field.length; i++)
  {
    if(field[i].value == "")
    {
      alert(field[i].id + " can't be empty.");
      return false;
    }
  }

  if(this.aboutMe.value == "")  {
    alert("About me can't be empty");
    return false;
  } else if(this.aboutme.length < 50) {
    alert("Minimum length should be 50 in about me column");
    return false;
  }

  if(this.checkNotification.checked == false)
  {
    alert("Please check Receive notification");
    return false;
  }
}

window.onload = function() {
  var formObj = new FormValidationClass('myform','Login Id','email Id','Name','Home page','aboutme','notification'),
      formId = document.getElementById('myForm');

  formId.addEventListener('submit', function() {
    formObj.formValidation();
  });
}
