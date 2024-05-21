/* 
   Black&#39;s Concrete Construction - JavaScript
   Filename: index.html
   
   Author: Ryan Hurd
   Date: 3/1/2018
   Final Project
*/

/* create variables */
var clickHere = document.getElementById('form');
var schedProject = document.getElementById('project');


/* click to start sections */
/*function clickHither() {
	var clickHere = document.getElementById("form");
	if (clickHere.style.display === 'none') {
		clickHere.style.display = "block";
	} else {
		clickHere.style.display = "none";
	}
}
clickHither();*/

function scheduleProject() {
	var schedProject = document.getElementById("project");
	if (schedProject.style.display === 'none') {
		schedProject.style.display = "block";
	} else {
		schedProject.style.display = "none";
	}
}
scheduleProject();




/* add event listener */
