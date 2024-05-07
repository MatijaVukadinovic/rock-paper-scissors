//let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let resultDisplay = document.getElementById("resultDisplay")

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
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win the round!");
    } else {
        computerScore++;
        console.log("Computer wins the round!");
    }

    console.log(`Computer score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game was tied!");
    }
}


//playRound(humanSelection, computerSelection);
