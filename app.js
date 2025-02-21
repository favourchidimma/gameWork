// Access DOM elements
const newGameButton = document.getElementById('new-game');
const submitGuessButton = document.getElementById('submit-guess');
const numBox = document.getElementById('numbox');
const scoreValue = document.getElementById('scoreValue');
const highScoreValue = document.getElementById('highscoreValue');
const feedback = document.querySelector('.feedback');
const randomNumberElement = document.querySelector('.random-number p');

// Initialize game variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function to check user's guess
function checkGuess() {
  const userGuess = parseInt(numBox.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
    feedback.textContent = 'Please enter a number between 1 and 20!';
  } else if (userGuess === secretNumber) {
    feedback.textContent = 'Correct!';
    scoreValue.textContent = score;
    randomNumberElement.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreValue.textContent = highScore;
    }
  } else if (userGuess > secretNumber) {
    feedback.textContent = 'Too high!';
    score--;
    scoreValue.textContent = score;
  } else {
    feedback.textContent = 'Too low!';
    score--;
    scoreValue.textContent = score;
  }
  numBox.value = '';
}

// Function to start a new game
function newGame() {
  highScore = parseInt(highScoreValue.textContent);
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreValue.textContent = score;
  feedback.textContent = '';
  randomNumberElement.textContent = '?';
  numBox.value = '';
}


// Add event listeners
submitGuessButton.addEventListener('click', checkGuess);
newGameButton.addEventListener('click', newGame);
