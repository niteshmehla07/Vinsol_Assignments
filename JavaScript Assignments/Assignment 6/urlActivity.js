function getURL() {
  var urlLink = null;
  geturlLink();
  window.open(urlLink, "_blank", "width=400, height=420");

  function geturlLink() {
    urlLink = prompt("Enter URL: ","");
    if(urlLink == null)
      geturlLink();
    else {
      urlLink = urlLink.trim();
      if(urlLink == "")
      {
        alert("URL is empty. Enter valid URL");
        geturlLink();
      }
      else {
        var res = urlLink.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if(res == null)
        {
          alert("Enter valid URL");
          geturlLink();
        }
      }
    }
  }
}
