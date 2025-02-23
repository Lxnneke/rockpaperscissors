// A function needs to be created
function getComputerChoice () {
    // Within said function, create somethign with which you can get a random return
    let computerChoice = Math.floor(Math.random() * 3) + 1
    // Randomly return either Rock, Paper, or Scissors. 
    return computerChoice;
}

// Create the getHumanChoice function
function getHumanChoice() {
    // Use prompt to get input
    let humanAnswer = prompt("What will you play? Rock, Paper, or Scissors?");
    let text = humanAnswer.toLowerCase();
    let choice;

    switch (text) {
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 1;
            break;
        case "scissors":
            choice = 2;
            break;
        default:
            getHumanChoice();
    }
    return choice;
}

// Make sure there are score variables for the Human and the Computer
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(computerChoice == humanChoice) {
        console.log("Tie!")
    }
    else if (computerChoice - 1 == humanChoice || (computerChoice == 0 && humanChoice == 2)) {
        computerScore++;
        console.log("The Computer wins this one!!")
    }
    else if (humanChoice - 1 == computerChoice || (humanChoice == 0 && computerChoice == 2)) {
        humanScore++;
        console.log("The Human wins this one!!")
    }
}

function playGame(){
    for (let i = 0; i < 5; i++)
    {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if (computerScore > humanScore) {
        console.log("The winner of these rounds is  >  Computer");
    }
    else if (computerScore < humanScore) {
        console.log("The winner of these rounds is  >  Human");
    }
    else{
        console.log("That's what we call a tie, folks!");
    }
}

playGame();