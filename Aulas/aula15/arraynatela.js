let valores = [1,5,4,8,6,4,13,15,45,];

console.log(valores.indexOf(4));

/*
for (let i = 0; i < valores.length; i++){
    console.log("A posição " + i + " tem o valor: " + valores[i])
}


    forma usual - longa

valores.sort((a, b) => a - b); 
console.log("Os valores, em ordem crescente ficam da seguinte forma: " + valores);  

*/

/*

    Forma simplificada: só funciona para arrays e objetos
*/
    for (let i in valores) {
        console.log(valores[i])
    }

    console.log(valores.indexOf(4));