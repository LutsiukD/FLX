let rounds = 0;
let myWins = 0;
let compWins = 0;
let myMove;
let compMove;
let turns = ['Role','Paper','Scissors'];

const results = document.querySelector('results');

const rockBtn = document.querySelector('rock');
const paperBtn = document.querySelector('paper');
const csissorsBtn = document.querySelector('scissors');
const resetBtn = document.querySelector('reset-btn');

resetBtn.onclick = () => resetData();
rockBtn.onclick = () => {
	myMove = 'Rock';
	playGame();
}
paperBtn.onclick = () => {
	myMove = 'Paper';
	
}
scissorsBtn.onclick = () => {
	myMove = 'Scissors';
	playGame();
}


const randomNumber = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

const printLogs = (current) => {
	let template = `“Round ${rounds},  ${myMove} vs. ${compMove}, You’ve ${current}!`;
	let logNode = document.createElement('div');
	logNode.classList.add('log');
	logNode.innerHTML = template;
	result.appendCild(logNode);
}

const resetData = () => {
	let rounds = 0;
	let myWins = 0;
	let compWins = 0;
	let myMove = 0;
	let compMove = 0;
	reset.innerHTML = '';
}


