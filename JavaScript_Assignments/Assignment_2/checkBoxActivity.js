var checkData = new Array();

function check(weekdaycheckbox)
{
  var item = weekdaycheckbox;
  for(var i=0; i<weekdaycheckbox.length; i++)
  {
		weekdaycheckbox[i].onclick=function()
    {
      var uncheckNone = document.getElementById('none');
      uncheckNone.checked = false;
      var checkCount=0;
      checkData = [];

      for(var i=0; i<weekdaycheckbox.length; i++)
  		  if(weekdaycheckbox[i].checked == true)
      	{
          checkCount += 1;
          checkData.push(weekdaycheckbox[i].value);
        }

      if(checkCount > 3)
      {
        this.checked=false;
        checkData.pop();
  			alert("Only 3 days can be selected. You have already selected " + checkData[0] + ", " + checkData[1] + " and " + checkData[2]);
			}
		}
	}
}

function checkNone()
{
  var uncheckWeeday = document.getElementsByName('weekdays');
  for(var i=0; i<uncheckWeeday.length; i++)
  {
    uncheckWeeday[i].checked = false;
  }
  checkData = [];
}
