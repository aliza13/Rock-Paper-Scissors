// js code for medium

var cChoice;
var userSelection;
var userScore = 0;
var compScore = 0;
var handSignals = ["rock", "paper", "scissors", "air", "gun"];

var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var air = "air";
var gun = "gun";

function compareHands(userSelection, cChoice) {
    alert("computer choice is " + cChoice);
    if (cChoice == rock && userSelection == rock || cChoice == paper && userSelection == paper || cChoice == scissors && userSelection == scissors 
        || cChoice == gun && userSelection == gun || cChoice == air && userSelection == air) {
        alert("tie");
    }
    else if(cChoice == paper && userSelection == rock || cChoice == paper && userSelection == air || cChoice == scissors && userSelection == air ||
        cChoice == scissors && userSelection == paper || cChoice == rock && userSelection == scissors || cChoice == rock && userSelection == gun ||
        cChoice == gun && userSelection == scissors || cChoice == gun && userSelection == paper || cChoice == air && userSelection == gun || cChoice == air && userSelection == rock) {
        compScore = ++compScore;
        // updates span element for score by replacing it with the new score
        document.getElementById("compScore").textContent=compScore;
        alert("Computer Wins");
    }
    else if(userSelection == paper && cChoice == rock || userSelection == paper && cChoice == air || userSelection == scissors && cChoice == air ||
        userSelection == scissors && cChoice == paper || userSelection == rock && cChoice == scissors || userSelection == rock && cChoice == gun ||
        userSelection == gun && cChoice == scissors || userSelection == gun && cChoice == paper || userSelection == air && cChoice == gun || userSelection == air && cChoice == rock) {
        userScore = ++userScore;
        document.getElementById("userScore").textContent=userScore;
        alert("User Wins");
    }
}

function randomChoice() {
    // grabs random # that = a hand signal
    cChoice = Math.floor(Math.random(handSignals.length) * 5);
    cChoice = handSignals[cChoice];
    return cChoice;
}