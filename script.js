let computerSelection = getComputerChoice();

let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");

let resultDisplay = document.getElementById("resultDisplay")
let pointsPlayer = document.getElementById("pointsPlayer");
let pointsComputer = document.getElementById("pointsComputer");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choiceArray = ["rock", "paper", "scissors"];

    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = choiceArray[randomInt];

    console.log(`Computer choice: ${computerChoice}`);
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        resultDisplay.innerHTML = "It's a tie!";
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDisplay.innerHTML = "You win the round!";
    } else {
        computerScore++;
        resultDisplay.innerHTML = "Computer wins the round!";
    }

    pointsPlayer.innerHTML = `Player Score: ${humanScore}`;
    pointsComputer.innerHTML = `Computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {

    if (humanScore > computerScore) {
        resultDisplay.innerHTML = "You win the game!";
    } else if (computerScore > humanScore) {
        resultDisplay.innerHTML = "Computer wins the game!";
    } else {
        resultDisplay.innerHTML = "The game was tied!";
    }
}


rockButton.addEventListener("click", function() {

    playRound("rock", computerSelection);
    computerSelection = getComputerChoice();

})

paperButton.addEventListener("click", function() {

    playRound("paper", computerSelection);
    computerSelection = getComputerChoice();

})

scissorsButton.addEventListener("click", function() {

    playRound("scissors", computerSelection);
    computerSelection = getComputerChoice();

})