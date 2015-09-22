// Author: Matthew Palomar
// Date: 9/15/15

// Desc: A simple rock, paper, scissors game.

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return choice1 + " wins";
        }
        else {
            return choice2 + " wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return choice1 + " wins";
        }
        else {
            return choice2 + " wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return choice1 + " wins";
        }
        else {
            return choice2 + " wins";
        }
    }
};

compare(userChoice, computerChoice);