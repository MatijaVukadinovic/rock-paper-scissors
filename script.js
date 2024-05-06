function getComputerChoice() {

    const choiceArray = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);

    return choiceArray[randomInt];
}

console.log(getComputerChoice());