const str = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let ind = Math.floor(Math.random() * str.length)
    let res = str[ind]
    
    return res
}

function playRound(playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase(), computerSelection = computerPlay()) {
    let res
    let winner
    let ps = playerSelection
    let cs = computerSelection

    if (ps === cs) {
        res = 'It\'s a tie!'
        console.log(res)
        winner = 'none'
    }else if ((ps===str[0]) && (cs===str[1])) {
        res = 'Paper beats Rock, You loose.'
        console.log(res)
        winner = 'computer'
    }else if ((ps===str[0]) && (cs===str[2])) {
        res = 'Rock beats Scissors, You win!.'
        console.log(res)
        winner = 'player'
    }else if ((ps===str[1]) && (cs===str[2])) {
        res = 'Scissors beats Paper, You loose.'
        console.log(res)
        winner = 'computer'
    }else if ((ps===str[1]) && (cs===str[0])) {
        res = 'Paper beats Rock, You win!.'
        console.log(res)
        winner = 'player'
    }else if ((ps===str[2]) && (cs===str[0])) {
        res = 'Rock beats Scissors, You loose.'
        console.log(res)
        winner = 'computer'
    }else if ((ps===str[2]) && (cs===str[1])) {
        res = 'Scissors beats Paper, You win!.'
        console.log(res)
        winner = 'player'
    } else {
        res ="Please insert 'rock', 'paper' or 'scissors'"
        console.log(res)
        winner = 'error' 
    }

    return winner
}

function game() {
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
}