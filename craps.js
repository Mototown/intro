// Function to roll a single die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the Craps game
function playCraps() {
    // Roll two dice
    const die1 = rollDie();
    const die2 = rollDie();

    // Calculate the total
    const total = die1 + die2;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You rolled ${die1} + ${die2} = ${total}`;

    // Check if the player wins or loses
    if (total === 7 || total === 11) {
        resultDiv.textContent += ' - You win!';
    } else if (total === 2 || total === 3 || total === 12) {
        resultDiv.textContent += ' - You lose!';
    } else {
        resultDiv.textContent += ' - Roll again!';
    }
}
;
