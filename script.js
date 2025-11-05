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
let numberOfTies = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()

    if (humanChoice !== computerChoice) {

    if (humanChoice === 'rock') {

        if (computerChoice === 'paper') { 

            computerScore++;
            return 'You lose! Paper beats Rock!';
            
         } 

        else { 

              humanScore++;
              return 'You win! Rock beats Scissors!';
          
         }
        

    }

    else if (humanChoice === 'paper') {

         if (computerChoice === 'scissors') { 

            computerScore++;
            return 'You lose! Scissors beats Paper!';
            
         } 

        else { 
            
            humanScore++;
            return 'You win! Paper beats Rock!';
         }

    }

    else {

        if (computerChoice === 'rock') { 
           
            computerScore++;
            return 'You lose! Rock beats Scissors!';
         } 

        else { 
            
            humanScore++;
            return 'You win! Scissors beats Paper!';
         }
    }

}

else {

    numberOfTies++;
    return 'Its a tie';
}

}

function playGame() {

    let computerSelection;
    let humanSelection;

    for (let i = 0; i < 5; i++) {
        
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        console.log(`Computer choice : ${computerSelection}, Your choice : ${humanSelection} - ${playRound(humanSelection, computerSelection)}`);
       
    }

    const winnerMessage = computerScore > humanScore ? 'Computer wins!' : humanScore > computerScore ? 'You win!' : 'Its a tie!';

    console.log(`Computer score: ${computerScore}, Your score: ${humanScore}, Ties - ${numberOfTies} : ${winnerMessage}`);
}

playGame();

