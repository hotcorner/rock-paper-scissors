let humanScore = 0;
let computerScore = 0;

let getComputerChoice = ()=>{
    const randoNumbo = Math.floor(Math.random()*3);
    switch (randoNumbo) {
    case 1:
        return "Rock";
    case 2:
        return "Scissors";
    default:
        return "Paper";
    }
}

let getHumanChoice = ()=>{
    const humanChoice = prompt("Paper, Rock or Scissors?");
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}

let playRound = (humanChoice, computerChoice)=>{
    let result;
    if(humanChoice=="Paper"){
        switch(computerChoice){
            case "Paper":
                result  = "Tie! Try again.";
                break;
            case "Rock":
                result  = "Paper covers Rock. You win!";
                humanScore++;
                break;
            case "Scissors":
                result  = "Scissors cuts Paper. Try again.";
                computerScore++;
                break;
        }
    }
    else if(humanChoice=="Rock"){
        switch(computerChoice){
            case "Paper":
                result  = "Paper covers Rock. Try again.";
                computerScore++;
                break;
            case "Rock":
                result  = "Tie! Try again.";
                break;
            case "Scissors":
                result  = "Rock beats Scissors. You win!";
                humanScore++;
                break;
        }
    }
    else if(humanChoice=="Scissors"){
        switch(computerChoice){
            case "Paper":
                result  = "Scissors cut paper. You win!";
                humanScore++;
                break;
            case "Rock":
                result  = "Rock beats Scissors. Try again.";
                computerScore++;
                break;
            case "Scissors":
                result  = "Tie! Try again.";
                break;
        }
    }
    let msg = `Human chose ${humanChoice}.\n Computer chose ${computerChoice}.\n ${result}\n humans:${humanScore} --- computers:${computerScore}`;
    return msg;
}

let playGame = (rounds)=>{

    for (let i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let fullResult = playRound(humanSelection, computerSelection);
        console.log(fullResult);
    }
    const winner = humanScore >= computerScore ? "Game Over. You win." : "Game Over. You lose.";
    console.log(winner);
}



playGame(5);