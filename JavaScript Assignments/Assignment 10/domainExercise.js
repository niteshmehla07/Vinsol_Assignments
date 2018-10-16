function formConstructor (inputype) {
  this.inputInitialValue = inputype;
  this.inputValue = document.getElementById(this.inputInitialValue);
}

formConstructor.prototype.urlExtraction = function() {
  var domainExtract = this.inputValue.value.match(/:\/\/(www[0-9]?\.)?([^/:]+)/i);
  var domainSubdomain = domainExtract[2];
  var parts = domainSubdomain.split('.').reverse();
  var domain = parts[1] + "." + parts[0];
  if(parts.length > 2)
  {
    var subdomain = parts[2];
    alert("Subdomain: " + subdomain + "\nDomain: " + domain);
  }
  else {
    alert("Domain: " + domain);
  }
}

window.onload = function() {
  var urlExtraction = new formConstructor("url"),
  submitForm = document.getElementById('myform');

  submitForm.addEventListener('submit', function(event){
    urlExtraction.urlExtraction();
  });
}
