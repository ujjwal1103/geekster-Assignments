	console.log("dec_24 Assignment No 2")
    //Take n from the user and print first n prime numbers.
	var n = parseInt(prompt("enter number "))
	var bool = 0;
	for(var i = 2; i <= n; i = i+1){
		bool = 1;
		for(var j = 2; j<= i/2;j=j+1){
			if(i%j == 0){
				bool = 0;
				break;
			}
		}
		if(bool == 1){
			console.log(i);
		}
	}
	
	