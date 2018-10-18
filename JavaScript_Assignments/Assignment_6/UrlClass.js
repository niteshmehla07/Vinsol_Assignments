function UrlClass(url) {
  this.url = url;
}

UrlClass.prototype.getUrl = function () {
  this.url = prompt("Enter URL: ","");
  if(this.url == null || this.url.trim() == "") {
    this.getUrl();
  } else {
    var res = this.url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null) {
      alert("Enter valid URL");
      this.getUrl();
    }
    window.open(this.url, "_blank", "width=400, height=420");
  }
};

window.onload = function() {
  var url = null;
  var UrlClassObj = new UrlClass(url);
  UrlClassObj.getUrl();
}
