const playGame = () => {
	if(myWins < 3 && compWins < 3) {
		compMove = turns[randomNumber(0,2)];
		if(myMove === 'Scissors' && compMove === 'Paper' ||
		   myMove === 'Paper' && compMove === 'Rock' ||
		   myMove === 'Rock' && compMove === 'Scissors') {
			myWins++;
		    rounds++;
		    printLogs('WON');
		} else if(myMove === 'Paper' && compMove === 'Scissors' ||
		    myMove === 'Rock' && compMove === 'Paper' ||
		    myMove === 'Scissors' && compMove === 'Rock') {
			compWins++;
		    rounds++;
		    printLogs('LOST');
		} else if(myMove === compMove) {
			rounds++;
			printLogs('played a DRAW!');
		}
	} 

	if(myWins === 3  || compWins === 3) {
		if(myWins > compWins) {
			setTimeout(()=> {
				alert('Congratulation! You\'ve WON!');
				resetData();
			}, 300);
		} else {
			setTimeout(()=> {
				alert('Congratulation! You\'ve LOSED!');
				resetData();
			}, 300);
		}
	}
}