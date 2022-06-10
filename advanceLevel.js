// js for advance level

var cChoice;
var userSelection;
var userScore = 0;
var compScore = 0;
var handSignals = ["rock", "paper", "scissors", "air", "gun", "love", "tree", "devil"];

var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var air = "air";
var gun = "gun";
var love = "love";
var tree = "tree";
var devil = "devil";

function compareHands(userSelection, cChoice) {
    alert("computer choice is " + cChoice);
    if (cChoice == rock && userSelection == rock || cChoice == paper && userSelection == paper || cChoice == scissors && userSelection == scissors 
        || cChoice == gun && userSelection == gun || cChoice == air && userSelection == air || cChoice == love && userSelection == love || cChoice == tree && userSelection == tree 
        || cChoice == devil && userSelection == devil) {
        alert("tie");
    }
    else if(cChoice == paper && userSelection == rock || cChoice == paper && userSelection == air || cChoice == paper && userSelection == tree ||
         cChoice == scissors && userSelection == air || cChoice == scissors && userSelection == paper || cChoice == scissors && userSelection == love ||
         cChoice == rock && userSelection == scissors || cChoice == rock && userSelection == gun || cChoice == rock && userSelection == devil || cChoice == rock && userSelection == love ||
        cChoice == gun && userSelection == scissors || cChoice == gun && userSelection == paper || cChoice == gun && userSelection == love ||
        cChoice == air && userSelection == gun || cChoice == air && userSelection == rock || cChoice == air && userSelection == tree || cChoice == air && userSelection == devil ||
        cChoice == love && userSelection == devil || cChoice == love && userSelection == air || cChoice == love && userSelection == paper ||
        cChoice == tree && userSelection == gun || cChoice == tree && userSelection == love || cChoice == tree && userSelection == rock || cChoice == tree && userSelection == scissors ||
        cChoice == devil && userSelection == gun || cChoice == devil && userSelection == scissors || cChoice == devil && userSelection == paper || cChoice == devil && userSelection == tree) {
        compScore = ++compScore;
        // updates span element for score by replacing it with the new score
        document.getElementById("compScore").textContent=compScore;
        alert("Computer Wins");
    }
    else if(userSelection == paper && cChoice == rock || userSelection == paper && cChoice == air || userSelection == paper && cChoice == tree ||
        userSelection == scissors && cChoice == air || userSelection == scissors && cChoice == paper || userSelection == scissors && cChoice == love ||
        userSelection == rock && cChoice == scissors || userSelection == rock && cChoice == gun || userSelection == rock && cChoice == devil || userSelection == rock && cChoice == love ||
       userSelection == gun && cChoice == scissors || userSelection == gun && cChoice == paper || userSelection == gun && cChoice == love ||
       userSelection == air && cChoice == gun || userSelection == air && cChoice == rock || userSelection == air && cChoice == tree || userSelection == air && cChoice == devil ||
       userSelection == love && cChoice == devil || userSelection == love && cChoice == air || userSelection == love && cChoice == paper ||
       userSelection == tree && cChoice == gun || userSelection == tree && cChoice == love || userSelection == tree && cChoice == rock || userSelection == tree && compScore == scissors ||
       userSelection == devil && cChoice == gun || userSelection == devil && cChoice == scissors || userSelection == devil && cChoice == paper || userSelection == devil && cChoice == tree){
        userScore = ++userScore;
        document.getElementById("userScore").textContent=userScore;
        alert("User Wins");
    }
}

function randomChoice() {
    // grabs random # that = a hand signal
    cChoice = Math.floor(Math.random(handSignals.length) * 8);
    cChoice = handSignals[cChoice];
    return cChoice;
}