let pessoa = {
    "nome": "Diego",
    "idade": 30,
    "profissao": "Programador",
    "hobbies": ["Video Game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

//console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);