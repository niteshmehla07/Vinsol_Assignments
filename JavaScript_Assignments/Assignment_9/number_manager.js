//NumberManager class definition
function NumberManager (form,numberField,resultField) {
  this.form = document.getElementById(form);
  this.numberField = document.getElementById(numberField);
  this.resultField = document.getElementById(resultField);
  this.init();
}

//NumberManager class initializer
NumberManager.prototype.init = function () {
  this.bindEvent();
};

//NumberManager class bindEvent method to call DOM events
NumberManager.prototype.bindEvent = function () {
  var _this = this;
  this.numberField.addEventListener('blur', function() {
    _this.setResultField();
  });

  this.form.addEventListener('submit', function() {
    _this.submitForm(event);
  });
};

//setResultField method to set result filed value depending upon number field input
NumberManager.prototype.setResultField = function () {
  if(isNaN(this.numberField.value) || this.numberField.value.trim() == "") {
    this.resultField.value = false;
  } else {
    this.resultField.value = true;
  }
};

//submitForm method to check form validation and to perform submit event
NumberManager.prototype.submitForm = function (evt) {
  if(isNaN(this.numberField.value) || this.numberField.value.trim() == "") {
    alert("Form will submit on numeric value only");
    evt.preventDefault();
  }
};

//numberManager class object declaration
window.onload = function() {
  var numberManager = new NumberManager('myform','numberField','result');
}
