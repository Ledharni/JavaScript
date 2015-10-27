var BMI = function(){
	var 身高 = prompt("請輸入身高(公分)")
    var 體重 = prompt("請輸入體重(公斤)")
    console.log(體重 / Math.pow(身高/100 , 2))
}
BMI()