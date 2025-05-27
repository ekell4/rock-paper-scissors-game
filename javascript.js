//When page is loaded
//Randomly generate a decimal value between 0 and 1
//If value is less than 0.3
//Return rock
//If value is greater than 0.3 but less than 0.6
//Return paper
//If value is greater than 0.6
//Return scissor

function getComputerChoice() {
    let a = Math.random();
    let result;
    if (a<=0.3) {
        result = "rock";
    } else if (a>0.3 && a<=0.6) {
        result = "paper";
    } else if (a>0.6) {
        result = "scissor";
    }
        return result;
    }
    

getComputerChoice();

//When page is loaded
//Open a prompt window asking "Rock, paper or scissors?"
//When user inputs choice
//Check choice against computer choice
//If user and computer make the same choice
//Alert "It's a tie! You made the same choice. Choose again"
//If user chooses rock, and computer chooses scissors
//Alert "Yes! Rock crushes scissors."
//If user chooses rock, and computer chooses paper
//Alert "No. Paper covers rock."
//If user chooses paper, and computer chooses rock
//Alert "Yes! Paper covers rock."
//If user chooses paper, and computer chooses scissors
//Alert "No. Scissors cut paper."
//If user chooses scissors, and computer chooses paper
//Alert "Yes! Scissors cut paper."
//If user chooses scissors, and computer chooses rock
//Alert "No. Rock crushes scissors"

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
}

getHumanChoice();

