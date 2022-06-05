// js code 

var cChoice;
var userSelection;
var result;
var handSignals = ["rock", "paper", "scissors"];

var rock = "rock";
var paper = "paper";
var scissors = "scissors";

function compareHands(userSelection, cChoice) {
    if (cChoice === rock && userSelection === rock || cChoice === paper && userSelection === paper || cChoice === scissors && userSelection === scissors) {
        return result = "tie"
    }
    else if(cChoice === paper && userSelection === rock || cChoice === scissors && userSelection === paper || cChoice === rock && userSelection === scissors) {
        return result = "Computer Wins"
    }
    else if(cChoice === paper && userSelection === scissors || cChoice === scissors && userSelection === rock || cChoice === rock && userSelection === paper) {
        return result = "User Wins"
    }
    console.log(result);  // does not work
}

function userChoice(userSelection) {
    // ???
    return compareHands(userSelection, randomChoice());
}


function randomChoice() {
    // grabs random # that = a hand signal
    cChoice = Math.floor(Math.random(handSignals.length) * 3);
    cChoice = handSignals[cChoice];
    return cChoice;
}

alert(result)  // does not work
