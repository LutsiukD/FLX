function addOne(x){
	return x+1;
}
function pipe(){
	var result = arguments[0];
	var template;
	for(var i=1; i<arguments.length; i++){
		template = addOne(result);
		result = template;
	}
	return result;
}
pipe(1, addOne, addOne);