function is_qualified(str){
	if(str.length != 6)
		return false;

	const patterns = [
		{formatter : "0123456789", includes : false},
		{formatter : "aiueo", includes : true},
		{formatter : "bcDF", includes : false},
		{formatter : "\r\n\t\f\ ", includes : false},
		{formatter : "AIUEO ", includes : true},
		{formatter : ",. ", includes : false},
	];

	for(let i in patterns) 
		if( patterns[i].formatter.includes(str[i]) !=  patterns[i].includes)
			return false;

	return true;
}