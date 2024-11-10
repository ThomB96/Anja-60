/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

"use strict";

var cwp_nmsp = {};

(function(namespace) {

	namespace.redrawLayout = function(element) {

		var docFrag = document.createDocumentFragment();
		var container = null;

		var pcontainerButton = document.createElement("input");
		pcontainerButton.className = "cwp_p_button";
		pcontainerButton.type = "button";
		pcontainerButton.setAttribute("id", "cwp_p_button");
		pcontainerButton.setAttribute("value", "Show Puzzle");
		container = document.createElement("div");
		container.className = "cwp_p_container";
		container.setAttribute("id", "cwp_p_container");
		container.appendChild(pcontainerButton);
		docFrag.appendChild(container);

		container = document.createElement("div");
		container.className = "cwp_q_container";
		var h4Element = document.createElement("h4");
		h4Element.className = "cwp_h4_q";
		h4Element.setAttribute("align", "center");
		h4Element.appendChild(document.createTextNode("Questions"));
		container.appendChild(h4Element);
		container.appendChild(document.createElement("br"));
		var h5ElementAcross = document.createElement("h5");
		h5ElementAcross.className = "cwp_h5_q";
		h5ElementAcross.appendChild(document.createTextNode("Across"))
		container.appendChild(h5ElementAcross);
		var innerContainerAcross = document.createElement("div");
		innerContainerAcross.className = "cwp_q_across_container";
		innerContainerAcross.setAttribute("id", "cwp_q_across_container");
		container.appendChild(innerContainerAcross);
		var h5ElementDown = document.createElement("h5");
		h5ElementDown.className = "cwp_h5_q";
		h5ElementDown.appendChild(document.createTextNode("Down"));
		container.appendChild(h5ElementDown);
		var innerContainerDown = document.createElement("div");
		innerContainerDown.className = "cwp_q_down_container";
		innerContainerDown.setAttribute("id", "cwp_q_down_container");
		container.appendChild(innerContainerDown);
		docFrag.appendChild(container);

		container = document.createElement("div");
		container.className = "cwp_b_container";
		container.setAttribute("id", "cwp_b_container");
		docFrag.appendChild(container);

		element.className = "cwp_container";
		element.appendChild(docFrag);
	};

	namespace.activateCWP = function(element,demoMode,options) {

		if(false === demoMode) {
			if(options.solution) {
				namespace.CWP_SOLUTION_ARRAY = options.solution;
			} else{
				console.error("Error creating puzzle for id -> "+element.getAttribute("id")+" : solution property of options must be set for demoMode value equal to false");
				return;
			}
			if(options.index) {
				namespace.CWP_Q_INDEX_ARRAY = options.index;
			} else {
				console.error("Error creating puzzle for id -> "+element.getAttribute("id")+" : index property of options must be set for demoMode value equal to false");
				return;
			}
			if(options.questions_across) {
				namespace.CWP_QUESTIONS_ACROSS = options.questions_across;
			} else {
				console.error("Error creating puzzle for id -> "+element.getAttribute("id")+" : questions_across property of options must be set for demoMode value equal to false");
				return;
			}
			if(options.questions_down) {
				namespace.CWP_QUESTIONS_DOWN = options.questions_down;
			} else {
				console.error("Error creating puzzle for id -> "+element.getAttribute("id")+" : questions_down property of options must be set for demoMode value equal to false");
				return;
			}
		}
		namespace.redrawLayout(element);
		namespace.bindEvents();
	};

	namespace.CWP_NO_ROWS = 20;
	namespace.CWP_NO_COLS = 15;
    namespace.CWP_SOLUTION_ARRAY = [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, 'T', 'A', 'A', 'R', 'T', null, null, null, null, null, null, null, null],
        [null, null, 'R', null, null, 'P', null, 'V', null, null, null, null, null, null, null],
        [null, 'T', 'R', 'A', 'K', 'T', 'A', 'T', 'I', 'E', null, null, null, null, null],
        [null, null, 'A', null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 'T', 'A', 'R', 'W', 'E', 'P', 'A', 'N', 'N', 'E', 'K', 'O', 'K', 'E'],
        [null, null, 'I', null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 'P', 'O', 'F', 'F', 'E', 'R', 'T', 'J', 'E', null, null, null, null, null],
        [null, null, 'N', null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 'S', 'P', 'A', 'N', 'N', 'E', 'N', 'D', 'E', null, null, null, null, null],
        [null, null, 'A', null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 'F', 'A', 'M', 'I', 'L', 'I', 'E', null, null, null, null, null, null, null],
        [null, null, 'N', null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 'S', 'N', 'A', 'C', 'K', null, null, null, null, null, null, null, null, null],
        [null, null, 'K', null, null, null, null, null, null, null, null, null, null, null, null]
    ];
    
    namespace.CWP_Q_INDEX_ARRAY = [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, 1, null, null, null, null, null, 2, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 10, null, null, null, null, null],
        [null, null, null, null, null, 5, null, null, null, null, null, null, null, 6, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, 7, null, null, null, null, null, null, null],
        [null, null, null, 8, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, 9, null, 4, null, 11, null, null, null, null, null, null],
        [null, null, null, null, 12, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 13, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ];

	namespace.CWP_QUESTIONS_ACROSS = [		"2. Tellen de jaren op een taart",
	                                  		"4. Zoete drank",
	                                  		"9. Vorm van knusheid",
	                                  		"10. Uitreiken van lekkernijen",
	                                  		"12. Geschenk",
	                                  		"13. Met lucht gevulde bol",
	                                  		"14. Zoute snack"];

	namespace.CWP_QUESTIONS_DOWN =   [      "1. Cirkelvormig zoet baksel",
	                                        "2. Lekkernij van zuivelproduct",
	                                        "3. Maakt een feest compleet",
	                                        "5. Soort versiering",
	                                        "6. Warme drank",
	                                        "7. Geboorte vieringsdag",
                                            "8. Spannende handeling",
                                            "11. Verwanten",
                                            ];

	namespace.resetUserInputArray = function() {

		return [[null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]];
	};

	namespace.CWP_USER_INPUT_ARRAY = namespace.resetUserInputArray();

	namespace.redrawQuestions = function() {

		var qContainerAcross = document.getElementById("cwp_q_across_container");
		var qContainerDown = document.getElementById("cwp_q_down_container");

		var docFragAcross = document.createDocumentFragment();
		var docFragDown = document.createDocumentFragment();

		var brElement = document.createElement("br");
		var textNode = null;
		var spanElement = document.createElement("span");
		spanElement.className = "cwp_q_span";

		var questionsAcross = namespace.CWP_QUESTIONS_ACROSS;
		var questionsDown = namespace.CWP_QUESTIONS_DOWN;
		var qAcrossLength = namespace.CWP_QUESTIONS_ACROSS.length;
		var qDownLength = namespace.CWP_QUESTIONS_DOWN.length;

		for(var i=0;i<qAcrossLength;i++) {
			docFragAcross.appendChild(brElement.cloneNode(false));
			textNode = document.createTextNode(questionsAcross[i]);
			if(spanElement.hasChildNodes()) {
				spanElement.removeChild(spanElement.firstChild);
			}
			spanElement.appendChild(textNode);
			docFragAcross.appendChild(spanElement.cloneNode(true));
		}
		for(var j=0;j<qDownLength;j++) {
			docFragDown.appendChild(brElement.cloneNode(false));
			textNode = document.createTextNode(questionsDown[j]);
			if(spanElement.hasChildNodes()) {
				spanElement.removeChild(spanElement.firstChild);
			}
			spanElement.appendChild(textNode);
			docFragDown.appendChild(spanElement.cloneNode(true));
		}
		qContainerAcross.appendChild(docFragAcross);
		qContainerDown.appendChild(docFragDown);
	};

	namespace.redrawPuzzle = function(checkSolutionMode) {

		var pContainer =  document.getElementById("cwp_p_container");

		var docFragPContainer = document.createDocumentFragment();
		var docFragForRow     = document.createDocumentFragment();

		var numberOfRows = namespace.CWP_NO_ROWS
		var numberOfCols = namespace.CWP_NO_COLS;

		var cell = document.createElement("input");
		var cellClone = null;
		cell.className = "cwp_cell";
		cell.type = "text";

		var qIndexSpan = document.createElement("span");
		qIndexSpan.className = "cwp_q_index_span";

		var textNode = null;

		for(var i=0;i<numberOfRows;i++) {
			var cellRow = document.createElement("div");
			cellRow.className = "cwp_cell_row";
			for(var j=0;j<numberOfCols;j++) {
				var cellWrapper = document.createElement("span");
				cellWrapper.className = "cwp_cell_wrapper";
				cellClone = cell.cloneNode(false);
				cellClone.setAttribute("id","cwp_cell-"+i+"_"+j);
				var solution = namespace.CWP_SOLUTION_ARRAY[i][j];
				var userInput = namespace.CWP_USER_INPUT_ARRAY[i][j]
				if(null === solution) {
					cellClone.className+= " cwp_cell_disable";
					cellClone.setAttribute("disabled",true);
				} else {
					cellClone.className+= " cwp_cell_enable";
					if(checkSolutionMode) {
						if(null === userInput) {
							alert("Please complete the puzzle");
							return;
						}
						cellClone.setAttribute("disabled", true);
						if(null !== userInput) {
							cellClone.setAttribute("value", userInput);
						}
						if(userInput === solution) {
							cellClone.className+= " cwp_cell_sol_true";
						} else {
							cellClone.className+= " cwp_cell_sol_false";
						}
					}
				}
				cellWrapper.appendChild(cellClone);
				var qIndexValue = namespace.CWP_Q_INDEX_ARRAY[i][j];
				if(null !== qIndexValue) {
					if(qIndexSpan.hasChildNodes()) {
						qIndexSpan.removeChild(qIndexSpan.firstChild);
					}
					var textNode = document.createTextNode(qIndexValue);
					qIndexSpan.appendChild(textNode);
					cellWrapper.appendChild(qIndexSpan.cloneNode(true));
				}
				docFragForRow.appendChild(cellWrapper);
			}
			cellRow.appendChild(docFragForRow);
			docFragPContainer.appendChild(cellRow.cloneNode(true));
		}
		pContainer.innerHTML="";
		pContainer.appendChild(docFragPContainer);
		var cells = document.getElementsByClassName("cwp_cell_enable");
		for(var i=0;i<cells.length;i++) {
			cells[i].addEventListener("keydown", function(event) {
				var keyCode = event.keyCode;
				var cellIndex = (this.getAttribute("id")+"").split("-")[1].split("_");
				var rowIndex = Number(cellIndex[0]);
				var colIndex = Number(cellIndex[1]);
				var edgeRowIndex = namespace.CWP_NO_ROWS-1;
				var edgeColIndex = namespace.CWP_NO_COLS-1;
				var nextCell = null;
				var nextCellClass = null;

				if(37 === keyCode && colIndex>0) {
					do{
						colIndex-=1;
						nextCell = document.getElementById("cwp_cell-"+rowIndex+"_"+colIndex);
						nextCellClass = nextCell.className;
					}while(colIndex>0 && nextCellClass.indexOf("cwp_cell_enable") === -1);
					nextCell.focus();
				} else if(38 === keyCode && rowIndex>0) {
					do{
						rowIndex-=1;
						nextCell = document.getElementById("cwp_cell-"+rowIndex+"_"+colIndex);
						nextCellClass = nextCell.className;
					}while(rowIndex>0 && nextCellClass.indexOf("cwp_cell_enable") === -1);
					nextCell.focus();
				} else if(39 === keyCode && colIndex<edgeColIndex) {
					do{
						colIndex+=1;
						nextCell = document.getElementById("cwp_cell-"+rowIndex+"_"+colIndex);
						nextCellClass = nextCell.className;
					}while(colIndex<edgeColIndex && nextCellClass.indexOf("cwp_cell_enable") === -1);
					nextCell.focus();
				} else if(40 === keyCode && rowIndex<edgeRowIndex) {
					do{
						rowIndex+=1;
						nextCell = document.getElementById("cwp_cell-"+rowIndex+"_"+colIndex);
						nextCellClass = nextCell.className;
					}while(rowIndex<edgeRowIndex && nextCellClass.indexOf("cwp_cell_enable") === -1);
					nextCell.focus();
				} else if(8===keyCode||46===keyCode){
					if(this.value) {
						this.value = null;
					}
					namespace.CWP_USER_INPUT_ARRAY[rowIndex][colIndex] = null;
				} else if(!(keyCode>47&&keyCode<58||keyCode>95&&keyCode<106||keyCode>64&&keyCode<91)){
					event.preventDefault();
				}else {
					if(this.value) {
						this.value = null;
					}
					namespace.CWP_USER_INPUT_ARRAY[rowIndex][colIndex] = String.fromCharCode(event.keyCode).toUpperCase();
				}
			});
		}
	};

	namespace.redrawButtons = function() {

		var buttonDiv = document.getElementById("cwp_b_container");
		var docFragButton = document.createDocumentFragment();
		var inputButtonFinish = document.createElement("input");
		inputButtonFinish.className = "cwp_b_button";
		inputButtonFinish.type = "button";
		var inputButtonClear = inputButtonFinish.cloneNode(false);
		inputButtonFinish.setAttribute("id", "cwp_b_finish");
		inputButtonFinish.setAttribute("value", "Check Solution/Finish");
		inputButtonClear.setAttribute("id", "cwp_b_clear");
		inputButtonClear.setAttribute("value", "Clear All/Reset");
		docFragButton.appendChild(inputButtonFinish);
		docFragButton.appendChild(inputButtonClear);
		buttonDiv.appendChild(docFragButton);

		document.getElementById("cwp_b_clear").addEventListener("click",function(){
			namespace.CWP_USER_INPUT_ARRAY = namespace.resetUserInputArray();
			namespace.redrawPuzzle(false);
		});
		document.getElementById("cwp_b_finish").addEventListener("click", function() {
			namespace.redrawPuzzle(true);
		});
	};

	namespace.bindEvents = function() {

		document.getElementById("cwp_p_button").addEventListener("click", function() {
			namespace.redrawPuzzle(false);
			namespace.redrawQuestions();
			namespace.redrawButtons();
		});
	};

})(cwp_nmsp);