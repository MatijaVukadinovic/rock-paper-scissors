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
    let humanChoice = prompt("Choose rock, paper, or scissors:");
    // Sanitize input: convert to lowercase and trim extra spaces
    humanChoice = humanChoice.trim().toLowerCase();
    console.log(`Human choice: ${humanChoice}`);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win!");
    } else {
        computerScore++;
        console.log("Computer wins!");
    }

    console.log(`Computer score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);
