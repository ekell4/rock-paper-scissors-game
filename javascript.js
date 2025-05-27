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
