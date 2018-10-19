//CountrySwiching class definition
function CountrySwiching(countryOne, countryTwo, addButton, removeButton) {
  this.countryOne = document.getElementById(countryOne);
  this.countryTwo = document.getElementById(countryTwo);
  this.addButton = document.getElementById(addButton);
  this.removeButton = document.getElementById(removeButton);
  this.init();
}

//CountrySwiching initializer method
CountrySwiching.prototype.init = function () {
  this.bindEvent();
};

//CountrySwiching bindEvent method to call DOM events
CountrySwiching.prototype.bindEvent = function () {
  var _this = this;

  this.addButton.addEventListener('click', function() {
    _this.addCountry()
  });

  this.removeButton.addEventListener('click', function() {
    _this.removeCountry()
  });

};

//addCountry method to move country from left select box to right
CountrySwiching.prototype.addCountry = function () {
  var selectedCountry = this.countryOne.options[this.countryOne.selectedIndex];
  this.countryOne.remove(selectedCountry.index);
  var newCountryAdd = new Option(selectedCountry.text,selectedCountry.value);
  this.countryTwo.add(newCountryAdd,null);
};

//addCountry method to move country from right select box to left
CountrySwiching.prototype.removeCountry = function () {
  var selectedCountry = this.countryTwo.options[this.countryTwo.selectedIndex];
  this.countryTwo.remove(selectedCountry.index);
  var newCountryAdd = new Option(selectedCountry.text,selectedCountry.value);
  this.countryOne.add(newCountryAdd,null);
};

//CountrySwiching class object declaration
window.onload = function() {
  var countrySwiching = new CountrySwiching('countryOneBox','countryTwoBox','add','remove');
}
