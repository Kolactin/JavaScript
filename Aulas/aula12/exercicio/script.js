var img = document.getElementById("imagem");
var msg = document.getElementById("msg");
var nome = window.prompt("Digite seu nome: ");
var hora = new Date().getHours();
var minuto = new Date().getMinutes();
var pe = document.getElementById("end");

function carregar(){

    if(hora < 6){
        msg.innerHTML = "<h1>Olá " + nome + ", boa madrugada</h1>";

    } else if(hora < 12){
        msg.innerHTML = "<h1>Olá " + nome + ", bom dia</h1>";
    }else if(hora < 18){
        msg.innerHTML = "<h1>Olá " + nome + ", boa tarde</h1>";
    }else if (hora < 24){
        msg.innerHTML = "<h1>Olá " + nome + ", boa noite</h1>";
    }
    msg.innerHTML += "<br>";

    msg.innerHTML += "<h2>Agora são " + hora + "hrs" + minuto + "min</h2>";


    if(hora < 6){
        img.src = "imagens/madrugada.jpeg";
    }else if(hora >= 6 && hora < 12){
        img.src = "imagens/manha.jpeg";
    }else if(hora < 18){
        img.src = "imagens/tarde.jpeg"
    }else if(hora < 24){
        img.src = "imagens/noite.jpeg"
        }

    if (hora < 6){
        document.body.style.backgroundColor = "black";
    }else if(hora >= 6 && hora < 12){
        document.body.style.backgroundColor = "lightyellow";
    }else if(hora < 18){
        document.body.style.backgroundColor = "rgb(216, 188, 63)";
    }else if(hora < 24){
        document.body.style.backgroundColor = "gray";
    }
}