const str = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let ind = Math.floor(Math.random() * str.length)
    let res = str[ind]
    
    return res
}
const sts = document.querySelector('#display span');

function playRound(playerSelection, computerSelection) {
    let winner;
    let ps = playerSelection;
    let cs = computerSelection;

    if (ps === cs) {
        sts.textContent = 'Match Status: It\'s a tie!'
        sts.setAttribute("style", "color: gray;"); 
        winner = 'none'
    }else if ((ps===str[0]) && (cs===str[1])) {
        sts.textContent = 'Match Status: Paper beats Rock, You lost the match.'
        sts.setAttribute("style", "color: red;"); 
        winner = 'computer'
    }else if ((ps===str[0]) && (cs===str[2])) {
        sts.textContent = 'Match Status: Rock beats Scissors, You won the match!'
        sts.setAttribute("style", "color: green;"); 
        winner = 'player'
    }else if ((ps===str[1]) && (cs===str[2])) {
        sts.textContent = 'Match Status: Scissors beats Paper, You lost the match.'
        sts.setAttribute("style", "color: red;"); 
        winner = 'computer'
    }else if ((ps===str[1]) && (cs===str[0])) {
        sts.textContent = 'Match Status: Paper beats Rock, You won the match!'
        sts.setAttribute("style", "color: green;"); 
        winner = 'player'
    }else if ((ps===str[2]) && (cs===str[0])) {
        sts.textContent = 'Match Status: Rock beats Scissors, You lost the match.'
        sts.setAttribute("style", "color: red;"); 
        winner = 'computer'
    }else if ((ps===str[2]) && (cs===str[1])) {
        sts.textContent = 'Match Status: Scissors beats Paper, You won the match!'
        sts.setAttribute("style", "color: green;"); 
        winner = 'player'
    }
    
    return winner
}
const buttons = document.querySelectorAll('#button');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const playAgain = document.querySelector('.playAgain');
playAgain.setAttribute("style", "display: none;");

let playerWins = 0;
let computerWins = 0;

const player = document.querySelector('#score .player');
const computer = document.querySelector('#score .computer');
const score =  document.querySelector('#score .score');

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', () => {
        let res = playRound(btn.getAttribute('class'), computerPlay())
        
        if (res === 'player') {
            playerWins += 1;
        } else if (res === 'computer') {
            computerWins += 1;
        }
        
        player.textContent = `Player: ${playerWins}`
        computer.textContent = `Computer: ${computerWins}`

        if ((playerWins === 5) || (computerWins === 5)) {
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            playAgain.setAttribute("style", "display: block;");
            if (playerWins > computerWins) {
                score.textContent = 'Congrats! You Won The Game!'
                score.setAttribute("style", "color: green;");
            }
            else if (computerWins > playerWins) {
                score.textContent = 'You Lost The Game. Try Again!'
                score.setAttribute("style", "color: red;");
            }
        }
            })
    }
        );
    
    playAgain.addEventListener('click', () => {
        playAgain.setAttribute("style", "display: none;");
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        score.textContent = '';
        sts.textContent = '';
        player.textContent = '';
        computer.textContent = '';
        playerWins = 0;
        computerWins = 0;
    })
