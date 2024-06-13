//Declare getComputerAnswer function to get CPU answer
//Define computerValue variable for the returned value
//Code if-else statement to return "rock", "paper", or "scissors" based on returned value
//Declare getUserAnswer function to get User answer
//Define userInput variable for User input
//Use prompt() to get value from user
//Use toLowerCase() to ensure every entered input will return lowercase to avoid case sensitivity problems
//Assign getComputerAnswer() and getUserAnswer() to computerAnswer and userAnswer variables
//Define userScore and computerScore variables to get the scores of each player
//Define currentRound variable to keep track of game rounds
//Declare playRound function with if-else statements to determine the outcomes of each round by incrementing the userScore or computerScore based on the given value, incrementing the round, and returning an alert message based on the result.
//Declare playGame function and nest userScore, computerScore, and currentRound variables, and the playRound() function inside
//Create do-while loop inside of playGame() function in order to have the game run for 5 rounds and stops after that
//Create if-else statement to output game results based on if the userScore or computerScore reaches 3 or more.

function getComputerAnswer() {
let computerValue = Math.floor(Math.random() * 3);
if (computerValue === 0) {
    return "rock"; 
} else if (computerValue === 1) {
    return "paper";
} else if (computerValue === 2) {
    return "scissors";
} else {
    return "This is not a valid answer!"
}
}

function getUserAnswer() {
    let userInput = prompt("Rock, Paper, Scissors, SHOOT!");
    return userInput.toLowerCase();
}


function playGame() {
let userScore = 0
let computerScore = 0
let currentRound = 0
    function playRound() {
        const computerAnswer = getComputerAnswer()
        const userAnswer = getUserAnswer()
        if (userAnswer === "rock" && computerAnswer === "scissors") {
            userScore++;
            currentRound++;
            alert("You won this round!");
        } else if (userAnswer === "rock" && computerAnswer === "paper") {
            computerScore++;
            currentRound++;
            alert("You lost this round!");
        } else if (userAnswer === "rock" && computerAnswer === "rock") {
            alert("Tie! Go Again.");
        }  else if (userAnswer === "scissors" && computerAnswer === "paper") {
            userScore++;
            currentRound++;
            alert("You won this round!");
        }  else if (userAnswer === "scissors" && computerAnswer === "rock") {
            computerScore++;
            currentRound++;
            alert("You lost this round!");
        }  else if (userAnswer === "scissors" && computerAnswer === "scissors") {
            alert("Tie! Go Again.");
        }  else if (userAnswer === "paper" && computerAnswer === "rock") {
            userScore++;
            currentRound++;
            alert("You won this round!");
        }  else if (userAnswer === "paper" && computerAnswer === "scissors") {
            computerScore++;
            currentRound++;
            alert("You lost this round!");
        }  else if (userAnswer === "paper" && computerAnswer === "paper") {
            alert("Tie! Go Again.");
        } else {
            alert("Not a valid outcome!");
        }
    }
    do {
        playRound();
    } while (currentRound < 5);
    if (userScore >= 3) {
        alert("Congrats, you won!");
    } else if (computerScore >= 3) {
        alert("Sorry, you lose!")
    }
}

console.log(playGame())