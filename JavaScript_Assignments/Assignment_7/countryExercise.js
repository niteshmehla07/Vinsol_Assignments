function add() {
  var selectedCountryBoxOne = document.getElementById('countryOneBox');
  var selectedCountryBoxTwo = document.getElementById('countryTwoBox');
  var selectedCountry = selectedCountryBoxOne.options[selectedCountryBoxOne.selectedIndex];
  selectedCountryBoxOne.remove(selectedCountry.index);
  var newAdd = new Option(selectedCountry.text,selectedCountry.value);
  selectedCountryBoxTwo.add(newAdd,null);
}

function remove() {
  var selectedCountryBoxOne = document.getElementById('countryOneBox');
  var selectedCountryBoxTwo = document.getElementById('countryTwoBox');
  var selectedCountry = selectedCountryBoxTwo.options[selectedCountryBoxTwo.selectedIndex];
  selectedCountryBoxTwo.remove(selectedCountry.index);
  var newAdd = new Option(selectedCountry.text,selectedCountry.value);
  selectedCountryBoxOne.add(newAdd,null);
}
