let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choiceArray = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);

    return choiceArray[randomInt];
}

function getHumanChoice() {

    let humanChoice = prompt("Choose rock, paper or scissors:");

    if (humanChoice == "rock") {
        return "rock";
    } else if (humanChoice == "paper") {
        return "paper";
    } else if (humanChoice == "scissors") {
        return "scissors";
    } else {
        alert("Not a valid option");
    }

}

console.log(getComputerChoice());
console.log(getHumanChoice());