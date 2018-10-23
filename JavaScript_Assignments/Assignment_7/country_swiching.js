//CountrySwiching class definition
function CountryManager(countryManagerObj) {
  this.countryFromSelector = countryManagerObj.countryFromSelector;
  this.countryToSelector = countryManagerObj.countryToSelector;
  this.addButton = countryManagerObj.addButton;
  this.removeButton = countryManagerObj.removeButton;
}

//CountrySwiching initializer method
CountryManager.prototype.init = function () {
  this.bindEvent();
};

//CountrySwiching bindEvent method to call DOM events
CountryManager.prototype.bindEvent = function () {
  var _this = this;

  this.addButton.addEventListener('click', function() {
    _this.moveCountry(_this.countryFromSelector, _this.countryToSelector);
  });

  this.removeButton.addEventListener('click', function() {
    _this.moveCountry(_this.countryToSelector, _this.countryFromSelector);
  });
};

CountryManager.prototype.moveCountry = function (fromSelector, toSelector) {
  var selectedCountry = fromSelector.options[fromSelector.selectedIndex];
  fromSelector.remove(selectedCountry.index);
  var newCountryAdd = new Option(selectedCountry.text,selectedCountry.value);
  toSelector.add(newCountryAdd,null);
};

//CountrySwiching class object declaration
window.onload = function() {
  var countryManagerObj = {
    countryFromSelector : document.querySelector('[data-country=from]'),
    countryToSelector : document.querySelector('[data-country=to]'),
    addButton : document.querySelector('[data-button=add]'),
    removeButton : document.querySelector('[data-button=remove]')
  };
  var countryManager = new CountryManager(countryManagerObj);
  countryManager.init();
}
