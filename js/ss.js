let getComputerChoice = ()=>{
    const randoNumbo = Math.floor(Math.random()*3);
    switch (randoNumbo) {
    case 1:
        console.log("Rock");
        break;
    case 2:
        console.log("Scissors");
        break;
    default:
        console.log("Paper");
    }
}