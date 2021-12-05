const str = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let ind = Math.floor(Math.random() * 3)
    let res = str[ind]
    return res
}



function playRound(playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase(), computerSelection = computerPlay()) {
    let res
    let ps = playerSelection
    let cs = computerSelection

    if (ps === cs) {
        res = 'It\'s a tie!'
    }else if ((ps===str[0]) && (cs===str[1])) {
        res = 'Paper beats Rock, You loose.'
    }else if ((ps===str[0]) && (cs===str[2])) {
        res = 'Rock beats Scissors, You win!.'
    }else if ((ps===str[1]) && (cs===str[2])) {
        res = 'Scissors beats Paper, You loose.'
    }else if ((ps===str[1]) && (cs===str[0])) {
        res = 'Paper beats Rock, You win!.'
    }else if ((ps===str[2]) && (cs===str[0])) {
        res = 'Rock beats Scissors, You loose.'
    }else if ((ps===str[2]) && (cs===str[1])) {
        res = 'Scissors beats Paper, You win!.'
    } else {
        res ="Please insert 'rock', 'paper' or 'scissors'" 
    }

    return res
}

function game() {
    let score

}
