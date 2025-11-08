const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const result = document.querySelector('#result');
const scoreKeeper = document.querySelector('#scores');
const choices = document.querySelector('#choices');
const finalResult = document.querySelector('#final-result');
finalResult.style.display = 'none';

let humanScore = 0;
let computerScore = 0;
let numberOfTies = 0;

function playGame (e) {
    playRound(e.target.textContent.toLowerCase(), getComputerChoice())
}

rockBtn.addEventListener('click', playGame)
paperBtn.addEventListener('click', playGame)
scissorsBtn.addEventListener('click', playGame)

function getComputerChoice() {

   let randomNumber = Math.floor(Math.random() * 3);

   const computerDecision = randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
   
   return computerDecision;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice !== computerChoice) {

    if (humanChoice === 'rock') {

        if (computerChoice === 'paper') { 

            ++computerScore;
            result.textContent = 'You lose! Paper beats Rock!';
           
            
         } 

        else { 

              ++humanScore;
              result.textContent = 'You win! Rock beats Scissors!';
          
         }
        

    }

    else if (humanChoice === 'paper') {

         if (computerChoice === 'scissors') { 

            ++computerScore;
            result.textContent =  'You lose! Scissors beats Paper!';
            
         } 

        else { 
            
            ++humanScore;
            result.textContent = 'You win! Paper beats Rock!';
         }

    }

    else {

        if (computerChoice === 'rock') { 
           
            ++computerScore;
            result.textContent = 'You lose! Rock beats Scissors!';
         } 

        else { 
            
            ++humanScore;
            result.textContent = 'You win! Scissors beats Paper!';
         }
    }

   scoreKeeper.textContent = `Your score : ${humanScore }, Computer score : ${computerScore}`
   

}

else {

    ++numberOfTies;
    result.textContent ='Its a tie';
}

if (computerScore === 5 || humanScore === 5) { 
    finalResult.style.display = 'inline';
    rockBtn.removeEventListener('click', playGame);
    paperBtn.removeEventListener('click', playGame);
    scissorsBtn.removeEventListener('click', playGame);
}

choices.textContent = `Your choice : ${humanChoice},  Computer choice : ${computerChoice}`;
const winnerMessage = computerScore > humanScore ? 'Computer wins!' : humanScore > computerScore ? 'You win!' : 'Its a tie!';
finalResult.textContent = `Computer score: ${computerScore}, Your score: ${humanScore}, Ties: ${numberOfTies} : ${winnerMessage}`;
}





    




