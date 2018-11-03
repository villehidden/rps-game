let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.getElementById('.score_board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + ' beats ' + computerChoice + '. You win!';
    if (userScore == 5) {
        result_p.innerHTML = 'You beat the computer. Congratulations!';
        userScore = 0;
        computerScore = 0;
    }
}

function lose (userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + ' loses to ' + computerChoice + '. You lose!';
    if (computerScore == 5) {
        result_p.innerHTML = 'Computer beats the player. Try again!';
        userScore = 0;
        computerScore = 0;
    }
}

function draw (userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 'It\'s a draw!';
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;           
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;   
    }
}

function main() {
    rock_div.addEventListener('click', () => { game('rock') })
    paper_div.addEventListener('click', () => { game('paper') })
    scissors_div.addEventListener('click', () => { game('scissors') })
}

main();