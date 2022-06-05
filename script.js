// js code 

var cChoice;
var userSelection;
var result;
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
        alert("Computer Wins");
    }
    else if(cChoice == paper && userSelection == scissors || cChoice == scissors && userSelection == rock || cChoice == rock && userSelection == paper) {
        alert("User Wins");
    }
}


function randomChoice() {
    // grabs random # that = a hand signal
    cChoice = Math.floor(Math.random(handSignals.length) * 3);
    cChoice = handSignals[cChoice];
    return cChoice;
}
