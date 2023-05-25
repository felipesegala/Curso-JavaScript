let x = 0;

// Para setar a parada eu atribuo o setTimeOut a uma variavel para poder utilizar numa if;

let mytimer = setTimeout(function(){
    console.log('O x é 0');
}, 1500) 

x = 5;

if(x > 0) {
    clearTimeout(mytimer);
    console.log('O x passou de 0');
}

// clearInterval na prática

let myInterval = setInterval(function() {
    console.log('Imprimindo interval');
}, 500);

setTimeout(function(){
    console.log('Não precisamos mais repetir!');
    clearInterval(myInterval);
}, 1500);