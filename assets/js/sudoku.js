var $candidateToggle = $(".js-candidate-toggle"),
$generateBoardBtnEasy = $(".js-generate-board-btn--easy"),
$generateBoardBtnMedium = $(".js-generate-board-btn--medium"),
$generateBoardBtnHard = $(".js-generate-board-btn--hard"),
$generateBoardBtnVeryHard = $(".js-generate-board-btn--very-hard"),

$solveStepBtn = $(".js-solve-step-btn"),
$solveAllBtn = $(".js-solve-all-btn"),
$clearBoardBtn = $(".js-clear-board-btn"),

mySudokuJS = $("#sudoku").sudokuJS({
 difficulty: "very hard"
 //change state of our candidate showing checkbox on change in sudokuJS
 ,candidateShowToggleFn : function(showing){
  $candidateToggle.prop("checked", showing);
 }
});

$solveStepBtn.on("click", mySudokuJS.solveStep);
$solveAllBtn.on("click", mySudokuJS.solveAll);
$clearBoardBtn.on("click", mySudokuJS.clearBoard);

$generateBoardBtnEasy.on("click", function(){
 mySudokuJS.generateBoard("easy");
});
$generateBoardBtnMedium.on("click", function(){
 mySudokuJS.generateBoard("medium");
});
$generateBoardBtnHard.on("click", function(){
 mySudokuJS.generateBoard("hard");
});
$generateBoardBtnVeryHard.on("click", function(){
 mySudokuJS.generateBoard("very hard");
});

$candidateToggle.on("change", function(){
 if($candidateToggle.is(":checked"))
  mySudokuJS.showCandidates();
 else
  mySudokuJS.hideCandidates();
});
$candidateToggle.trigger("change");

// Eventlistener voor de "Controleer antwoorden" knop
document.querySelector(".js-check-sudoku-btn").addEventListener("click", checkWin);

function checkWin() {
  document.getElementById("reward-section").classList.remove("hidden");
}
// Functie om de knop zichtbaar te maken na een bepaalde tijd
function showButtonAfterDelay(delayInSeconds) {
  const button = document.getElementById("rewardButton");
  setTimeout(function() {
      button.classList.remove("hidden");
  }, delayInSeconds * 1000);
}

// Roep de functie aan met een gewenste tijd (bijv. 5 seconden)
showButtonAfterDelay(60); // Knop wordt zichtbaar na 5 seconden



