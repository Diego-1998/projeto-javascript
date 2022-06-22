class Cachorro {
    constructor(raca,pata,cor,nome){
        this.raca = raca;
        this.pata = pata;
        this.cor = cor;
        this.nome = nome;
    }

    latir(){
        console.log("Au Au");
    }
}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.tamanho = 1.50;

let labrador = new Cachorro('Labrador', 4, 'preto', 'Fox');


console.log(labrador.tamanho);

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);