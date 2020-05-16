function removeDoubleChar(str){
	let tmp = {};
	let ret = "";
	for(let i in str){
		if(tmp[str[i]] == undefined){
			tmp[str[i]] = true;
			ret += str[i];
		}
	}
	return ret;
}