// =============================================
// Grisspelet
// =============================================


// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0];       // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0;        // Omgångspoäng för den aktiva spelaren
let activePlayer = 0;      // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true;      // Blir false när någon har vunnit


// ---------- 2. Element i DOM:en ----------



// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {

}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
    function getRandomInt(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
    }

    const playerCurrentScoreElement = document.getElementById(`current-${activePlayer}`);
    const dice1 = document.getElementById("dice-1");
    const dice2 = document.getElementById("dice-2");

    // Roll 1,2
    const rollValue1 = getRandomInt(1,6);
    const rollValue2 = getRandomInt(1,6);

    // Display Dice
    dice1.src = `img/dice-${rollValue1}.png`;
    dice2.src = `img/dice-${rollValue2}.png`;

    // Display Sum
    playerCurrentScoreElement.innerText = parseInt(playerCurrentScoreElement.innerText) + rollValue1 + rollValue2;
}

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {
    // Invertera värdet av activePlayer
    activePlayer = 1 - activePlayer;
}


// ---------- 4. Händelser ----------

init();
