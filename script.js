let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");

let displayResult = document.getElementById("displayResult");
let displayMethod = document.getElementById("displayMethod");

let selectedChoicePlayer = document.getElementById("selectedChoicePlayer");
let selectedChoiceComputer = document.getElementById("selectedChoiceComputer");

let pointsPlayer = document.getElementById("pointsPlayer");
let pointsComputer = document.getElementById("pointsComputer");

let humanScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice();

function getComputerChoice() {

    const choiceArray = ["rock", "paper", "scissors"];

    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = choiceArray[randomInt];
    
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        displayResult.innerHTML = "It's a tie!";
        displayMethod.innerHTML = `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} ties with ${computerChoice}`;
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        displayResult.innerHTML = "You win the round!";
        displayMethod.innerHTML = `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
    } else {
        computerScore++;
        displayResult.innerHTML = "Computer wins the round!";
        displayMethod.innerHTML = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;
    }

    pointsPlayer.innerHTML = `Player: ${humanScore}`;
    pointsComputer.innerHTML = `Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function declareWinner() {

    if (humanScore > computerScore) {
        displayResult.innerHTML = "You win the game!";
    } else if (computerScore > humanScore) {
        displayResult.innerHTML = "Computer wins the game!";
    } else {
        displayResult.innerHTML = "The game was tied!";
    }
}

rockButton.addEventListener("click", function() {

    selectedChoicePlayer.innerHTML = "&#9994";

    playRound("rock", computerSelection);

    if (computerSelection === "rock") {
        selectedChoiceComputer.innerHTML = "&#9994";
    } else if (computerSelection === "paper") {
        selectedChoiceComputer.innerHTML = "&#9995";
    } else {
        selectedChoiceComputer.innerHTML = "&#9996"
    }
    
    computerSelection = getComputerChoice();

})

paperButton.addEventListener("click", function() {

    selectedChoicePlayer.innerHTML = "&#9995";

    playRound("paper", computerSelection);

    if (computerSelection === "rock") {
        selectedChoiceComputer.innerHTML = "&#9994";
    } else if (computerSelection === "paper") {
        selectedChoiceComputer.innerHTML = "&#9995";
    } else {
        selectedChoiceComputer.innerHTML = "&#9996"
    }

    computerSelection = getComputerChoice();

})

scissorsButton.addEventListener("click", function() {

    selectedChoicePlayer.innerHTML = "&#9996";

    playRound("scissors", computerSelection);

    if (computerSelection === "rock") {
        selectedChoiceComputer.innerHTML = "&#9994";
    } else if (computerSelection === "paper") {
        selectedChoiceComputer.innerHTML = "&#9995";
    } else {
        selectedChoiceComputer.innerHTML = "&#9996"
    }

    computerSelection = getComputerChoice();

})