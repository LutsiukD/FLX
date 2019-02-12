function reverseNumber(number){
	let template = Math.abs(number).toString().split('').reverse().join('');
	return number>0? template: -template;
}

reverseNumber(12345);