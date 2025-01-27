/*
        array > elemento > índice > valor
        */

        let num = [5,8,2,6,4,7];
        console.log("Nosso vetor é o " + num);

        num[6] = 9;
        num.push(10);

        console.log(num);
        console.log("O tamanho do vetor é: " + num.length);

        num.sort()
        console.log("Em ordem crescente, temos: " + num);