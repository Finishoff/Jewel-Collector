$(document).ready(function(){

    var winText = document.getElementById("win-count");
    var lossText = document.getElementById("loss-count");
    var targetNum = Math.floor(Math.random() * 120) +19;
    var userGuess = document.getElementById("totalScore");
    document.getElementById("randomNumGenerator").innerHTML = targetNum;

$("randomNumGenerator").text(targetNum);
function generateRandomNumber(){
    return Math.floor(Math.random() * 12) +1; 
    }
var totalCount = 0;
var button1RandomNumber = generateRandomNumber();
var button2RandomNumber = generateRandomNumber();
var button3RandomNumber = generateRandomNumber();
var button4RandomNumber = generateRandomNumber();
$("#button-1").on("click", function(){
    totalCount += button1RandomNumber
    totalDisplay();
    checkIfGameOver(); 
});
$("#button-2").on("click", function(){
    totalCount += button2RandomNumber
    totalDisplay();
    checkIfGameOver(); 
});
$("#button-3").on("click", function(){
    totalCount += button3RandomNumber
    totalDisplay();
    checkIfGameOver(); 
});
$("#button-4").on("click", function(){
    totalCount += button4RandomNumber
    totalDisplay();
    checkIfGameOver();
});
function totalDisplay(){
    document.getElementById("totalScore").innerHTML = totalCount;

}
function gameReset(){
    tarNum = Math.floor(Math.random() * 120) + 19;
    document.getElementById("randomNumGenerator").innerHTML = targetNum;
    totalCount=0;
    totalDisplay();
    button1RandomNumber = generateRandomNumber();
    button2RandomNumber = generateRandomNumber();
    button3RandomNumber = generateRandomNumber();
    button4RandomNumber = generateRandomNumber();   
}
function checkIfGameOver(){
if (totalCount === targetNum) {
    winText.textContent++;
    alert("Winner! Close the popup to play again.")
    gameReset();
}
else if (totalCount > targetNum) {
    lossText.textContent++;
    alert("Looser! Close the popup to play again.")
    gameReset();       
}
}
});