class Endereco {
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
    
}

let endereco1 = new Endereco("Rua Piracaia", "Marechal Hermes", "Rio de Janeiro", "RJ");

console.log(endereco1);

endereco1.novaRua = "Rua Igarata";
endereco1.novoBairro = "Madureira";
endereco1.novaCidade = "São Paulo";
endereco1.novoEstado = "SP";

console.log(endereco1);