function CountryClass(countryOne, countryTwo) {
  this.countryOne = document.getElementById(countryOne);
  this.countryTwo = document.getElementById(countryTwo);
}

CountryClass.prototype.addCountry = function () {
  var selectedCountry = this.countryOne.options[this.countryOne.selectedIndex];
  this.countryOne.remove(selectedCountry.index);
  var newCountryAdd = new Option(selectedCountry.text,selectedCountry.value);
  this.countryTwo.add(newCountryAdd,null);
};

CountryClass.prototype.removeCountry = function () {
  var selectedCountry = this.countryTwo.options[this.countryTwo.selectedIndex];
  this.countryTwo.remove(selectedCountry.index);
  var newCountryAdd = new Option(selectedCountry.text,selectedCountry.value);
  this.countryOne.add(newCountryAdd,null);
};

window.onload = function() {
  var countryObj = new CountryClass('countryOneBox','countryTwoBox'),
      addButtonEvent = document.getElementById('add'),
      removeButtonEvent = document.getElementById('remove');

  addButtonEvent.addEventListener('click', function() {
    countryObj.addCountry()
  });

  removeButtonEvent.addEventListener('click', function() {
    countryObj.removeCountry()
  });
}
