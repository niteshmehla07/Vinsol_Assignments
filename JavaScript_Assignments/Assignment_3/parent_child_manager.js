//ParentChildManager class
function ParentChildManager (parent) {
  this.parentSelected = document.getElementsByName(parent);
  this.init();
}

ParentChildManager.prototype.init = function () {
  this.bindEvents();
};

//bindEvents method to call click event when user click on parent checkbox
ParentChildManager.prototype.bindEvents = function () {
  var _this = this;
  for(var i=0; i<this.parentSelected.length; i++) {
    this.parentSelected[i].addEventListener('click', function() {
      _this.checkAllChild(this);
    })
  }
};

//checkAllChild method to check all childs of parent checkbox and perform click event if child is clicked
ParentChildManager.prototype.checkAllChild = function(parentBlock) {

  var parentBlockID = parentBlock.getAttribute("id"),
      childSelected = document.getElementsByName(parentBlock.getAttribute("id") + "Child"),
      childDisplayDiv = document.getElementById(parentBlock.getAttribute("id") + "Child"),
      childDisplayClass = document.getElementById(parentBlock.getAttribute("id") + "Checkbox"),
      _this = this;

  if(parentBlock.checked == true) {
    childDisplayDiv.style.display = "block";
    childDisplayClass.scrollIntoView();
  } else {
    childDisplayDiv.style.display = "none";
  }

  for(var i=0; i<childSelected.length; i++) {
    childSelected[i].checked = parentBlock.checked;
  }

  for(var i=0; i<childSelected.length; i++) {
    childSelected[i].addEventListener('click', function() {
      _this.childChange(this, childSelected, childDisplayDiv, parentBlock);
    })
  }

}

//childChange method to perform action on child click
ParentChildManager.prototype.childChange = function(childBlock, childSelected, childDisplayDiv, parentBlock) {
  if(childBlock.checked == true)
  {
    parentBlock.checked = true;
    return 0;
  }
  for(var i=0; i<childSelected.length; i++)
  {
    if(childSelected[i].checked == true)
      return 0;
  }
  parentBlock.checked = false;
  childDisplayDiv.style.display = "none";
  return 0;
}

window.onload = function() {
  var parentChildManager = new ParentChildManager("parent");
}
