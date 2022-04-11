function computerPlay(max) {
    const num = Math.floor(Math.random() * max);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else if (num == 2) {
        return "scissors";
    } else {
        return "Invalid input";
    }
}
 
let playerWin = 0;
let computerWin = 0;
const maxAmountOfGames = 10;
const playerSelection = "rock";
const computerSelection = computerPlay(3);
function playRound(playerSelection, computerSelection) {
    if (playerWin == 5) {
        playerWin = 0;
        computerWin = 0;
        playerWins.textContent = "Your wins: " + playerWin;
        computerWins.textContent = "Computer wins: " + computerWin;
        alert("You won the game!");
    } else if (computerWin == 5) {
        playerWin = 0;
        computerWin = 0;
        playerWins.textContent = "Your wins: " + playerWin;
        computerWins.textContent = "Computer wins: " + computerWin;
        alert("You lost the game!");
    }
    computerSelection = computerPlay(3);
    if (playerSelection == "rock" && computerSelection == "rock") {
        results.textContent = "You tie!";
        container.appendChild(results);
        return "You tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        results.textContent = "You lose!";
        container.appendChild(results);
        computerWin = computerWin + 1;
        computerWins.textContent = "Computer wins: " + computerWin;
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        results.textContent = "You win!";
        container.appendChild(results);
        playerWin = playerWin + 1;
        playerWins.textContent = "Your wins: " + playerWin;
        return "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        results.textContent = "You win!";
        container.appendChild(results);
        playerWin = playerWin + 1;
        playerWins.textContent = "Your wins: " + playerWin;
        return "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        results.textContent = "You tie!";
        container.appendChild(results);
        return "You tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        results.textContent = "You lose!";
        container.appendChild(results);
        computerWin = computerWin + 1;
        computerWins.textContent = "Computer wins: " + computerWin;
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        results.textContent = "You lose!";
        container.appendChild(results);
        computerWin = computerWin + 1;
        computerWins.textContent = "Computer wins: " + computerWin;
        return "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        results.textContent = "You win!";
        container.appendChild(results);
        playerWin = playerWin + 1;
        playerWins.textContent = "Your wins: " + playerWin;
        return "You win! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        results.textContent = "You tie!";
        container.appendChild(results);
        return "You tie!";
    } else {
        return "Invalid input";
    }
}

function game() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
   
    playerWin = 0;
    computerWin = 0;

    playerWins.textContent = "Your wins: " + playerWin;
    computerWins.textContent = "Computer wins: " + computerWin;
}

const container = document.querySelector('.container');
const results = document.createElement('div');

const playerWins = document.createElement('div');
const computerWins = document.createElement('div');
playerWins.textContent = "Your wins: " + playerWin;
computerWins.textContent = "Computer wins: " + computerWin;
container.appendChild(playerWins);
container.appendChild(computerWins);

const rockBtn = document.querySelector('#btnRock');
rockBtn.disabled = true;
const paperBtn = document.querySelector('#btnPaper');
paperBtn.disabled = true;
const scissorsBtn = document.querySelector('#btnScissors');
scissorsBtn.disabled = true;
const startGame = document.querySelector('#startGame');

rockBtn.addEventListener('click', () => {
    console.log(playRound("rock"));
});
paperBtn.addEventListener('click', () => {
    console.log(playRound("paper"));
});
scissorsBtn.addEventListener('click', () => {
    console.log(playRound("scissors"));
});

startGame.addEventListener('click', game);