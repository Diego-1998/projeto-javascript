function decrementa(num){

  for( i = 0;  i < num ; num--){
      if( num % 2 == 0){
        console.log(num);
      }
      else{
        console.log("numero impar");
      }
  }
}

decrementa(10);