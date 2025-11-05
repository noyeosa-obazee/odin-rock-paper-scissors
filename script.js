function getComputerChoice() {

   let randomNumber = Math.floor(Math.random() * 3);

   const computerDecision = randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
   
   return computerDecision;
}

function getHumanChoice() {
    const humanDecision = prompt('Enter your choice:');

    return humanDecision;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()

    if (humanChoice !== computerChoice) {

    if (humanChoice === 'rock') {

        if (computerChoice === 'paper') { 
            console.log('You lose! Paper beats Rock!')
            computerScore++
         } 

        else { 
            console.log('You win! Rock beats Scissors!')
            humanScore++
         }
        

    }

    else if (humanChoice === 'paper') {

         if (computerChoice === 'scissors') { 
            console.log('You lose! Scissors beats Paper!')
            computerScore++
         } 

        else { 
            console.log('You win! Paper beats Rock!')
            humanScore++
         }

    }

    else {
        if (computerChoice === 'rock') { 
            console.log('You lose! Rock beats Scissors!')
            computerScore++
         } 

        else { 
            console.log('You win! Scissors beats Paper!')
            humanScore++
         }
    }

}

else {
    console.log('Its a tie')
}

// console.log('Human score : ' + humanScore + ' , Computer score : ' + computerScore)


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection)
        getHumanChoice()
    }
}

playGame()
