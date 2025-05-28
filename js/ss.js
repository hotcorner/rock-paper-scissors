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