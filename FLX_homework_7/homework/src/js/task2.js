const gameTemplate = (maxNumber, attempt, totalPrize, currentPrize) => `
Enter a number from 0 to ${maxNumber}
Attempts left: ${attempt}
Total prize: ${totalPrize}
Possible prize on current attempt: ${currentPrize}`;
var startGame = confirm('Do you want to play a game?');
var maxNumber = 5;
var totalPrize = 0;
var maxPrize = 10;
let playAllGameAgain = true;
do{
	if(startGame===false){
		alert('You did not become a millionaire, but can.');
		playAllGameAgain = false;
	}else{
		var playAgain = false;
		do{ 
			let currentPrizeRange = {
                3 : maxPrize,
                2 : maxPrize/2,
                1 : maxPrize/4
            }
            let secretNumber = Math.floor(Math.random() * (maxNumber+1));
            alert(secretNumber);
            for(let attempt = 3; attempt > 0; attempt--){
                let currentPrize = Math.floor(currentPrizeRange[attempt]);
                var gestNumber = prompt(gameTemplate(maxNumber, attempt, totalPrize, currentPrize), 0);
				if(parseInt(gestNumber)===secretNumber){
					totalPrize += currentPrize;
					if(confirm(`Congratulation! Your prize is: ${totalPrize}\n Do you want to continue?`)){
						maxPrize*=3;
						maxNumber*=2;
						playAgain = true;
					}else{
						playAgain = false;
					}
					break;
				}else if(attempt===1){
					playAgain = false;
					break;
				}
            }
		}while(playAgain===true)	
	}
	if(playAgain===false&&playAllGameAgain===true){
		alert(`Thank you for a game. Your prize is: ${totalPrize}$ `);
		if(confirm('Do you want to play again?')){
			maxPrize = 10;
			maxNumber = 5;
			totalPrize = 0;
		}else{
			startGame = false;
		}		
	}
}while(playAllGameAgain===true)