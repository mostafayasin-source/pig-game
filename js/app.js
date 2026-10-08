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
const dice2 = document.querySelector("#dice-2");

const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

const name0 = document.querySelector("#name-0");
const name1 = document.querySelector("#name-1");

const player0 = document.querySelector(".player-0-panel");
const player1 = document.querySelector(".player-1-panel");

// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score0.textContent = 0;
  score1.textContent = 0;

  // class reset
  player0.classList.add("active");
  player1.classList.remove("active");

  // name must reset
  name0.textContent = "Spelare 1";
  name1.textContent = "Spelare 2";

  // reset counter
  current0.textContent = 0;
  current1.textContent = 0;

  // when starting a new game, class must be removed from both players.
  player0.classList.remove("winner");
  player1.classList.remove("winner");

  dice1.style.display = "none";
  dice2.style.display = "none";
}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
  if (!isPlaying) {
    return;
  }
  function getRandomInt(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  const playerCurrentScoreElement = document.getElementById(
    `current-${activePlayer}`,
  );

  // Roll 1,2
  const rollValue1 = getRandomInt(1, 7);
  const rollValue2 = getRandomInt(1, 7);

  dice1.style.display = "block";
  dice2.style.display = "block";

  // Display Dice
  dice1.src = `img/dice-${rollValue1}.png`;
  dice2.src = `img/dice-${rollValue2}.png`;

  // Display Sum
  if ((rollValue1 === 1 || rollValue2 === 1) || (rollValue1 == 6 && rollValue2 == 6)) {
    roundScore = 0;
    playerCurrentScoreElement.textContent = 0;
    switchPlayer();
  } else {
    roundScore += rollValue1 + rollValue2;
    playerCurrentScoreElement.textContent = roundScore;
  }
}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {
  // Invertera värdet av activePlayer
  activePlayer = 1 - activePlayer;

  player0.classList.toggle("active");
  player1.classList.toggle("active");
}

// ---------- 4. Händelser ----------

// New Game button
btnNew.addEventListener("click", init);
btnRoll.addEventListener("click", rollDice);

// Initialize game on page load
init();
