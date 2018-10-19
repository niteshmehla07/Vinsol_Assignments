//Global RegExp
var constantRegex = {
  regexUrl : /:\/\/(www[0-9]?\.)?(([\w.]+)\.)?([a-z.]+\.[a-z.]{2,4})/i
}

//DomainManager class definition
function DomainManager (url,form) {
  this.url = document.getElementById(url);
  this.form = document.getElementById(form);
  this.init();
}

//Class initializer
DomainManager.prototype.init = function () {
  this.bindEvent();
};

//bindEvent of class to call event listeners
DomainManager.prototype.bindEvent = function () {
  var _this = this;

  this.form.addEventListener('submit', function(event){
    _this.checkUrlValidity(event);
  });
};

//Method to check url validity
DomainManager.prototype.checkUrlValidity = function(evt) {
  var getDomainSubDomain = constantRegex.regexUrl.test(this.url.value);
  if(!getDomainSubDomain) {
    alert("Wrong Url Entered! Please Enter a new url");
    evt.preventDefault();
  } else {
    this.findDomainSubDomain();
  }
};

//To print subdomain and domain
DomainManager.prototype.findDomainSubDomain = function () {
  if(RegExp.$2) {
    alert('Subdomain: ' + RegExp.$3 + '\nDomain: ' + RegExp.$4);
  } else {
    alert('Domain: ' + RegExp.$4);
  }
};

//Onload method to declare DomainManager class object
window.onload = function() {
  var domainManager = new DomainManager('url','myform');
};
