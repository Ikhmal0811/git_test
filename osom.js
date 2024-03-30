
function getComputerChoice(){
    const compChoice = [ 'rock', 'paper','scissors'];
    
    let choose = Math.floor(Math.random()*3);

    return compChoice[choose]
}

console.log(getComputerChoice());
