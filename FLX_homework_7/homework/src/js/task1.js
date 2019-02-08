var login = prompt('Enter your login: ', '');
if (login ==='User'||login ==='Admin'){
	var password = prompt("Enter your password: ", "");
	if(password===""||password==="null"){
		alert("Canceled.");
	}else{
		if(login==="User"){
			if(password==="UserPass"){
				if(new Date().getHours()<20){
					alert("Good day, dear User!");
				}else{
					alert("Good evening, dear User!");
				}
			}else{
				alert("Wrong password");
			}
		}else if(login==="Admin"){
			if(password==="RootPass"){
				if(new Date().getHours()<20){
					alert("Good day, dear Admin!");
				}else{
					alert("Good evening, dear Admin!");
				}
			}else{
				alert("Wrong password");
			}
		}
	}
}else{
	if(login===''||login===null){
		alert("Canceled.");
	}else if(login.length<4){
		alert("I don't know any users having name length less than 4 symbols");
	}else{
		alert("I don’t know you");
	}
}
