function getComputerChoice () {
    const choices = ["rock","paper","scissor"]
    let randomSelectStart = (Math.floor(Math.random()*3))
    let randomSelectEnd = (randomSelectStart+1)
    let randomChoice = choices.slice(randomSelectStart,randomSelectEnd)
    return randomChoice    
}

let playerScore = 0;
let computerScore = 0;
console.log(playerScore)

function playRound (selection) {
    let playerSelection = selection
    let computerSelection = getComputerChoice().toString()
    if (playerScore === 5 || computerScore === 5) {
        return;
    };
    if (playerSelection==="rock" && computerSelection==="scissor") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        result.textContent = "You win! Rock beats scissor.";
        return playerScore;
    } else if (playerSelection==="scissor" && computerSelection==="paper") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        result.textContent = "You win! Scissors beats paper.";
    } else if (playerSelection==="paper" && computerSelection==="rock") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        result.textContent = "You win! Paper beats rock.";
    } else if (playerSelection==="scissor" && computerSelection==="rock") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        result.textContent = "You lose! Rock beats scissor." ;
    } else if (playerSelection==="paper" && computerSelection==="scissor") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        result.textContent = "You lose! Scissor beats paper.";
    } else if (playerSelection==="rock" && computerSelection==="paper") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        result.textContent = "You lose! Paper beats rock.";
    } else {
        result.textContent = "It's a tie."
    } 
    if (playerScore === 5) {
        result.textContent = "Congrats! You've won!"; 
    } else if (computerScore === 5) {
        result.textContent = "Unlucky! You've lost!";
    } 
}

const body = document.querySelector('body');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissor = document.createElement('button');
const result = document.createElement('div');
const computerScoreDisplay = document.createElement('div');
const playerScoreDisplay = document.createElement('div');

body.append(result,buttonRock,buttonPaper,buttonScissor,playerScoreDisplay,computerScoreDisplay);

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;
buttonRock.textContent = "ROCK";
buttonPaper.textContent = "PAPER";
buttonScissor.textContent = "SCISSOR";

buttonRock.addEventListener('click',() => {
    playRound("rock");
});
buttonPaper.addEventListener('click',() => {
    playRound("paper");
});
buttonScissor.addEventListener('click',() => {
    playRound("scissor");
});

let game = () => {
    alert('SUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!!!!')
    for (let gameWin = 0;gameWin === 1;) {
        if (playerScore === 5) {
            result.textContent = "Congrats! You've won!";
            gameWin = 1; 
        };   
        if (computerScore === 5) {
            result.textContent = "Unlucky! You've lost!";
            gameWin = 1; 
        };
    };
};
game()

alert('SUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!!!!')