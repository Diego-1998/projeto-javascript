function lembrarSoma(x){
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(3);
console.log(soma1(5));

let soma2 = lembrarSoma(10);
console.log(soma2(3));
function contador(i) {
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}