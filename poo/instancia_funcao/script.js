function criaCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au");
    }
    return cachorro;
}

let doberman = criaCachorro('doberman', 4, 'preta');

console.table(doberman);

doberman.latir();