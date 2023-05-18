let x = 0;

/*
while(x < 5){
    console.log('teste', x);
    
    // desta forma entraria no loop infinito, pq n pararia de contar;
}
*/

while(x <= 5) {
    console.log('teste', x);
    // assim é a forma correta
    x += 1; // incremento
}

let arr = ['teste', 'testando', 'a', 'b'];
let y = 0; // recebe o resultado da condição e soma 1, fazendo o loop;

while(y <= 3) {

    console.log(arr[y]);

    y += 1;
}

let palavra = 'Felipe';
let i = 0; // recebe o resultado da condição e soma 1, fazendo o loop;

while (i <= 6) {
    console.log(palavra[i]);

    i += 1;
}