//randomly assign a choice to computer
function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	if (randomNumber > 66) {
		return "Rock";
	} else if (randomNumber > 33) {
		return "Paper";
	} else {
		return "Scissor";
	}
}

//play one round
function playRound(playerSelection, computerSelection) {
	playerSelection = `${playerSelection[0].toUpperCase()}${playerSelection.slice(
		1
	)}`;

	if (playerSelection === "Rock" && computerSelection === "Paper") {
		return 0;
	} else if (playerSelection === "Rock" && computerSelection === "Scissor") {
		return 1;
	} else if (playerSelection === "Rock" && computerSelection === "Rock") {
		return 2;
	} else if (playerSelection === "Paper" && computerSelection === "Paper") {
		return 2;
	} else if (playerSelection === "Paper" && computerSelection === "Scissor") {
		return 0;
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return 1;
	} else if (playerSelection === "Scissor" && computerSelection === "Paper") {
		return 1;
	} else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
		return 2;
	} else if (playerSelection === "Scissor" && computerSelection === "Rock") {
		return 0;
	}
}

//main game logic
function game(playerChoice, computerChoice) {
	const resultCode = playRound(playerChoice, computerChoice);
	if (resultCode === 1) {
		playerScore++;
		PLAYER_SCORE.textContent = playerScore;
		RESULTS.textContent = "Round Won!";
	} else if (resultCode === 2) {
		computerScore++;
		COMPUTER_SCORE.textContent = computerScore;
		RESULTS.textContent = "Round Lost";
	}
	if (playerScore === 5 || computerScore === 5) {
		if (playerScore > computerScore) {
			RESULTS.textContent = "You Won!";
		} else {
			RESULTS.textContent = "You Lost!";
		}
		resetScore();
	}
}

//Reset score
function resetScore() {
	playerScore = 0;
	computerScore = 0;
	PLAYER_SCORE.textContent = playerScore;
	COMPUTER_SCORE.textContent = computerScore;
}

//Click Handler
function clickHandler(e) {
	game(e.target.textContent, getComputerChoice());
}

//Global game score counter
let playerScore = 0;
let computerScore = 0;

//Create Elements
const ROCK_BUTTON = document.createElement("button");
const PAPER_BUTTON = document.createElement("button");
const SCISSOR_BUTTON = document.createElement("button");
const RESULTS = document.createElement("div");
const BUTTONS_WRAPPER = document.createElement("div");
const GAME_START = document.createElement("button");
const SCORE_WRAPPER = document.createElement("div");
const PLAYER_SCORE = document.createElement("div");
const COMPUTER_SCORE = document.createElement("div");

//Select Elements
const WRAPPER = document.querySelector(".wrapper");

//For SCORE
SCORE_WRAPPER.classList.add("score");
SCORE_WRAPPER.appendChild(PLAYER_SCORE);
SCORE_WRAPPER.appendChild(COMPUTER_SCORE);
PLAYER_SCORE.classList.add("player");
COMPUTER_SCORE.classList.add("computer");
PLAYER_SCORE.textContent = 0;
COMPUTER_SCORE.textContent = 0;

//For BUTTONS
ROCK_BUTTON.textContent = "Rock";
PAPER_BUTTON.textContent = "Paper";
SCISSOR_BUTTON.textContent = "Scissor";
BUTTONS_WRAPPER.classList.add("button-wrapper");
BUTTONS_WRAPPER.appendChild(ROCK_BUTTON);
BUTTONS_WRAPPER.appendChild(PAPER_BUTTON);
BUTTONS_WRAPPER.appendChild(SCISSOR_BUTTON);

//For RESULT
RESULTS.classList.add("result");

//Append to WRAPPER
WRAPPER.appendChild(SCORE_WRAPPER);
WRAPPER.appendChild(BUTTONS_WRAPPER);
WRAPPER.appendChild(RESULTS);

//Event Listeners
ROCK_BUTTON.addEventListener("click", clickHandler);
PAPER_BUTTON.addEventListener("click", clickHandler);
SCISSOR_BUTTON.addEventListener("click", clickHandler);
