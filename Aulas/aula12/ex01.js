var idade = 13;

console.log("Voce tem " + idade + " anos!");

if (idade < 16) {
    console.log('nao vota');
}   else if (idade < 18) {
    console.log('voto opcional');
}   else if (idade < 65) {
    console.log('voto obrigatorio');
}   else {  
    console.log('voto opcional');
}

/* condicional aninhado */       

var hora = new Date().getHours();
var minuto = new Date().getMinutes();
var segundo = new Date().getSeconds();
var dia = new Date().getDay();
var mes = new Date().getMonth();
var anDia;
/*

    0 - Domingo
    1 - Segunda
    2 - Terca
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sabado

    0 - jan
    1 - fev
    2 - mar
    3 - abr
    4 - mai
    5 - jun
    6 - jul
    7 - ago
    8 - set
    9 - out
    10 - nov
    11 - dez
*/

switch (dia) {
    case 0:
        dia = 'Domingo';
        anDia = "";
        break;
    case 1:
        dia = 'Segunda';
        anDia = "-feira";
        break;
    case 2:
        dia = 'Terca';
        anDia = "-feira";
        break;
    case 3:
        dia = 'Quarta';
        anDia = "-feira";
        break;
    case 4:
        dia = 'Quinta';
        anDia = "-feira";
        break;
    case 5:
        dia = 'Sexta';
        anDia = "-feira";
        break;
    case 6:
        dia = 'Sabado';
        anDia = "";
        break;
}

switch (mes) {  
    case 0:
        mes = 'Janeiro';
        break;
    case 1:
        mes = 'Fevereiro';
        break;
    case 2:
        mes = 'Marco';
        break;
    case 3:
        mes = 'Abril';
        break;
    case 4:
        mes = 'Maio';
        break;
    case 5:
        mes = 'Junho';
        break;
    case 6:
        mes = 'Julho';
        break;
    case 7:
        mes = "Agosto"
        break;
    case 8:
        mes = "Setembro"
        break;
    case 9:
        mes = "Outubro"
        break;
    case 10:
        mes = "Novembro"
        break;
    case 11:
        mes = "Dezembro"
        break;
}

console.log("Agora sao exatamente " + hora + " horas, " + minuto + " minutos e " + segundo + " segundos de " + dia + anDia + " de " + mes + "."); ;

if (hora < 12) {
    console.log('Bom dia!');
}   else if (hora <= 18) {
    console.log('Boa tarde!');
}   else if (hora <= 23) {
    console.log('Boa noite!');  
}  else { 
    console.log('Boa madrugada!');
}

/* 

    switch (expressao) {
        case valor1:
            // codigo
            break;
        case valor2:
            // codigo
            break;
        case valor3:
            // codigo
            break;
        default:
            // codigo
            break;
    }

        "Break" serve para sair do bloco de codigo, caso nao seja utilizado, o codigo continuara
*/

