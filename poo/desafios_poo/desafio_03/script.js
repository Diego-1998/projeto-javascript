class Carro {
    constructor(marca,cor,gasoRestante) {
        this.marca = marca;
        this.cor = cor;
        this.gasoRestante = gasoRestante;
    }
      adicionar(novoAbastecimento){
      this.gasoRestante += novoAbastecimento;
    }

    diminuir(novoAbastecimento){
        this.gasoRestante -= novoAbastecimento;
    }

}


let carro = new Carro("peugeot", "prata", 210);

console.log(carro);

carro.adicionar(50);

console.log(carro);

carro.diminuir(15);
console.log(carro);