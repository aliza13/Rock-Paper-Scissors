// js code 

var cChoice;
var userSelection;
var result;
var handSignals = ["rock", "paper", "scissors"];

var rock = document.getElementById("rock").value;
var paper = document.getElementById("paper").value;
var scissors = document.getElementById("scissors").value;

function compareHands(userSelection, cChoice) {
    
    // how to I call this function in my html after the user and computer make a choice?
    if (cChoice === rock && userSelection === rock || cChoice === paper && userSelection === paper || cChoice === scissors && userSelection === scissors) {
        return result = "tie"
    }
    else if(cChoice === paper && userSelection === rock || cChoice === scissors && userSelection === paper || cChoice === rock && userSelection === scissors) {
        return result = "Computer Wins"
    }
    else if(cChoice === paper && userSelection === scissors || cChoice === scissors && userSelection === rock || cChoice === rock && userSelection === paper) {
        return result = "User Wins"
    }

    function userChoice(userSelection) {
        var rock = document.getElementById("rock").value;
        var paper = document.getElementById("paper").value;
        var scissors = document.getElementById("scissors").value;
    
        if (userSelection === rock) {
            return userSelection;
        }
        else if (userSelection === paper) {
            return userSelection;
        }
        else if (userSelection === scissors) {
            // console.log(userSelection); // it works! returns scissors
            return userSelection;
        }
    }
    function randomChoice() {
        // grabs random # that = a hand signal
        cChoice = Math.floor(Math.random(handSignals.length) * 3);
        cChoice = handSignals[cChoice];
        //console.log(cChoice) works!
        return cChoice;
    }
    
    userChoice(userSelection);
    randomChoice();
    // console.log(userChoice(userSelection) + randomChoice()); This Works!!!
}

compareHands(userSelection, cChoice);
console.log(result) // nothing appears
// var results = document.write(result);
