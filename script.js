// js code 

var cChoice = ""
var handSignals = ["rock", "paper", "scissors"];

function randomChoice() {
    // grabs random # that = a hand signal
    cChoice = Math.floor(Math.random(handSignals.length) * 3);
    cChoice = handSignals[cChoice];
    //console.log(cChoice)
    return cChoice;
    // returns rock, paper, or scissors... as strings I think
}


    var rock = document.getElementById("rock").value;
    var paper = document.getElementById("paper").value;
    var scissors = document.getElementById("scissors").value;

    // how do I get the random choice to show up in this?
    var selected = randomChoice();

    if (selected === rock) {
        alert("rock")
    }
    else if (selected === paper) {
         alert("p")
    }
    else if (selected === scissors) {
        alert("s")
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