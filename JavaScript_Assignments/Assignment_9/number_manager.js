//NumberManager class definition
function NumberManager (numberObj) {
  this.form = numberObj.form;
  this.numberField = numberObj.numberField;
  this.resultField = numberObj.resultField;
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
  this.setResultField();
  if(this.resultField.value == "true") {
    console.log("Form submit successful");
  } else {
    alert("Form will submit on numeric value only");
    evt.preventDefault();
  }
};

//numberManager class object declaration
window.onload = function() {
  var numberObject = {
          form : document.querySelector('[data-form]'),
          numberField : document.querySelector('[data-input = true]'),
          resultField : document.querySelector('[data-result = true]')
        },
      numberManager = new NumberManager(numberObject);

      numberManager.init();
}
