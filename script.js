// will update notes at future time

const body = document.querySelector("body");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener('click', () => {
   playRound('rock');
});

paper.addEventListener('click', () => {
    playRound('paper');
});

scissors.addEventListener('click', () => {
   playRound('scissors');
});

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const roundResults = document.createElement("div");
const cpuScore = document.createElement("div");
const playerScore = document.createElement("div");

body.appendChild(roundResults);
body.appendChild(cpuScore);
body.appendChild(playerScore);

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

const disableButtons = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
};

let userScore = 0
let computerScore = 0
    function playRound(userAnswer) {
        const computerAnswer = getComputerAnswer()
        if (userAnswer === "rock" && computerAnswer === "scissors") {
            userScore++;
            roundResults.textContent = "You won this round!";
        } else if (userAnswer === "rock" && computerAnswer === "paper") {
            computerScore++;
            roundResults.textContent = "You lost this round!";
        } else if (userAnswer === "rock" && computerAnswer === "rock") {
            roundResults.textContent = "Tie! Go Again!";
        }  else if (userAnswer === "scissors" && computerAnswer === "paper") {
            userScore++;
            roundResults.textContent = "You won this round!";
        }  else if (userAnswer === "scissors" && computerAnswer === "rock") {
            computerScore++;
            roundResults.textContent = "You lost this round!";
        }  else if (userAnswer === "scissors" && computerAnswer === "scissors") {
            roundResults.textContent = "Tie! Go Again!";
        }  else if (userAnswer === "paper" && computerAnswer === "rock") {
            userScore++;
            roundResults.textContent = "You won this round!";
        }  else if (userAnswer === "paper" && computerAnswer === "scissors") {
            computerScore++;
            roundResults.textContent = "You lost this round!";
        }  else if (userAnswer === "paper" && computerAnswer === "paper") {
            roundResults.textContent = "Tie! Go Again!";
        } else {
            roundResults.textContent = "Not a Valid Outcome!";
        }

        cpuScore.textContent = "Computer Score: " + computerScore;
        playerScore.textContent = "Player Score: " + userScore;

        if (userScore === 5) {
            roundResults.textContent = "Congrats, you won the game!";
            disableButtons();
        } else if (computerScore === 5) {
            roundResults.textContent = "Sorry, you lost the game.";
            disableButtons();
        };
};

startGame = () => {
    userScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    roundResults.textContent = "";
    cpuScore.textContent = "Computer Score: 0";
    playerScore.textContent = "Player Score: 0";
}

startGame();