function formConstructor (parentType,childType,childClass,divID) {
  this.parentValueInitial = parentType;
  this.childValueInitial = childType;
  this.childClassInitial = childClass;
  this.divIdInitial = divID;
  this.parentValue = document.getElementById(this.parentValueInitial);
  this.childValue = document.getElementsByName(this.childValueInitial);
  this.childClass = document.getElementById(this.childClassInitial);
  this.divId = document.getElementById(this.divIdInitial);
}

formConstructor.prototype.checkAllChild = function() {
  if(this.parentValue.checked == true)
  {
    this.childClass.style.display = "block";
    this.divId.scrollIntoView();
  }
  else
    this.childClass.style.display = "none";

  for(var i=0; i<this.childValue.length; i++)
    this.childValue[i].checked = this.parentValue.checked;
}

formConstructor.prototype.childChange = function() {
  if(this.checked == true)
  {
    this.parentValue.checked = true;
    return 0;
  }
  for(var i=0; i<this.childValue.length; i++)
  {
    if(this.childValue[i].checked == true)
      return 0;
  }
  this.parentValue.checked = false;
  this.childClass.style.display = "none";
}

window.onload = function() {
  var checkBoxColor = new formConstructor("parent-1","child-1[]","colorChild","colorCheckbox"),
  checkBoxMovie = new formConstructor("parent-2","child-2[]","movieChild","movieCheckbox"),
  checkBoxDrink = new formConstructor("parent-3","child-3[]","drinkChild","drinkCheckbox"),
  checkBoxBike = new formConstructor("parent-4","child-4[]","bikesChild","bikesCheckbox");

  var parentCheckBoxArray = [checkBoxColor, checkBoxMovie, checkBoxDrink, checkBoxBike];

  checkBoxColor.parentValue.addEventListener("change", function() { checkBoxColor.checkAllChild() });
  checkBoxMovie.parentValue.addEventListener("change", function() { checkBoxMovie.checkAllChild() });
  checkBoxDrink.parentValue.addEventListener("change", function() { checkBoxDrink.checkAllChild() });
  checkBoxBike.parentValue.addEventListener("change", function() { checkBoxBike.checkAllChild() });

  for(var i=0; i<checkBoxColor.childValue.length; i++)
  {
    checkBoxColor.childValue[i].addEventListener("change", function() { checkBoxColor.childChange() });
  }
  for(var i=0; i<checkBoxMovie.childValue.length; i++)
  {
    checkBoxMovie.childValue[i].addEventListener("change", function() { checkBoxMovie.childChange() });
  }
  for(var i=0; i<checkBoxDrink.childValue.length; i++)
  {
    checkBoxDrink.childValue[i].addEventListener("change", function() { checkBoxDrink.childChange() });
  }
  for(var i=0; i<checkBoxBike.childValue.length; i++)
  {
    checkBoxBike.childValue[i].addEventListener("change", function() { checkBoxBike.childChange() });
  }
/*
  for(var i=0; i<parentCheckBoxArray.length; i++)
  {
    parentCheckBoxArray[i].parentValue.addEventListener("change", function() { parentCheckBoxArray[i].checkAllChild() });
  }
*/
}
