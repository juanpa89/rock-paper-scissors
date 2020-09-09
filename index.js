function computerPlay () {
    //Create a variable that generates random number from 0 to 2.
    const random = Math.floor(Math.random() * 3);
    //Create a variable that will the computer choice.
    let computerChoice = '';
    //Assign a either rock, paper, or scissors dependeing on the number.
    if (random == 0) {
        computerChoice = 'ROCK';
    } else if (random == 1) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS'
    }
    //return that number.
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    //Div that will be placed to anounce winner of every round.
    const roundWinner = document.querySelector('#roundWinner');
    //Make a winning delcaration variable.
    const playerWon = `You Win! ${playerSelection} beats ${computerSelection}`;
    //MAke a loosing declaration variable.
    const playerLost = `You Lose! ${computerSelection} beats ${playerSelection}`;                //MAke a tie delcaration variable.
    const tie = `It's a Tie!`
    //Check that player selection is rock, paper or scissors.
    //Checks who won:
    //if playerSelection is rock:
    //it looses against paper. Declare the loosing and add score.
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {                    
        pcScore += 1;
        roundWinner.innerText = playerLost;
        //wins agains scissors. Declare the winner and add score.
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        userScore += 1;
        roundWinner.innerText = playerWon;
    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
         roundWinner.innerText = tie;
    }
    //if playerSelection is paper: 
    //looses agains scissors. Declare the loosing and add score.
    if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        pcScore += 1;
        roundWinner.innerText = playerLost;
        //wins agains rock. Declare the winner and add score.
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        userScore += 1;
        roundWinner.innerText = playerWon;
    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        roundWinner.innerText = tie;
    }
    //if playerSelection is scissors:
    //looses agains rock Declare the loosing and add score.
    if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        pcScore += 1;
        roundWinner.innerText = playerLost;                    //wins agains paper. Declare the winner and add score
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        userScore += 1;
        roundWinner.innerText = playerWon;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'){
        roundWinner.innerText = tie;
    }
} 

async function playGame () {
    let computerSelection;
    //Get computer Selection.
    computerSelection = computerPlay();
    //Make it play 1 round and log it.
    playRound(playerSelection, computerSelection);
    scoreBoard();
    await new Promise(r => setTimeout(r, 2500));
    checkWinner();
    resetGame();
    resetRound();
}


//Make 2 variable to hold score, one for user, one for pc.
let userScore = 0;
let pcScore = 0;

//Get input from User.
function getInput (choise) {
    playerSelection = choise;
}

function resetRound () {
    if (playerSelection === 'ROCK') {
        rock.classList.remove('chosen');
    } else if (playerSelection === 'PAPER') {
        paper.classList.remove('chosen');
    } else {
        scissors.classList.remove('chosen');
    }
    playerSelection = '';
    const roundWinner = document.querySelector('#roundWinner');
    roundWinner.innerText = '';
}

function checkWinner () {
    const winner = document.querySelector('#winner');
    const playerWins = `You Win!`;
    const playerLoses = 'You Loose';
    const score = document.querySelector('#score');
    if (userScore + pcScore == 5) {
        if (userScore > pcScore) {
            winner.innerText = playerWins;
            score.innerText = `Player: ${userScore}, Computer: ${pcScore}`;
        } else {
            winner.innerText = playerLoses;
            score.innerText = `Player: ${userScore}, Computer: ${pcScore}`;
        }
    }
}

function resetGame () {
    if (userScore + pcScore == 5) {
        const playAgain = document.querySelector('.playAgain');
        const playagainP = document.querySelector('#playAgain');
        const buttonYes = playAgain.appendChild(document.createElement('button')); 
        const choices = document.querySelector('.choises');
        const game = document.querySelector('.game');
        //Add a Text asking if play again.
        playagainP.innerText = `Would you like to play again?`
        //Add a buttons for yes.
        buttonYes.innerText = 'YES';
        buttonYes.addEventListener('click', () => {
            location.reload();
        })
        buttonYes.setAttribute('id', 'yesButton');
        game.removeChild(choices);
        game.removeChild(document.querySelector('#Choose'));
    }
}

//Show Score:
function scoreBoard () {
    const scoreBoard = document.querySelector('.scoreboard');
    const score = `Computer: ${pcScore} User: ${userScore}`;
    scoreBoard.innerText = score;
}

//Player Selection:
let playerSelection = '';

//Choices:
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

const choices = [rock, paper, scissors];
const choicesStrings = ['ROCK', 'PAPER', 'SCISSORS']



//Events:
rock.addEventListener('click', () => {
    getInput('ROCK');
    rock.classList.add('chosen');
    playGame();
});
paper.addEventListener('click', () => {
    getInput('PAPER');
    paper.classList.add('chosen');
    playGame();
});
scissors.addEventListener('click', () => {
    getInput('SCISSORS');
    scissors.classList.add('chosen');
    playGame();
});

