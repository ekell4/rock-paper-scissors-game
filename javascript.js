let humanScore = 0; //start game at zero
let computerScore = 0; //start game at zero

function getComputerChoice() {
    let a = Math.random(); //Randomly generate a decimal value between 0 and 1
    let result;
    if (a<=0.3) { //If value is less than 0.3
        result = "rock"; //Return rock
    } else if (a>0.3 && a<=0.6) { //If value is greater than 0.3 but less than 0.6
        result = "paper"; //Return paper
    } else if (a>0.6) { //If value is greater than 0.6
        result = "scissors"; //Return scissor
    }
        return result;
    }

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase(); //Make pop-up window with question and let it accept any case
    if (choice === "rock") { //If the user types rock
        console.log("rock"); //Show rock in console
    } else if (choice ==="paper") { //If the user types paper
        console.log("paper"); //Show paper in the console
    } else if (choice ==="scissors") { //If the user types scissors
        console.log("scissors"); //Show scissors in the console
    }
    return choice;
    }


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`It's a tie! You both chose ${humanChoice}.`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
    {humanScore ++; alert(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {computerScore++; alert(`You lose! ${computerChoice} beats ${humanChoice}!`);}
    console.log(`Score: Human ${humanScore} Computer ${computerScore}`);
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);