// js code 

var cChoice;
var userSelection;
var userScore = 0;
var compScore = 0;
var handSignals = ["rock", "paper", "scissors"];

var rock = "rock";
var paper = "paper";
var scissors = "scissors";

function compareHands(userSelection, cChoice) {
    alert("computer choice is " + cChoice);
    if (cChoice == rock && userSelection == rock || cChoice == paper && userSelection == paper || cChoice == scissors && userSelection == scissors) {
        alert("tie");
    }
    else if(cChoice == paper && userSelection == rock || cChoice == scissors && userSelection == paper || cChoice == rock && userSelection == scissors) {
        compScore = ++compScore;
        // updates span element for score by replacing it with the new score
        document.getElementById("compScore").textContent=compScore;
        alert("Computer Wins");
    }
    else if(cChoice == paper && userSelection == scissors || cChoice == scissors && userSelection == rock || cChoice == rock && userSelection == paper) {
        userScore = ++userScore;
        document.getElementById("userScore").textContent=userScore;
        alert("User Wins");
    }
}

function randomChoice() {
    // grabs random # that = a hand signal
    cChoice = Math.floor(Math.random(handSignals.length) * 3);
    cChoice = handSignals[cChoice];
    return cChoice;
}




