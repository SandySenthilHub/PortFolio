// //tab6
var tabskills = document.getElementsByClassName('tabSkill');
var skillCon = document.getElementsByClassName('sk');

opentabsk = (name) => {
for (tabskill of tabskills) {
tabskill.classList.remove('acti')
}
for (skillContact of skillCon) {
skillContact.classList.remove('act')
}

event.currentTarget.classList.add('acti')
document.getElementById(name).classList.add('act')
}


// //tab7

var tablinks = document.getElementsByClassName('tabLinks');
var id = document.getElementsByClassName('ID')

opentab = (tabname) => {
for (tablink of tablinks) {
tablink.classList.remove("active")
}
for (ids of id) {
ids.classList.remove('activeTab')
}
event.currentTarget.classList.add("active")
document.getElementById(tabname).classList.add('activeTab')

}

// nav
var mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {

"use strict";

mainListDiv.classList.toggle("show");
mediaButton.classList.toggle("active");
};