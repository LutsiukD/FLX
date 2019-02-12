function isInteger(data){
	if(typeof data==='number' && (data%1)===0) {
      return true;   
	}else{
		return false;
	}
}

isInteger(-5);
