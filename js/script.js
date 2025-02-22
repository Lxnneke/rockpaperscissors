// A function needs to be created

// Within said function, create somethign with which you can get a random return

// Randomly return either Rock, Paper, or Scissors. 

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3) + 1

    if (computerChoice === 1) {
        console.log("Rock")
    } else if (computerChoice === 2) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}

getComputerChoice()