let amigo = {nome: "José",
     sexo: "M", 
     peso: 67.5, 
     engordar(p=0){
        if (p>0){
            console.log("engordou");
            this.peso += p;
        } else if (p<0){
            console.log("emagreceu");
            this.peso += p;
        }
     }};

     //amigo.engordar(-8);
     console.log(amigo.nome + " pesa " + amigo.peso + "Kg")
