var BMI = function(){
	var Height = prompt("請輸入身高(公分)")
    var Weight = prompt("請輸入體重(公斤)")
    console.log(Weight / Math.pow(Height/100 , 2))
}
BMI()