// Creating a row in the table of problem description for score display
var tableRef = document.getElementsByTagName('tbody');
tableRef = tableRef[tableRef.length - 1];
var newRow = tableRef.insertRow(-1);
var newCell1 = newRow.insertCell(0);
var newCell2 = newRow.insertCell(1);
var newText1 = document.createTextNode('Score:');
var newText2;


var problem = {code: '', users_accepted: ''}, score;
problem.code = window.location.href.split('/')[4];

xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {

	// xhttp has 5 states[0..4]...on each state change this function will be called...ready state 4 indicates that request is completed
	if (xhttp.readyState == 4 && xhttp.status == 200) {

		// Scraping the number of users accepted
		problem.users_accepted = xhttp.responseText.split('<tr class="lightrow">')[1].split('<td class="text-center">', 2)[1].split('<')[0];

		// Formula used by SPOJ for the score of a problem
		score = 80.0/(40+parseInt(problem.users_accepted, 10));
		
		// Inserting the score element in the problem description table
		newText2 = document.createTextNode(score.toPrecision(2));
		newCell1.appendChild(newText1);
		newCell2.appendChild(newText2);
	}
}

xhttp.open('GET', `https://www.spoj.com/ranks/${problem.code}/`, true);
xhttp.send();
