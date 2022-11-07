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
		return "You Lose! Paper beats Rock.";
	} else if (playerSelection === "Rock" && computerSelection === "Scissor") {
		return "Win! Rock beats Scissor.";
	} else if (playerSelection === "Rock" && computerSelection === "Rock") {
		return "Its a Draw.";
	} else if (playerSelection === "Paper" && computerSelection === "Paper") {
		return "Its a Draw.";
	} else if (playerSelection === "Paper" && computerSelection === "Scissor") {
		return "You Lose! Scissor beats Paper.";
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return "You Win! Paper beats Scissor.";
	} else if (playerSelection === "Scissor" && computerSelection === "Paper") {
		return "You Win! Scissor beats Rock.";
	} else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
		return "Its a Draw.";
	} else if (playerSelection === "Scissor" && computerSelection === "Rock") {
		return "You Lose! Rock beats Scissor.";
	}
}

//main game logic
function game() {}

//clickHandler function definition
function clickHandler(e) {
	RESULTS.textContent = playRound(e.target.textContent, getComputerChoice());
}

//Create Elements
const ROCK_BUTTON = document.createElement("button");
const PAPER_BUTTON = document.createElement("button");
const SCISSOR_BUTTON = document.createElement("button");
const RESULTS = document.createElement("div");
const BUTTONS_WRAPPER = document.createElement("div");

//Select Elements
const WRAPPER = document.querySelector(".wrapper");

//For BUTTONS
ROCK_BUTTON.textContent = "Rock";
PAPER_BUTTON.textContent = "Paper";
SCISSOR_BUTTON.textContent = "Scissor";

//For BUTTONS_WRAPPER
BUTTONS_WRAPPER.classList.add("button-wrapper");
BUTTONS_WRAPPER.appendChild(ROCK_BUTTON);
BUTTONS_WRAPPER.appendChild(PAPER_BUTTON);
BUTTONS_WRAPPER.appendChild(SCISSOR_BUTTON);

//For RESULT
RESULTS.classList.add("result");

//For WRAPPER
WRAPPER.appendChild(BUTTONS_WRAPPER);
WRAPPER.appendChild(RESULTS);

//Event Listeners
ROCK_BUTTON.addEventListener("click", clickHandler);
PAPER_BUTTON.addEventListener("click", clickHandler);
SCISSOR_BUTTON.addEventListener("click", clickHandler);
