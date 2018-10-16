function checkFormValidity() {
  var field = ["Login Id","email Id","Name","Home page"];
  var fieldname;
  for(var i=0; i<field.length; i++)
  {
    fieldname = field[i];
    if(document.forms['myform'][fieldname].value == "")
    {
      alert(fieldname + " can't be empty.");
      return false;
    }
  }

  var textarea = document.forms['myform']['aboutme'].value;
  if(textarea == "")  {
    alert("About me can't be empty");
    return false;
  }
  else if(textarea.length < 50) {
    alert("Minimum length should be 50 in about me column");
    return false;
  }

  var checkboxvalue = document.forms['myform']['notification'];
  if(checkboxvalue.checked == false)
  {
    alert("Please check Receive notification");
    return false;
  }
}
