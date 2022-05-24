let idade = 15;
let cnh = false;

if(idade >= 18 && cnh == false){
    console.log("Usuário é maior de 18 anos, mas não possui cnh");
} 
else if(idade >= 18 && cnh == true) {
    console.log("Usuário é maior de 18 anos e possui cnh");
}
else{
    console.log("Usuário é menor de 18 anos e não possui cnh");
}
