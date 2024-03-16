// Event listeners for button clicks
document.getElementById('rock').addEventListener('click', playRound);
document.getElementById('paper').addEventListener('click', playRound);
document.getElementById('scissors').addEventListener('click', playRound);

// Game logic
function playRound(e) {
    const userChoice = e.target.id;
    const compChoice = getComputerChoice();
    const result = determineWinner(userChoice, compChoice);
    updateUI(userChoice, compChoice, result);
}

// Randomly generate computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Determine winner
function determineWinner(user, comp) {
    if (user === comp) {
        return 'It\'s a tie!';
    } else if ((user === 'rock' && comp === 'scissors') || 
               (user === 'paper' && comp === 'rock') ||
               (user === 'scissors' && comp === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Update UI with choices and result
function updateUI(user, comp, result) {
    document.getElementById('user-choice').textContent = user;
    document.getElementById('comp-choice').textContent = comp;
    document.getElementById('game-result').textContent = result;
    updateScore(result);
}

// Update score
function updateScore(result) {
    const score = document.getElementById('score');
    let currentScore = parseInt(score.textContent);
    if (result === 'You win!') {
        currentScore++;
    } else if (result === 'Computer wins!') {
        currentScore--;
    }
    score.textContent = currentScore;
}
