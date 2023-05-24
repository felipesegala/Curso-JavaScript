// CALLBACK, crio uma função e a passo como parâmetro para outras funções e então será executada após uma resposta ser recebida.

function exibir(num) {
    console.log('A operação resultou em: ', num);
}

function soma (a, b, callback) {
    let op = a + b;
    callback(op);
}

function multiplicação (a, b, cb) {
    let op = a * b;
    cb(op);
}

soma(2, 2, exibir);
multiplicação(2,4, exibir);