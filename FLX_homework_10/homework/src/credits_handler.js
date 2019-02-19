function userCard(index) {
	let balance = 100,
	transactionLimit = 100,
	historyLogs = [],
	key = index,
	taxa = 0.005;
	
	const createHistoryLog = (type, amount) => {
		historyLogs.push({operationType: type, credits: amount, operationTime: new Date().toLocaleString('en-GB')})
	}

	return {
		getCardOptions() {
			return {key, balance, transactionLimit, historyLogs};
		},
		putCredits(amount) {
			balance += amount;
			createHistoryLog('Received credits', amount);
		},
		takeCredits(amount) {
			if(amount <= balance && amount <= transactionLimit) {
				balance -= amount;
				createHistoryLog('Withdrawal of credits', amount);
			}
		},
		setTransactionLimit(amount) {
			transactionLimit = amount;
			createHistoryLog('Transaction limit change', amount) 
		},
		transferCredits(amount, card) {
			let taxedAmount = amount + amount * taxa;
			if(taxedAmount <= balance && amount <= transactionLimit) {
				this.takeCredits(taxedAmount);
				card.putCredits(amount);
			} else {
				console.log('Invalid amount! Check your balance and transaction limit.');
			}
		}
	};	
}

class UserAccount {
	constructor(name) {
		this.name = name,
		this.cards = [],
		this.maxCards = 3
	}
	addCard(index) {
		if(this.cards.length < this.maxCards) {
			this.cards.push(userCard(this.cards.length + 1));
		} else {
			console.log(`You can not have more than three cards!`);
        }
	}
	getCardByKey(key) {
		return this.cards[key - 1];
	}
}