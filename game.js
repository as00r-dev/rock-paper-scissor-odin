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

function game() {
	for (let i = 0; i < 5; i++) {
		const playerChoice = prompt("Choose between Rock, Paper or Scissor.");
		console.log(playRound(playerChoice, getComputerChoice()));
	}
}
