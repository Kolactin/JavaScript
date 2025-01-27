function parImp (n) {

    if (n % 2 == 0) {
        return Number(n) + " é um número par!"
    } else {
        return Number(n) + " é um número ímpar!"
    }
}

function soma(n1=0, n2=0){
    return "A soma entre " + n1 + " e "+ n2+ " resulta em: " + Number(n1 + n2)
}

            //Recursividade

function fatorial(nFat){
    if ( nFat == 1 || nFat == 0){
        return 1
    } else {
        return nFat * fatorial(nFat-1)
    }
}

console.log(parImp(12)); // Verifica se é par

console.log(soma(4));   // Realiza soma de 2 numeros, caso só haja 1, o outro é considerado 0.

console.log(fatorial(10));  // Calcula o fatorial de um número!

