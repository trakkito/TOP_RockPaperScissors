//Math.random to get random returned value
//Create variable for the returned value
//if-else statement to return "rock", "paper", or "scissors" based on returned value

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

// function capitalize(string) {
//    if (string.length === 0) {
//       return "";
//    }
//    const firstLetter = string[0].toUpperCase();
//    const remainingLetters = string.slice(1).toLowerCase();
//    return firstLetter + remainingLetters;
//}


//function lastLetter(string) {
//    const lastIndex = string.length - 1;
//    const finalLetter = string[lastIndex];
//    return finalLetter;
//}

//console.log(lastLetter("beach"))