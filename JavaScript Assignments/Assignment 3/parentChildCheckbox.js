var parent1_check = document.getElementById('parent-1');
var child1_check = document.getElementsByName('child-1[]');
var parent2_check = document.getElementById('parent-2');
var child2_check = document.getElementsByName('child-2[]');
var parent3_check = document.getElementById('parent-3');
var child3_check = document.getElementsByName('child-3[]');
var parent4_check = document.getElementById('parent-4');
var child4_check = document.getElementsByName('child-4[]');

parent1_check.onchange = checkAll1;
parent2_check.onchange = checkAll2;
parent3_check.onchange = checkAll3;
parent4_check.onchange = checkAll4;

function checkAll1() {
  if(parent1_check.checked == true)
    document.getElementById('colorChild').style.display = "block";
  else
    document.getElementById('colorChild').style.display = "none";

  for(var i=0; i<child1_check.length; i++) {
    child1_check[i].checked = parent1_check.checked;
  }
}

function checkAll2() {
  if(parent2_check.checked == true)
    document.getElementById('movieChild').style.display = "block";
  else
    document.getElementById('movieChild').style.display = "none";

  for(var i=0; i<child2_check.length; i++) {
    child2_check[i].checked = parent2_check.checked;
  }
}

function checkAll3() {
  if(parent3_check.checked == true)
    document.getElementById('drinkChild').style.display = "block";
  else
    document.getElementById('drinkChild').style.display = "none";

  for(var i=0; i<child3_check.length; i++) {
    child3_check[i].checked = parent3_check.checked;
  }
}

function checkAll4() {
  if(parent4_check.checked == true)
    document.getElementById('bikesChild').style.display = "block";
  else
    document.getElementById('bikesChild').style.display = "none";

  for(var i=0; i<child4_check.length; i++) {
    child4_check[i].checked = parent4_check.checked;
  }
}

for(var i = 0; i < child1_check.length; i++) {
    child1_check[i].onchange = childChanged1;
}

for(var i = 0; i < child2_check.length; i++) {
    child2_check[i].onchange = childChanged2;
}

for(var i = 0; i < child3_check.length; i++) {
    child3_check[i].onchange = childChanged3;
}

for(var i = 0; i < child4_check.length; i++) {
    child4_check[i].onchange = childChanged4;
}

function childChanged1() {
    if (this.checked == true) {
        parent1_check.checked = true;
        return 0;
    }
    for (var i = 0; i < child1_check.length; i++) {
        if (child1_check[i].checked == true)
          return 0;
    }
    parent1_check.checked = false;
    document.getElementById('colorChild').style.display = "none";
}

function childChanged2() {
    if (this.checked == true) {
        parent2_check.checked = true;
        return 0;
    }
    for (var i = 0; i < child2_check.length; i++) {
        if (child2_check[i].checked == true)
          return 0;
    }
    parent2_check.checked = false;
    document.getElementById('movieChild').style.display = "none";
}

function childChanged3() {
    if (this.checked == true) {
        parent3_check.checked = true;
        return 0;
    }
    for (var i = 0; i < child3_check.length; i++) {
        if (child3_check[i].checked == true)
          return 0;
    }
    parent3_check.checked = false;
    document.getElementById('drinkChild').style.display = "none";
}

function childChanged4() {
    if (this.checked == true) {
        parent4_check.checked = true;
        return 0;
    }
    for (var i = 0; i < child4_check.length; i++) {
        if (child4_check[i].checked == true)
          return 0;
    }
    parent4_check.checked = false;
    document.getElementById('bikesChild').style.display = "none";
}
