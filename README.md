# Rock Paper Scissor

## Description

This was made as a supplementary project for The Odin Project.

## Usage

### Installing

In order to play, just clone this repo, and run `index.html`
on any browser or just go to this link :-

### Folder structure

Here's a folder structure for a Pandoc document:

```
rock-paper-scissor-odin/     # Root directory.
|- assets/                   # Images
|- index.html                # Index
|- game.js                   # Game logic and DOM element creation here
|- style.css                 # Style
```

### game.js details

`getComputerChoice()`: This function randomly assigns a choice to CPU,
using a random number generator and returns the choice as a `string`.

`playRound(playerSelection, computerSelection)`: This function plays
a single round of RPS using `playerSelection` and `computerSelection`.
This function returns an `Array[]` of length 2. First element of array
is a number in inclusive range `0,1,2`. Where `0` means round lose,
`1` means round won and `2` means draw. The second element in array
is computer's choice for that round.

`game(playerChoice, computerChoice)`: This function is the main function
with the main game logic, It fires the `playRound` function, updates
score according to who won, and finally if anyone's score is 5, shows
result and a modal.

`resetScore()`: This function gets activated when, player clicks on
the restart button when modal opens. This resets the scores and starts
a new fresh game.
