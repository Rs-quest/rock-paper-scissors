function getComputerChoice (){
    let number = Math.random()
    if (number < 0.33) {
    return 'paper'}
if (number < 0.66) {
    return 'scissors'
}

return 'rock'}


function getHumanChoice() {
    let humanChoice = prompt("rock, paper, scissors?")
    return humanChoice
}

let humanScore = 0
let computerScore = 0

function playGame() {
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    
if (humanChoice === computerChoice) { console.log ("It's a tie!") }

    if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    console.log("You win! Rock beats scissors")
}

if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++
    console.log("You win! Paper beats rock")
}

if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
    console.log("You win! Scissors beats paper")
}

if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++
    console.log("You lose! Scissors beats paper")
}

if (humanChoice === "rock" && computerChoice === "paper") { 
    computerScore++ 
    console.log("You lose! Paper beats rock")}

if (humanChoice === "scissors" && computerChoice === "rock") { 
    computerScore++ 
    console.log("You lose! Rock beats scissors")}
} 

playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())



if (humanScore > computerScore) {
    console.log("You won the game!")
}

if (humanScore < computerScore) {
    console.log("You lost the game!")
}

if (humanScore === computerScore) {
    console.log("The game is a tie!")
}

}

playGame()