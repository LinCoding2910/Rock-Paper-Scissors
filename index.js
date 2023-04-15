function getComputerChoice () {
    const choices = ["rock","paper","scissor"]
    let randomSelectStart = (Math.floor(Math.random()*3))
    let randomSelectEnd = (randomSelectStart+1)
    let randomChoice = choices.slice(randomSelectStart,randomSelectEnd)
    return randomChoice    
}

console.log(getComputerChoice())

// let playerSelectio = "paper"
// let computerSelectio = getComputerChoice()
// console.log(playerSelectio)
// console.log(computerSelectio)

function playRound (playerSelection,computerSelection) {
    let x = playerSelection
    let y = computerSelection
    if (x==="rock" && y==="scissor") {
        return ("You win! Rock beats scissor.")
    } else if (x==="scissor" && y==="paper") {
        return ("You win! Scissors beats paper.")
    } else if (x==="paper" && y==="rock") {
        return ("You win! Paper beats rock.")
    } else if (x==="scissor" && y==="rock") {
        return ("You lose! Rock beats scissor.") 
    } else if (x==="paper" && y==="scissor") {
        return ("You lose! Scissor beats paper.")
    } else if (x==="rock" && y==="paper") {
        return ("You lose! Paper beats rock.")
    } else if (x==="rock" && y==="rock") {
        return ("It's a tie.")
    } else if (x==="scissor" && y==="scissor") {
        return ("It's a tie.")
    } else if (x==="paper" && y==="paper") {
        return ("It's a tie.")
    } else {
        return ("You've entered something wrong")
    }
}

console.log (playRound("rock","paper"))