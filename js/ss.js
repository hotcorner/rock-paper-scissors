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
    return humanChoice;
}