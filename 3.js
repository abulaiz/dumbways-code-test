function cetak_gambar(n){
	let blank_space = [];
	for(let i = 0 ; i < n; i++) blank_space.push(" ");
	blank_space = JSON.stringify(blank_space);

	let lines = function(arr){
		let x = JSON.parse( blank_space );
		for(i in arr){
			x[arr[i]] = "*";
		}
		return x.join("");
	}

	const mid = Math.ceil(n/2) - 1;

	for(let i = 0; i < mid; i++){
		console.log( lines([mid, mid - i, mid + i]) );
	}

	let str_mid = "";
	for(let i = 0 ; i < n; i++) str_mid += "*";

	console.log(str_mid);


	for(let i = mid-1; i >= 0; i--){
		console.log( lines([mid, mid - i, mid + i]) );
	}	
}