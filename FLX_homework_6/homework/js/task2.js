var amount = parseFloat(prompt('Enter amount:', '0'));
var discount = parseFloat(prompt('Enter discount:', '0'));
var output;
if(validateInput(amount,discount)){
	let priceWithDiscount = amount-amount*(discount/100);
	let saved = amount-priceWithDiscount;
	output =`Price without discount: ${+amount.toFixed(2)} 
	\nDiscount: ${+discount.toFixed(2)}% 
    \nPrice with discount: ${+priceWithDiscount.toFixed(2)}
    \nSaved: ${+saved.toFixed(2)}
	`;  
}else{

	output = 'Invalid data'; 
}
alert(output);

function validateInput(amount,discount){
	if(amount>=0&&amount<=9999999&&!isNaN(amount)&&amount!==undefined){
		if(discount>=0&&discount<=99&&!isNaN(discount)&&amount!==undefined){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}



