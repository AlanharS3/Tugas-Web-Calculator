let a, b, c;

function setValues() {
    a = Number(document.getElementById('bil1').value);
    b = Number(document.getElementById('bil2').value);
}

function tambah() {
    setValues();
    c = a + b;
    document.getElementById('hasil').value = c;
}

function kurang() {
    setValues();
    c = a - b;
    document.getElementById('hasil').value = c;
}

function kali() {
    setValues();
    c = a * b;
    document.getElementById('hasil').value = c;
}

function bagi() {
    setValues();
    c = a / b;
    document.getElementById('hasil').value = c;
}


function reset() {
    document.getElementById("bil1").value = "";
    document.getElementById("bil2").value = "";
    document.getElementById("hasil").value = "";
}