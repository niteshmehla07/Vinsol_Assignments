//Class to initialize weekday elements
function WeekdayClass(daySelected, noneSelected) {
    this.weekdayValue = daySelected;
    this.noneSelected = noneSelected;
    this.selectedDays = [];
    this.dayCount = 0;
    this.weekdaySelected = document.getElementsByName(this.weekdayValue);
    this.noneOptionSelected = document.getElementById(this.noneSelected);
}

//WeekdayClass method to perform action on check events on weekdays checkboxes
WeekdayClass.prototype.weekdayCheck = function (selectedDayRef) {

      this.dayCount = 0;
      this.selectedDays = [];
      this.noneOptionSelected.checked = false;

      for(var i=0; i<this.weekdaySelected.length; i++) {
        if(this.weekdaySelected[i].checked == true) {
          this.dayCount += 1;
          this.selectedDays.push(this.weekdaySelected[i].value);
        }
      }

      if(this.dayCount > 3)
      {
        selectedDayRef.checked = false;
        this.selectedDays.pop();
        alert("Only 3 days can be selected. You have already selected " + this.selectedDays[0] + ", " +
        this.selectedDays[1] + " and " + this.selectedDays[2]);
      }
}

//noneDayCheck method is to uncheck all weekdays and check none value checkbox
WeekdayClass.prototype.noneDayCheck = function () {

  for(var i=0; i<this.weekdaySelected.length; i++)
  {
    this.weekdaySelected[i].checked = false;
  }
  this.selectedDays = [];

}

window.onload = function() {
  var weekdayClassObj = new WeekdayClass('weekdays[]','weekdaynone');

  for(var i=0; i<weekdayClassObj.weekdaySelected.length; i++)
  {
    weekdayClassObj.weekdaySelected[i].addEventListener('change', function() {
      weekdayClassObj.weekdayCheck(this)
    });
  }

  weekdayClassObj.noneOptionSelected.addEventListener('change', function() {
    weekdayClassObj.noneDayCheck()
  });
}
