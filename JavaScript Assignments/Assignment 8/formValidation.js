var flag = 0;

function formConstructor (inputype) {
  this.inputInitialValue = inputype;
  this.inputValue = document.getElementById(this.inputInitialValue);
}

formConstructor.prototype.validate = function() {
  if(this.inputValue.value == "")
  {
    alert(this.inputInitialValue + " can't be empty.");
    flag = 1;
  }
  else if (this.inputInitialValue == "email Id") {
    var regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!this.inputValue.value.match(regexpEmail))
    {
      alert("Enter valid email ID");
      flag = 1;
    }
  }
  else if (this.inputInitialValue == "Home page") {
    var regexpUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if(!this.inputValue.value.match(regexpUrl))
    {
      alert("Enter valid URL");
      flag = 1;
    }
  }
  else if (this.inputInitialValue == "notification") {
    if(this.inputValue.checked == false)
    {
      alert("Please check Receive notification");
      flag = 1;
    }
  }
}

function checkFormValidity() {
  var loginid = new formConstructor("Login Id"),
  emailid = new formConstructor("email Id"),
  name = new formConstructor("Name"),
  homePage = new formConstructor("Home page"),
  aboutme = new formConstructor("aboutme"),
  notification = new formConstructor("notification");

  var formArray = [loginid, emailid, name, homePage, aboutme, notification];

  flag = 0;

  for(var i=0; i<formArray.length; i++)
  {
    formArray[i].validate();
    if(flag == 1)
      break;
  }

  if(flag == 1)
    return false;
  else
    return true;
}
