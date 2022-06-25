class Conta  { 
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo = valor + this.saldo;
       
    }

    saque(valor){
        this.saldo = this.saldo - valor;
       
    }
}

let usuario = new Conta(100);

usuario.deposito(200);

console.log(usuario.saldo);

usuario.saque(50);
console.log(usuario.saldo);