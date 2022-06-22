class Cachorro {
    constructor(raca,pata,cor,nome){
        this.raca = raca;
        this.pata = pata;
        this.cor = cor;
        this.nome = nome;
    }
}

let labrador = new Cachorro('Labrador', 4, 'preto', 'Fox');

console.log(labrador);