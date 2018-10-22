//Constant RegExp
const RegexUrl = /(http[s]?\:\/\/)?(www[0-9]?\.)?(([\w.]+)\.)?([a-z.]+\.[a-z.]{2,4})([\/][\w%.-]+)*/i;

//DomainManager class definition
function DomainManager (userUrl,formElement) {
  this.userUrl = document.getElementById(userUrl);
  this.formElement = document.getElementById(formElement);
}

//Class initializer
DomainManager.prototype.init = function () {
  this.bindEvents();
};

//bindEvent of class to call event listeners
DomainManager.prototype.bindEvents = function () {
  var _this = this;

  this.formElement.addEventListener('submit', function(event) {
    _this.checkUrlValidity(event);
  });
};

//Method to check url validity
DomainManager.prototype.checkUrlValidity = function(event) {
  var matchResult = RegexUrl.test(this.userUrl.value);
  if(!matchResult) {
    alert("Wrong Url Entered! Please Enter a new url");
    event.preventDefault();
  } else {
    this.showDomainSubDomain();
  }
};

//To print subdomain and domain
DomainManager.prototype.showDomainSubDomain = function () {
  var subDomain = RegExp.$4;
  var domain = RegExp.$5;
  if(subDomain) {
    alert('Subdomain: ' + subDomain + '\nDomain: ' + domain);
  } else {
    alert('Domain: ' + domain);
  }
};

//Onload method to declare DomainManager class object
window.onload = function() {
  var domainManager = new DomainManager('url','myform');
  domainManager.init();
};
