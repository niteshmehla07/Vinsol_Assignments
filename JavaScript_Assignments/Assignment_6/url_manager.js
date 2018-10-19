//Constant Regexp
var constant = {
  RegexUrl : /(http[s]?\:\/\/)?([w]{3}.)?((([\w]+)?\.)*)?([a-z.]+\.[a-z.]{2,4})([\/][\w%.-]+)*(\/)?([#][\w9%-]+)?([\?][\w%.]+\=[\w%]+)?(&[\w%.]+\=[\w%.]*)*$/i
}

//UrlManager class
function UrlManager() {
  this.url = null;
  this.init();
}

//Init method of class to perform required operation
UrlManager.prototype.init = function () {
  this.getUrl();
};

//To get Url input from user via prompt box
UrlManager.prototype.getUrl = function () {
  this.url = prompt("Enter URL: ","");
  if(this.url == null || this.url.trim() == "") {
    this.getUrl();
  } else {
    this.validateUrl();
  }
};

//To validate Url using regexp
UrlManager.prototype.validateUrl = function () {
  if(!constant.RegexUrl.test(this.url)) {
    alert("Enter valid URL");
    this.getUrl();
  } else {
    this.openUrlWindow();
  }
};

//Method to open input url in new window
UrlManager.prototype.openUrlWindow = function () {
  window.open(this.url, "_blank", "width=400, height=420");
};

//UrlManager class object
window.onload = function() {
  var urlManager = new UrlManager();
}
