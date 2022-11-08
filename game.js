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
	)}`; // make first letter capital.
	//returning an array where first element is code for who won and second is computer's choice
	if (playerSelection === "Rock" && computerSelection === "Paper") {
		return [0, computerSelection];
	} else if (playerSelection === "Rock" && computerSelection === "Scissor") {
		return [1, computerSelection];
	} else if (playerSelection === "Rock" && computerSelection === "Rock") {
		return [2, computerSelection];
	} else if (playerSelection === "Paper" && computerSelection === "Paper") {
		return [2, computerSelection];
	} else if (playerSelection === "Paper" && computerSelection === "Scissor") {
		return [0, computerSelection];
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return [1, computerSelection];
	} else if (playerSelection === "Scissor" && computerSelection === "Paper") {
		return [1, computerSelection];
	} else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
		return [2, computerSelection];
	} else if (playerSelection === "Scissor" && computerSelection === "Rock") {
		return [0, computerSelection];
	}
}

//main game logic
function game(playerChoice, computerChoice) {
	const resultCode = playRound(playerChoice, computerChoice); //play one round
	COMPUTER_CHOICE.textContent = resultCode[1];
	//update score and show who won
	if (resultCode[0] === 1) {
		playerScore++;
		PLAYER_SCORE.textContent = playerScore;
		RESULTS.textContent = "Round Won!";
	} else if (resultCode[0] === 0) {
		computerScore++;
		COMPUTER_SCORE.textContent = computerScore;
		RESULTS.textContent = "Round Lost";
	} else if (resultCode[0] === 2) {
		RESULTS.textContent = "Draw!";
	}
	//check if someone's score is 5, then show modal
	if (playerScore === 5 || computerScore === 5) {
		if (playerScore > computerScore) {
			GAME_RESULT_TEXT.textContent = "You Won!";
		} else {
			GAME_RESULT_TEXT.textContent = "You Lost!";
		}
		GAME_RESULT.classList.add("visible");
		SCORE_WRAPPER.classList.add("blurred");
		RESULTS.classList.add("blurred");
		BUTTONS_WRAPPER.classList.add("blurred");
	}
}

//Reset score
function resetScore() {
	playerScore = 0;
	computerScore = 0;
	PLAYER_SCORE.textContent = playerScore;
	COMPUTER_SCORE.textContent = computerScore;
	GAME_RESULT.classList.remove("visible");
	SCORE_WRAPPER.classList.remove("blurred");
	RESULTS.classList.remove("blurred");
	BUTTONS_WRAPPER.classList.remove("blurred");
}

//Click Handler
function clickHandler(e) {
	game(e.target.id, getComputerChoice());
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
const COMPUTER_CHOICE = document.createElement("p");
const GAME_RESULT = document.createElement("div");
const GAME_RESULT_TEXT = document.createElement("p");

//Select Elements
const WRAPPER = document.querySelector(".wrapper");

//For SCORE
SCORE_WRAPPER.classList.add("score");
SCORE_WRAPPER.appendChild(PLAYER_SCORE);
SCORE_WRAPPER.appendChild(COMPUTER_CHOICE);
SCORE_WRAPPER.appendChild(COMPUTER_SCORE);
PLAYER_SCORE.classList.add("player");
COMPUTER_SCORE.classList.add("computer");
PLAYER_SCORE.textContent = 0;
COMPUTER_SCORE.textContent = 0;

//For BUTTONS
ROCK_BUTTON.innerHTML = `<img id="rock" src="./assets/rock.png">`;
PAPER_BUTTON.innerHTML = `<img id="paper" src="./assets/paper.png">`;
SCISSOR_BUTTON.innerHTML = `<img id="scissor" src="./assets/scissor.png">`;
GAME_START.textContent = "Restart!";
BUTTONS_WRAPPER.classList.add("button-wrapper");
BUTTONS_WRAPPER.appendChild(ROCK_BUTTON);
BUTTONS_WRAPPER.appendChild(PAPER_BUTTON);
BUTTONS_WRAPPER.appendChild(SCISSOR_BUTTON);

//For RESULT
RESULTS.classList.add("result");
GAME_RESULT.classList.add("game-result");
GAME_RESULT.appendChild(GAME_RESULT_TEXT);
GAME_RESULT.appendChild(GAME_START);

//Append to WRAPPER
WRAPPER.appendChild(SCORE_WRAPPER);
WRAPPER.appendChild(BUTTONS_WRAPPER);
WRAPPER.appendChild(RESULTS);
WRAPPER.appendChild(GAME_RESULT);

//Event Listeners
ROCK_BUTTON.addEventListener("click", clickHandler);
PAPER_BUTTON.addEventListener("click", clickHandler);
SCISSOR_BUTTON.addEventListener("click", clickHandler);
GAME_START.addEventListener("click", resetScore);
