


document.getElementById("tlac").addEventListener("click", function() {
    
    let a = document.getElementById("a").value;
    let o = Math.abs(4*a);
    let s = Math.abs(a*a);
    console.log(a);
    document.getElementById("lead").innerHTML = "Obvod je " + o + " cm" + '<br>' + "Obsah je " + s + " cm<sup>2</sup>" ;
});

document.getElementById("tlacit").addEventListener("click", function() {
    
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    let c = parseInt(document.getElementById("c1").value);
    let va = parseInt(document.getElementById("va1").value);
    let o= Math.abs(a+b+c);
    let s = Math.abs(a*va/2);
    document.getElementById("lead1").innerHTML = "Obvod je " + o + " cm" + '<br>' + "Obsah je " + s + " cm<sup>2</sup>" ;
});

document.getElementById("tlacitko").addEventListener("click", function() {
    
    let a = parseInt(document.getElementById("a2").value);
    let b = parseInt(document.getElementById("b2").value);
    let o = (2*(Math.abs(a)+ Math.abs(b)));
    let s = Math.abs(a*b);
    console.log(b);
    document.getElementById("lead2").innerHTML = "Obvod je " + o + " cm" + '<br>' + "Obsah je " + s + " cm<sup>2</sup>" ;
});


 
/*function OaSctverce() {
    console.log(a);
    document.getElementById("lead").innerHTML = a;
}*/

/*function buttonTroj(){
    document.getElementById("tlacit").addEventListener("click", OaSctverce);
    let a = document.getElementById("strana").value;
    let o = a+b+c;
    let s = a*va/2;
    document.getElementById("lead").innerHTML = "obvod je" + o + " Obsah je" + s;
}

function buttonOb(){
    document.getElementById("tlacitko").addEventListener("click", OaSctverce);
    let a = document.getElementById("strana").value;
    let o = 2*(a+b);
    let s = a*b;
    document.getElementById("lead").innerHTML = "obvod je" + o + " Obsah je" + s;
}*/