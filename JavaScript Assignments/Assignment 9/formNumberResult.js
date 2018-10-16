function formConstructor (inputype) {
  this.inputInitialValue = inputype;
  this.inputValue = document.getElementById(this.inputInitialValue);
}

window.onload = function() {
  var numberField = new formConstructor("numberField"),
  result = new formConstructor("result"),
  submitForm = document.getElementById('myform');

  numberField.inputValue.addEventListener('blur', function (){
    if(isNaN(numberField.inputValue.value))
    {
      result.inputValue.value = false;
    }
    else if(numberField.inputValue.value == "") {
      result.inputValue.value = false;
    }
    else
    {
      result.inputValue.value = true;
    }
  });

  submitForm.addEventListener('submit', function(event){
    if(numberField.inputValue.value == "" || isNaN(numberField.inputValue.value)) {
      event.preventDefault();
      alert("Form will submit on numeric value only");
    }
  });
}
