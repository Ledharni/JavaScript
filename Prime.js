var Prime , i , j
for(var i=1 ; i<1000 ; i++){
	Prime = true
	for(var j=2 ; j<i-1 ; j++){
		if( i%j == 0){
			Prime = false
			break;
		}
	}
	if(Prime == true){
		console.log(i+"")
	}
}