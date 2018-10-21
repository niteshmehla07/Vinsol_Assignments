//WeekdayManager class
function WeekdayManager(daysCheck, noneCheck) {
  this.selectedDays = [];
  this.daysCount = 0;
  this.daysCheck = document.getElementsByName(daysCheck);
  this.noneCheck = document.getElementById(noneCheck);
  this.init();
}

//init method of WeekdayManager
WeekdayManager.prototype.init = function () {
  this.bindEvent();
};

//bindEvent method to perform event handling
WeekdayManager.prototype.bindEvent = function () {
  var _this = this;

  for(var i=0; i<this.daysCheck.length; i++)
  {
    this.daysCheck[i].addEventListener('change', function() {
      _this.weekdayCheck(this)
    });
  }

  this.noneCheck.addEventListener('change', function() {
    _this.noneDayCheck()
  });
};

WeekdayManager.prototype.weekdayCheck = function (evt) {
  if (evt.checked == true) {
    this.checkWeekday(evt);
  } else {
    this.uncheckWeekday(evt);
  }
}

//noneDayCheck method call when user click on checkbox 'none'
WeekdayManager.prototype.noneDayCheck = function () {
  for(var i=0; i<this.daysCheck.length; i++) {
    this.daysCheck[i].checked = false;
  }
  this.selectedDays = [];
}

//checkWeekday method to check the checkboxes
WeekdayManager.prototype.checkWeekday = function (evt) {
  this.noneCheck.checked = false;
  this.selectedDays.push(evt.value);
  var length = this.selectedDays.length;
  if(length > 3) {
    evt.checked = false;
    this.selectedDays.pop();
    this.showWeekdays();
  }
};

//uncheckWeekday method to uncheck the checkboxes
WeekdayManager.prototype.uncheckWeekday = function (evt) {
  var indexOfUnchecked = this.selectedDays.indexOf(evt.value);
  this.selectedDays.splice(indexOfUnchecked,1);
};

WeekdayManager.prototype.showWeekdays = function () {
  alert("Only 3 days can be selected. You have already selected " + this.selectedDays[0] + ", " +
  this.selectedDays[1] + " and " + this.selectedDays[2]);
};

//WeekdayManager class object
window.onload = function() {
  var weekdayManager = new WeekdayManager('checkWeekday[]','checkNone');
}
