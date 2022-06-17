const pessoa = {
    emprego: "Desenvolvedor",
    salario: 10.000,
}

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.emprego);

console.log(pessoaNova.hasOwnProperty('emprego'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);