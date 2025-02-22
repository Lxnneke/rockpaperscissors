// A function needs to be created
function getComputerChoice () {
    // Within said function, create somethign with which you can get a random return
    computerChoice = Math.floor(Math.random() * 3) + 1
    // Randomly return either Rock, Paper, or Scissors. 

    if (computerChoice === 1) {
        console.log("Rock")
    } else if (computerChoice === 2) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}

getComputerChoice()