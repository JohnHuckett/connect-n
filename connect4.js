"use strict"

var winningRowCells = [];

function dropDisc(columnId){
				
if (play == true){
			
switch(columnId){
	case 1:
		if(column1 > -1){

			cells[column1] = turn; //color disc
			document.getElementById("cell"+column1).style.backgroundColor=turn;
			column1 = column1 -gridWidth;
			checkForWin();
			nextTurn();
			console.log(cells);
			break;
		}
		else break;
	case 2:
		if(column2 > 0){
			cells[column2] = turn; //color disc
			document.getElementById("cell"+column2).style.backgroundColor=turn;
			column2 = column2 -gridWidth;
			checkForWin();
			nextTurn();
			console.log(cells);
			break;
		}
		else break;
	case 3:
		if(column3 > 0){
			cells[column3] = turn; //color disc
			document.getElementById("cell"+column3).style.backgroundColor=turn;
			column3 = column3 -gridWidth;
			checkForWin();
			nextTurn();
			console.log(cells);
			break;
		}
		else break;
	case 4:
		if(column4 > 0){
			cells[column4] = turn; //color disc
			document.getElementById("cell"+column4).style.backgroundColor=turn;
			column4 = column4 -gridWidth;
			checkForWin();
			nextTurn();
			console.log(cells);
			break;
		}
		else break;
	case 5:
		if(column5 > 0){
			cells[column5] = turn; //color disc
			document.getElementById("cell"+column5).style.backgroundColor=turn;
			column5 = column5 -gridWidth;
			checkForWin();
			nextTurn();
			console.log(cells);
			break;
		}
		else break;
		case 6:
			if(column6 > 0){
				cells[column6] = turn; //color disc
				document.getElementById("cell"+column6).style.backgroundColor=turn;
				column6 = column6 -gridWidth;
				checkForWin();
				nextTurn();
				console.log(cells);
				break;
			}
		else break;
		case 7:
			if(column7 > 0){
				cells[column7] = turn; //color disc
				document.getElementById("cell"+column7).style.backgroundColor=turn;
				column7 = column7 -gridWidth;
				checkForWin();
				nextTurn();
				console.log(cells);
				break;
			}
			else break;
		}
	}
}

function checkForWin(){
	for(var cellNum=0;cellNum<cells.length;cellNum++){
		switch(cells[cellNum]){
			case "red":
				checkIntervals(cellNum);
				break;
			case "yellow":
				checkIntervals(cellNum);
				break;
		}
	}
}

function checkIntervals(cellNum){

	rowCount = 0;
	var x = cellNum;
				
	//horizontal Row
	while(cells[x]==turn){
		rowCount = rowCount +1;
		winningRowCells.push(x);
		x = x+1;
		if(rowCount == winningRowLength){
			win();
		}
	}
	winningRowCells = [];
	rowCount = 0;
	x = cellNum;

	//Vertical Row
	while(cells[x]==turn){
		rowCount = rowCount +1;
		winningRowCells.push(x);
		x = x + gridWidth;
		if(rowCount == winningRowLength){
			win();
		}
	}

	//Forward diaganol row
	winningRowCells = [];
	rowCount = 0;
	x = cellNum;
	while(cells[x]==turn){
		rowCount = rowCount +1;
		winningRowCells.push(x);
		x = x + gridWidth -1;
		if(rowCount == winningRowLength){
			//animateWinningRowCells(winningRowCells);
			win()
		}
	}

	//backward Diaganol row
	winningRowCells = [];
	rowCount = 0;
	x = cellNum;
	while(cells[x]==turn){
		rowCount = rowCount +1;
		winningRowCells.push(x);
		x = x + gridWidth +1;
		if(rowCount == winningRowLength){
			win();
		}
	}	
	winningRowCells = [];
	rowCount = 0;
}

function showDisc(columnId){
	if(play){
		document.getElementById(columnId).style.backgroundColor=turn;
		document.getElementById("myDIV").style.boxShadow = "10px 20px 30px blue";
	}
	return;			
}

function unshowDisc(columnId){
	document.getElementById(columnId).style.backgroundColor="transparent";
	return;
}

function clearAll(){
	var x = cells.length;
	for(var i=0;i<x;i++){
		document.getElementById("cell"+i).style.backgroundColor="white";
	}
}

function newGame(){
	rowCount = 0;

	column1 = 35;
	column2 = 36;
	column3 = 37;
	column4 = 38;
	column5 = 39;
	column6 = 40;
	column7 = 41;
	document.getElementById("newGameButton").style.visibility="hidden";
	play = true;
	clearAll();
	console.log(winningRowCells);
	cells = [];
}

function init(){
	document.getElementById("newGameButton").style.visibility="hidden";
	play = true;
	console.log(t)
}

function nextTurn(){
	if(turn=="yellow"){
		turn ="red";
	}
	else turn = "yellow";
}

function win() {
	play = false;
	console.log("play = "+play);
	console.log(winningRowCells);
	var targetName = "cell";
	pulseAnimation(winningRowCells,40,10,turn,20,targetName,5);
}

var play = false;
console.log(play);
var winState = true;
var gridHeight = 6;
var gridWidth = 7;
var winningRowLength = 4;
var numOfCells = 41;
var cells = new Array(numOfCells);
var turn = "red";
var rowCount = 0;

var column1 = 35;
var column2 = 36;
var column3 = 37;
var column4 = 38;
var column5 = 39;
var column6 = 40;
var column7 = 41;
var animate = true;

function stopAnimation(){
	animate = false;
};

var mainTableId = "mainTable";
var showTableId = "showTable"

var cellCount = 0;
var tableRow = "tableRow";
var tableCell = "tableCell";
var outerDiv = "shell";
var innerDiv = "cell";

function createMainTable(tableId,gridHeight,gridWidth) {
	for(var x=0;x<gridHeight;x++){
		var tr = document.createElement("tr");
    	var text = document.createTextNode("");
    	tr.setAttribute("id", tableRow+[x]);
    	tr.appendChild(text);
    	document.getElementById(tableId).appendChild(tr);

    	for(var i=0;i<gridWidth;i++){

    		var td = document.createElement("td");
    		var text = document.createTextNode("");
    		td.setAttribute("id", tableCell+[cellCount]);
    		td.appendChild(text);
    		document.getElementById(tableRow+[x]).appendChild(td);

    		var div = document.createElement("div");
    		var text = document.createTextNode("");
    		div.setAttribute("class", outerDiv);
    		div.setAttribute("id", outerDiv+[cellCount]);
    		div.appendChild(text);
    		document.getElementById(tableCell+[cellCount]).appendChild(div);

    		var div = document.createElement("div");
    		var text = document.createTextNode("");
    		div.setAttribute("class","cell");
    		div.setAttribute("id", innerDiv+[cellCount]);
    		div.appendChild(text);
    		document.getElementById(outerDiv+[cellCount]).appendChild(div);
    	
 			cellCount ++;
    	};
	};	
};

	/*
		TODO

		Function to calculate bottom row numbers (column1 ... column n)

		create showTable using createTable function

		function to add attributes to showTable

		function to animate falling discs

		interface for advanced features (grid height, grid width, winning row length)

	*/