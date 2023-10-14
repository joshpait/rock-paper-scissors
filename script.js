let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const p = document.createElement('p');
    if (playerSelection === computerSelection) {
        p.textContent = `It's a Tie! You both picked ${playerSelection}.`;
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        computerScore++;
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
    outcomeDiv.appendChild(p);        
}

function checkWinner(playerScore, computerScore) {
    const h2 = document.createElement('h2');
    if (playerScore === 5) {
        h2.classList.add('player-won');
        h2.textContent = `You won ${playerScore} to ${computerScore}! Great job beating the computer!`;
    } else if (computerScore === 5) {
        h2.classList.add('computer-won');
        h2.textContent = `You lost ${playerScore} to ${computerScore}! Maybe next time!`;
    } 
    outcomeDiv.appendChild(h2);
}

function updateScore (playerScore, computerScore) {
    playerScoreSpan.textContent = `Player Score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
}

rockButton.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});
paperButton.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});
scissorsButton.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});

/* function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper, or Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
} */

/* function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log('Welcome!');
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------------------");
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over!")
    if (scorePlayer > scoreComputer) {
        console.log("Player is the winner!");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer is the winner!");
    }
    else {
        console.log("We have a tie!");
    }
} 

game();
*/