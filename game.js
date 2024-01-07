

function Computer() {
    const words = ['paper', 'scissor', 'rock']
    const arrayIndex = Math.floor(Math.random()*words.length)
    return words[arrayIndex];
    };

function playRound(playerChoice, getComputerChoice) {
    // your code here!
    if (getComputerChoice === 'rock' && playerChoice === 'scissors') {
        console.log( 'Computer Wins');

    } else if (getComputerChoice === 'paper' && playerChoice === 'paper') {
        console.log( 'Draw');

    } else if (getComputerChoice === 'scissors' && playerChoice === 'paper') {
        console.log ('Computer Wins');

    } else if (getComputerChoice === 'scissors' && playerChoice=== 'rock') {
        console.log('Player wins');

    } else if (getComputerChoice === 'paper' && playerChoice === 'rock') {
        console.log('Player wins');

    } else if (getComputerChoice === 'scissors' && playerChoice === 'scissors') {
        console.log(' Draw');

    } else if (getComputerChoice === 'rock' && playerChoice === 'rock') {
        console.log(' Draw');
    } else{
        console.log("not working");
    }



}
const playerChoice = "rock"
const getComputerChoice = Computer()
console.log(playRound(playerChoice,getComputerChoice))
