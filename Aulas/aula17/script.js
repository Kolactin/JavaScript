function selec(){
    let valores = [];
    let num = Number(document.getElementById("iNum").value);
    
    if (num == 0 || num > 100) {
        window.alert("Por favor, selecione um valor entre 1 e 100!");
    } else {
        iValor.innerHTML += "<br> O valor " + num + " foi selecionado";

        valores.push(num);
    }
}

function analyse(){
    res.innerHTML += ""

    if (num == 0 || num > 100) {
        window.alert("Por favor, selecione um valor entre 1 e 100!");
    } else {
        res.innerHTML += "O vetor possui " + valores.length + " elementos";
    }
}