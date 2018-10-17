function DomainClass (url) {
  this.urlVal = url;
  this.urlValue = document.getElementById(this.urlVal);
}

DomainClass.prototype.getUrl = function() {
  var matchUrlPattern = this.urlValue.value.match(/:\/\/(www[0-9]?\.)?([^/:]+)/i);
  var urlPattern = matchUrlPattern[2];
  return urlPattern;
}

DomainClass.prototype.getDomain = function(urlDomainSubdomain) {
  var urlSplit = urlDomainSubdomain.split('.').reverse();
  var urlDomain = urlSplit[1] + '.' + urlSplit[0];

  if(urlSplit.length > 2) {
    var urlSubDomain = urlSplit[2];
    alert('Subdomain: ' + urlSubDomain + '\nDomain: ' + urlDomain);
  } else {
    alert('Domain: ' + urlDomain);
  }
}

window.onload = function() {
  var urlValue = new DomainClass('url'),
      submitForm = document.getElementById('myform'),
      urlDomainSubdomain = null;

  submitForm.addEventListener('submit', function(event){
    urlDomainSubdomain = urlValue.getUrl();
    urlValue.getDomain(urlDomainSubdomain);
  });
}
