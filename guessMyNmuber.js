"use strict";

// Initialize variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let userScore = 20;
let highScore = 0;

// Helper function to update message
const setMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Helper function to reset game
const resetGame = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  userScore = 20;
  setMessage("Start guessing...");
  document.querySelector(".score").textContent = userScore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};

// Event listener for the "Check" button
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    // No input
    setMessage("🚫 No number!");
  } else if (guessNumber === secretNumber) {
    // Player wins
    setMessage("✅ Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (userScore > highScore) {
      highScore = userScore; // Update high score
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    // Wrong guess
    if (userScore > 1) {
      setMessage(guessNumber > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      userScore--;
      document.querySelector(".score").textContent = userScore;
    } else {
      setMessage("💥 You Lost!");
      document.querySelector(".score").textContent = "0";
    }
  }
});

// Event listener for the "Again" button
document.querySelector(".again").addEventListener("click", function () {
  resetGame();
});
