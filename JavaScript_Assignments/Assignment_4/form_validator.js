//Constant Regexp
var constantRegex = {
  regexUrl : /(http[s]?\:\/\/)?([w]{3}.)?((([\w]+)?\.)*)?([a-z.]+\.[a-z.]{2,4})([\/][\w%.-]+)*(\/)?([#][\w9%-]+)?([\?][\w%.]+\=[\w%]+)?(&[\w%.]+\=[\w%.]*)*$/i,
  regexMail : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
}

//FormValidator class definition
function FormValidator(loginId, emailId, name, homePage, aboutme, checkNotification, form) {
  this.loginId = document.getElementById(loginId);
  this.emailId = document.getElementById(emailId);
  this.name = document.getElementById(name);
  this.homePage = document.getElementById(homePage);
  this.aboutMe = document.getElementById(aboutme);
  this.checkNotification = document.getElementById(checkNotification);
  this.form = document.getElementById(form);
  this.flag = 0;
  this.init();
}

//FormValidator class initializer
FormValidator.prototype.init = function () {
  this.bindEvent();
};

//FormValidator class bindEvent method to perform action on eventListeners
FormValidator.prototype.bindEvent = function (event) {
  var _this = this;
  this.form.addEventListener('submit', function() {
    _this.validateEmptyField();
    _this.validateEmailId();
    _this.validateUrl();
    _this.validateAboutMeField();
    _this.checkNotificationField();

    if(this.flag == 1) {
      event.preventDefault();
    }
  })
};

//Method to check validity of Empty fields
FormValidator.prototype.validateEmptyField = function() {
  var formField = [this.loginId, this.emailId, this.name, this.homePage, this.aboutMe];

  for(var i=0; i<formField.length; i++) {
    if(formField[i].value == "") {
      alert(formField[i].id + " can't be empty");
      this.flag = 1;
    }
  }
}

//Method to check email validity using regexp
FormValidator.prototype.validateEmailId = function () {
  if(!constantRegex.regexMail.test(this.emailId.value)) {
    alert("Enter valid email ID");
    this.flag = 1;
  }
};

//Method to check url validity using regexp
FormValidator.prototype.validateUrl = function () {
  if(!constantRegex.regexUrl.test(this.homePage.value)) {
    alert("Enter valid URL");
    this.flag = 1;
  }
};

//Method to check length of aboutMe field
FormValidator.prototype.validateAboutMeField = function () {
  if(this.aboutMe.value.length < 50) {
    alert("Your introduction should be minimum of 50 characters");
    this.flag = 1;
  }
};

//Method to check whether notification is checked or not
FormValidator.prototype.checkNotificationField = function () {
  if(this.checkNotification.checked == false) {
    alert("Please check Receive notification");
    this.flag = 1;
  }
};

//Declaration of FormValidator class object
window.onload = function() {
  var formValidator = new FormValidator('Login Id','email Id','Name','Home page','aboutme','notification','myform');
};
