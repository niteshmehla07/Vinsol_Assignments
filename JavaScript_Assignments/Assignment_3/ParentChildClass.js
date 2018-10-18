function ParentChildClass (parentType,childType,childClass,divID) {
  this.parentValueInitial = parentType;
  this.childValueInitial = childType;
  this.childClassInitial = childClass;
  this.divIdInitial = divID;
  this.parentValue = document.getElementById(this.parentValueInitial);
  this.childValue = document.getElementsByName(this.childValueInitial);
  this.childClass = document.getElementById(this.childClassInitial);
  this.divId = document.getElementById(this.divIdInitial);
}

ParentChildClass.prototype.checkAllChild = function() {
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

ParentChildClass.prototype.childChange = function(selectedChildRef) {
  if(selectedChildRef.checked == true)
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
  return 0;
}

function parentClickEvent(parentChildObj) {
  parentChildObj.parentValue.addEventListener("change", function() { parentChildObj.checkAllChild() });
}

function childClickEvent(parentChildObj,childObj) {
  childObj.addEventListener("change", function() { parentChildObj.childChange(this) });
}

window.onload = function() {
  var checkBoxColor = new ParentChildClass("parent-1","child-1[]","colorChild","colorCheckbox"),
  checkBoxMovie = new ParentChildClass("parent-2","child-2[]","movieChild","movieCheckbox"),
  checkBoxDrink = new ParentChildClass("parent-3","child-3[]","drinkChild","drinkCheckbox"),
  checkBoxBike = new ParentChildClass("parent-4","child-4[]","bikesChild","bikesCheckbox");

  var parentCheckBoxArray = [checkBoxColor, checkBoxMovie, checkBoxDrink, checkBoxBike];

  for(var i=0; i<parentCheckBoxArray.length; i++) {
    parentClickEvent(parentCheckBoxArray[i]);
    for(var j=0; j<parentCheckBoxArray[i].childValue.length; j++)
    {
      childClickEvent(parentCheckBoxArray[i], parentCheckBoxArray[i].childValue[j]);
    }
  }
  
}
