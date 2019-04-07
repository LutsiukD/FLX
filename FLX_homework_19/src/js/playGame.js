const playGame = () => {
	if(myWins < 3 && compWins < 3) {
		compMove = turns[randomNumber(0,2)];
		if(myMove === 'Scissors' && compMove === 'Paper' ||
		   myMove === 'Paper' && compMove === 'Rock' ||
		   myMove === 'Rock' && compMove === 'Scissors') {
			myWins++;
		    rounds++;
		    printLogs('WON');
		}
		if(myMove === 'Paper' && compMove === 'Scissors' ||
		   myMove === 'Rock' && compMove === 'Paper' ||
		   myMove === 'Scissors' && compMove === 'Rock') {
			myWins++;
		    rounds++;
		    printLogs('LOST');
		}
	} else {
		if(myWins > compWins) {
			alert('Congratulation! You\'ve WON!')
			resetData();
		} else {
			alert('Unfortunately You\'ve LOSED!')
			resetData();
		}
	}
}