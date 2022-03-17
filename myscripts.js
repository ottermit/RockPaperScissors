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

const playerSelection = "rock";
const computerSelection = computerPlay(3);
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
    computerSelection = computerPlay(3);
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "You tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You tie!";
    } else {
        return "Invalid input";
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}
 game();