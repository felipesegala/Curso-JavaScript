function primeiraFuncao() {
    console.log('Hello World');
};

primeiraFuncao();

function dizerNome(nome) {
    console.log('nome é', nome);
}

dizerNome('Felipe'); // eu atribuo o nome(valor) ao parametro 'nome';

let bancoDeDados = 'Paty'; // passa um nome do bando de dados

dizerNome(bancoDeDados);

function soma(a, b) {
    let soma = a + b;
    return soma;
}

console.log(soma(3, 5));