import playGame from './playGame';
import '../less/main.less';

let rounds = 0;
let myWins = 0;
let compWins = 0;
let myMove;
let compMove;
let turns = ['Rock','Paper','Scissors'];

const results = document.querySelector('.results');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset-btn');	

resetBtn.onclick = () => {
	resetData();
}
rockBtn.onclick = () => {
	console.log('log');
	myMove = 'Rock';
	playGame();
}
paperBtn.onclick = () => {
	console.log('log');
	myMove = 'Paper';
	playGame();
}
scissorsBtn.onclick = () => {
	console.log('log');
	myMove = 'Scissors';
	playGame();
}

const resetData = () => {
	rounds = 0;
	myWins = 0;
	compWins = 0;
	myMove = 0;
	compMove = 0;
	results.innerHTML = '';
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
	results.appendChild(logNode);
}



