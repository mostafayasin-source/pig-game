// =============================================
// Grisspelet
// =============================================

// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0]; // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0; // Omgångspoäng för den aktiva spelaren
let activePlayer = 0; // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true; // Blir false när någon har vunnit

// ---------- 2. Element i DOM:en ----------

const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");

const current0 = document.querySelector("#current-0");
const current1 = document.querySelector("#current-1");

const dice1 = document.querySelector("#dice-1");
// "andra steget" const dice2 = document.querySelector("#dice-2");

const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

const name0 = document.querySelector("#name-0");
const name1 = document.querySelector("#name-1");

// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score0.textContent = 0;
  score1.textContent = 0;

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

  // class reset
  player0.classList.add("active");
  player1.classList.remove("active");

  // name must reset
  name0.textContent = "Spelare 1";
  name1.textContent = "Spelare 2";

  // when starting a new game, class must be removed from both players.
  player0.classList.remove("winner");
  player1.classList.remove("winner");
}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {
    // Invertera värdet av activePlayer
    activePlayer = 1 - activePlayer;
}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {}

// ---------- 4. Händelser ----------

// New Game button
btnNew.addEventListener("click", init);

// Initialize game on page load
init();
