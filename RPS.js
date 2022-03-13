const str = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let ind = Math.floor(Math.random() * str.length)
    let res = str[ind]
    
    return res
}
const sts = document.querySelector('#display span');

function playRound(playerSelection, computerSelection) {
    let res;
    let winner;
    let ps = playerSelection;
    let cs = computerSelection;

    if (ps === cs) {
        sts.textContent = 'Game Status: It\'s a tie!' 
        winner = 'none'
    }else if ((ps===str[0]) && (cs===str[1])) {
        sts.textContent = 'Game Status: Paper beats Rock, You lost the match.' 
        winner = 'computer'
    }else if ((ps===str[0]) && (cs===str[2])) {
        sts.textContent = 'Game Status: Rock beats Scissors, You won the match!' 
        winner = 'player'
    }else if ((ps===str[1]) && (cs===str[2])) {
        sts.textContent = 'Game Status: Scissors beats Paper, You lost the match.' 
        winner = 'computer'
    }else if ((ps===str[1]) && (cs===str[0])) {
        sts.textContent = 'Game Status: Paper beats Rock, You won the match!' 
        winner = 'player'
    }else if ((ps===str[2]) && (cs===str[0])) {
        sts.textContent = 'Game Status: Rock beats Scissors, You lost the match.' 
        winner = 'computer'
    }else if ((ps===str[2]) && (cs===str[1])) {
        sts.textContent = 'Game Status: Scissors beats Paper, You won the match!' 
        winner = 'player'
    }
    
    return winner
}
const buttons = document.querySelectorAll('button');

let playerWins = 0;
let computerWins = 0;

const player = document.querySelector('#score .player');
const computer = document.querySelector('#score .computer');
const score =  document.querySelector('#score .score');

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', () => {
        let res = playRound(btn.getAttribute('class'), computerPlay())
        console.log(res);
        if (res === 'player') {
            playerWins += 1;
        } else if (res === 'computer') {
            computerWins += 1;
        }
        
        player.textContent = `Player: ${playerWins}`
        computer.textContent = `Computer: ${computerWins}`

        if ((playerWins === 5) || (computerWins === 5)) {
            if (playerWins > computerWins) {
                score.textContent = 'Congrats! You Won The Game!'
            }
            else if (computerWins > playerWins) {
                score.textContent = 'You Lost The Game. Try Again!'
            }
        }
            })
    }
        );


/*function game() {
    let score
    let playerWins = 0
    let computerWins = 0
    let counter = 0
    for (let i = 0; i < 5; i++) {
        let res = playRound()
        if (res === 'player') {
            playerWins += 1;
        } else if (res === 'computer') {
            computerWins += 1;
        } else if (res === 'error') {
            computerWins = 666;
            break;
        } else {
            playerWins += 0;
            computerWins += 0;
        }
        counter += 1;
        console.log(`round ${i+1}`);
    }

    if (playerWins > computerWins) {
        score = `You win! In ${counter} rounds: Player ${playerWins} vs ${computerWins} Computer, with ${counter-(playerWins+computerWins)} Ties.`
    } else if ((playerWins > 0) && (playerWins < 2)) {
        score = `You loose. In ${counter} rounds: Player ${playerWins} vs ${computerWins} Computer, with ${counter-(playerWins+computerWins)} Ties.`
    } else if(playerWins === computerWins){
        score = `Wow, it's a tie! In ${counter} rounds: Player ${playerWins} vs ${computerWins} Computer, with ${counter-(playerWins+computerWins)} Ties. Play Again!`
    } else {
        score = 'error'
    }

    return score
}*/