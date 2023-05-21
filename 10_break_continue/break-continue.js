for(let i = 10; i > 0; i--) {

    console.log(i); // me mostra o decremento

    if(i === 5) {
        break;  // para o decremento
    }
}

console.log('deu o Break');


let x = 10;

while(x < 100) {
   
    x += 10; //incremento de 10 em 10

    if(x === 60 || x === 90) { // condição
        console.log('CONTINUE');
        continue; // pulará o codigo e pula pra proxima
    }

    console.log('testando continue', x);
}
