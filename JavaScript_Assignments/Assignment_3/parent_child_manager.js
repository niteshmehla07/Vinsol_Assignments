//ParentChildManager class
function ParentChildManager (parent) {
  this.parentSelected = document.getElementsByName(parent);
  this.childSelectedDataChild = document.querySelectorAll('[data-child]');
  this.parentBlockID;
  this.childSelected;
  this.childDisplayDiv;
  this.childDisplayClass;
}

ParentChildManager.prototype.init = function () {
  this.bindEvents();
};

ParentChildManager.prototype.parentChildDetails = function (parentBlock) {
  this.parentBlockID = parentBlock.getAttribute("id"),
  this.childSelected = document.querySelectorAll('[data-parent-id='+ this.parentBlockID +']'),
  this.childDisplayDiv = document.querySelector('[data-parent-div='+ this.parentBlockID +']'),
  this.childDisplayClass = document.getElementById(parentBlock.getAttribute("id") + "Checkbox");
};

//bindEvents method to call click event when user click on parent checkbox
ParentChildManager.prototype.bindEvents = function () {
  var _this = this;

  for(var i=0; i<this.parentSelected.length; i++) {
    this.parentSelected[i].addEventListener('click', function() {
      _this.checkAllChild(this);
    })
  }
  for(var i=0; i<this.childSelectedDataChild.length; i++) {
    this.childSelectedDataChild[i].addEventListener('click', function() {
      _this.getChildsParentDetail(this);
    })
  }
};

//checkAllChild method to check all childs of parent checkbox and perform click event if child is clicked
ParentChildManager.prototype.checkAllChild = function(parentBlock) {

  var _this = this;
  this.parentChildDetails(parentBlock);

  if(parentBlock.checked == true) {
    this.childDisplayDiv.style.display = "block";
    this.childDisplayClass.scrollIntoView();
  } else {
    this.childDisplayDiv.style.display = "none";
  }

  for(var i=0; i<this.childSelected.length; i++) {
    this.childSelected[i].checked = parentBlock.checked;
  }
}

ParentChildManager.prototype.getChildsParentDetail = function (childBlock) {
  var parentNodeOfSelectedChild = childBlock.parentNode.parentNode.childNodes[1];

  this.parentChildDetails(parentNodeOfSelectedChild);

  this.childChange(childBlock, this.childSelected, this.childDisplayDiv, parentNodeOfSelectedChild);
};

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
  parentChildManager.init();
}
