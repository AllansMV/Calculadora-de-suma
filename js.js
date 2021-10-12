function myFunction() {
    var x,y,suma,text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;


    if (isNaN(x) || isNaN(y)) {
        text = "Es necesarios introducir dos números válidos";
    } 
    
    else {
		//si no ponemos parseFloat concatenaría x con y
        suma=parseFloat(x)+parseFloat(y);
        text= suma;
    }


    document.getElementById("total").innerHTML = text;

}