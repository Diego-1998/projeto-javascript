let numero = 17;

let divisor = 0;

for(let i = 1 ; i <= numero; i++ ){

  if(numero % i == 0){
    divisor++;
  }
}

if(divisor ==2 ){
  console.log(`O Número ${numero} é primo`)
}
else{
  console.log(`O Número ${numero} não é primo`)
}