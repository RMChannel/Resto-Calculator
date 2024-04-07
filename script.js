var confirm = new Audio("files/confirm.mp3");
var error = new Audio("files/error.mp3");

function CalcolaResto() {
    let mat=document.getElementById("input").value;
    if (mat<10000 || mat>9999999999) {
        error.play();
        alert("Valore matricola non corretto!\nInserisci o le ultime 5 cifre la tua matricola intera");
    }
    else {
        mat=mat%100000;
        mat=mat%3;
        document.getElementById("output").textContent="Sei resto: "+mat;
        document.getElementById("output").style.display="block";
        confirm.play();
    }
}