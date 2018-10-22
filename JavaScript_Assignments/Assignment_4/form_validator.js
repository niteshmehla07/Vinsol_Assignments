//Constant Regexp

//FormValidator class definition
function FormValidator(form) {
  this.form = document.getElementsByClassName(form)[0];
  this.requiredValidation = this.form.querySelectorAll('[data-required = true]');
  this.lengthValidation = this.form.querySelectorAll('[data-length]');
  this.emailValidation = this.form.querySelectorAll("[data-email = valid]");
  this.urlValidation = this.form.querySelectorAll("[data-url = valid]");
  this.notificationCheck = this.form.querySelectorAll("[data-notification = true]");
  this.flag = 0;
  this.init();
}

FormValidator.prototype.regexMail = /(http[s]?\:\/\/)?([w]{3}.)?((([\w]+)?\.)*)?([a-z.]+\.[a-z.]{2,4})([\/][\w%.-]+)*(\/)?([#][\w9%-]+)?([\?][\w%.]+\=[\w%]+)?(&[\w%.]+\=[\w%.]*)*$/i;
FormValidator.prototype.regexUrl = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

//FormValidator class initializer
FormValidator.prototype.init = function () {
  this.bindEvent();
};

//FormValidator class bindEvent method to perform action on eventListeners
FormValidator.prototype.bindEvent = function (event) {
  var _this = this;
  this.form.addEventListener('submit', function() {
    this.flag = 0;
    _this.validateEmptyField();
    _this.validateEmailId();
    _this.validateUrl();
    _this.validateLength();
    _this.checkNotificationField();

    if(this.flag == 1) {
      event.preventDefault();
    }
  })
};

//Method to check validity of Empty fields
FormValidator.prototype.validateEmptyField = function() {
  for(var i=0; i<this.requiredValidation.length; i++) {
    if(this.requiredValidation[i].value == "") {
      alert(this.requiredValidation[i].id + " can't be empty");
      this.flag = 1;
    }
  }
}

//Method to check email validity using regexp
FormValidator.prototype.validateEmailId = function () {
  for(var i=0; i<this.emailValidation.length; i++) {
    if(!this.regexMail.test(this.emailValidation[i].value)) {
      alert("Enter valid email ID");
      this.flag = 1;
    }
  }
};

//Method to check url validity using regexp
FormValidator.prototype.validateUrl = function () {
  for(var i=0; i<this.urlValidation.length; i++) {
    if(!this.regexUrl.test(this.urlValidation[i].value)) {
      alert("Invalid URL");
      this.flag = 1;
    }
  }
};

//Method to check length of aboutMe field
FormValidator.prototype.validateLength = function () {
  for(var i=0; i<this.lengthValidation.length; i++) {
    if(this.lengthValidation[i].value.length < this.lengthValidation[i].dataset.length) {
      alert("Your introduction should be minimum of "+ this.lengthValidation[i].dataset.length +" characters");
      this.flag = 1;
    }
  }
};

//Method to check whether notification is checked or not
FormValidator.prototype.checkNotificationField = function () {
  for(var i=0; i<this.notificationCheck.length; i++) {
    if(this.notificationCheck[i].checked == false) {
      alert("Please check Receive notification");
      this.flag = 1;
    }
  }
};

//Declaration of FormValidator class object
window.onload = function() {
  var formValidator = new FormValidator('myform');
};
