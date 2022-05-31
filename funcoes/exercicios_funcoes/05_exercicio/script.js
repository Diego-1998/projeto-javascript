function verificar(idade){
    if(idade >= 18){
        console.log(` Ela tem ${idade}, portanto está autorizada a fazer auto-escola`);
    } else{
        console.log(` Ela tem ${idade}, portanto não está autorizada a fazer auto-escola`);
    }
}
verificar(18);
verificar(15);
verificar(48);
verificar(10);
verificar(38);