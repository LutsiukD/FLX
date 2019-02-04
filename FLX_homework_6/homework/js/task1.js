var a = prompt('Enter a: ', 0);
var b = prompt('Enter b: ', 0);
var c = prompt('Enter c: ', 0);
var output;
if(a!==0&&!isNaN(a)&&a!==undefined&&!isNaN(b)&&b!==undefined&&!isNaN(c)&&c!==undefined){
	let d = b*b-4*a*c;
	if(d>0){
		let x1 = (-b+Math.sqrt(d))/(2*a);
		let x2 = (-b-Math.sqrt(d))/(2*a);
		output = `x1 = ${x1},  x2 = ${x2}`;
	}else if(d===0){
		let x = -(b/2*a);
		output = `x = ${x}`;
	}else{
		output = 'No solution';
	}
}else {
	output = 'Invalid data'; 
}

alert(output);
