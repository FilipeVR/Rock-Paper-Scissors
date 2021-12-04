const str = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let ind = Math.floor(Math.random() * 3)
    let res = str[ind]
    return res
}

function playRound(playerSelection, computerSelection) {
    let res
    if (typeof playerSelection !== 'string') {
        res = "This is not a text, please insert 'rock', 'paper' or 'scissors'"
    }
    let ps = playerSelection.toLowerCase()
    let cs = computerSelection

    if (ps === cs) {
        res = 'It\'s a tie, play again!'
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
        res ="please insert 'rock', 'paper' or 'scissors'" 
    }

    return res
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));