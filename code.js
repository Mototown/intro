</mo>
function initGame() {
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', playCraps);
}
function playCraps() {
    const resultDisplay = document.getElementById('result');
    const die1 = rollDie();
    const die2 = rollDie();
    const sum = die1 + die2;
    resultDisplay.innerHTML = `You rolled: ${die1} and ${die2}. Sum: ${sum}.<br>`;
    if (sum === 7 || sum === 11) {
        resultDisplay.innerHTML += 'CRAPS – you lose!';
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultDisplay.innerHTML += 'You won!';
    } else {
        resultDisplay.innerHTML += 'You pushed!';
    }
}
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}
initGame();
