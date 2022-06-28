class Conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }

    deposito(valor){
        this.saldoCC += valor; 
    }

    saque(valor){
        this.saldoCC -= valor;
    }

    transferirCP(valor){
          this.saldoCP -= valor;
          this.saldoCC += valor;
    }

    transferirCC(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
  }

  jurosDeAniversario(){
      let juros = (this.saldoCP * this.juros) /100;
      this.saldoCP += juros;
  }


}


class ContaEspecial extends Conta{
    constructor(saldoCC,saldoCP,juros){
        super(saldoCC,saldoCP,juros *2);
    }
}


let contaEspecial = new ContaEspecial(100,200, 1); 


let conta = new Conta(500, 300, 1);

conta.transferirCP(50);

console.log(conta.saldoCC);

console.log(conta.saldoCP);

contaEspecial.saque(30);
console.log(contaEspecial)
