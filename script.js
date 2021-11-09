function si(){ 

var p = parseInt(document.getElementById("p").value);
var r = parseInt(document.getElementById("r"). value);
var t = parseInt(document.getElementById("t"). value);
var si = p*r/100*t;
document.getElementById("res").innerHTML=si;
alert ("If you deposit 1000000 at an interest of 3.5% . You will receive an amount of 175000, in the year 2025");
            
} 
