// js code 

var cChoice = ""
var userSelection = ""
var handSignals = ["rock", "paper", "scissors"];

function randomChoice() {
    // grabs random # that = a hand signal
    cChoice = Math.floor(Math.random(handSignals.length) * 3);
    cChoice = handSignals[cChoice];
    //console.log(cChoice)
    return cChoice;
}

function userChoice(userSelection) {
    var rock = document.getElementById("rock").value;
    var paper = document.getElementById("paper").value;
    var scissors = document.getElementById("scissors").value;

    if (userSelection === rock) {
        alert("ROCKKK");
        return userSelection;
    }
    else if (userSelection === paper) {
        alert("pp");
        return userSelection;
    }
    else if (userSelection === scissors) {
        alert("scissorss")
        return userSelection;
    }
}

function compareHands(compChoice, userChoice) {
    // how to I call this function in my html after the user and computer make a choice?
    if (compChoice === rock && userChoice === rock || compChoice === paper && userChoice === paper || compChoice === scissors && userChoice === scissors) {
        alert("TIE")
    }
    else if(compChoice === paper && userChoice === rock || compChoice === scissors && userChoice === paper || compChoice === rock && userChoice === scissors) {
        alert("computer wins")
    }
    else if(compChoice === paper && userChoice === scissors || compChoice === scissors && userChoice === rock || compChoice === rock && userChoice === paper) {
        alert("User wins")
    }
}



randomChoice();

userChoice(userSelection);
