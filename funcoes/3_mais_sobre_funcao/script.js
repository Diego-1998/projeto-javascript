function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,6,8)); 

const mult = multiplicarTresNumeros(4,5,2);

console.log("O valor de mult é : " + mult);

function podeDirigir(idade, cnh){
    if(idade >= 19 && cnh == true){
        console.log("Pode dirigir");
    }
    else{
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(16,true));
console.log(podeDirigir(44,true));
console.log(podeDirigir(11,false));
console.log(podeDirigir(22,true));
console.log(podeDirigir(12,true));