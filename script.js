//let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let resultDisplay = document.getElementById("resultDisplay")

rockButton.addEventListener("click", function() {

    playRound("rock", computerSelection);

})

paperButton.addEventListener("click", function() {

    playRound("paper", computerSelection);

})

scissorsButton.addEventListener("click", function() {

    playRound("scissors", computerSelection);

})

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choiceArray = ["rock", "paper", "scissors"];

    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = choiceArray[randomInt];

    console.log(`Computer choice: ${computerChoice}`);
    return computerChoice;
}

function getHumanChoice() {

    let humanChoice = prompt("Choose rock, paper or scissors:");

    humanChoice = humanChoice.trim().toLowerCase();

    console.log(`Human choice: ${humanChoice}`);
    return humanChoice;
}

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

//playRound(humanSelection, computerSelection);
