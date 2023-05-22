// TUDO È OBJETO EM JAVASCRIPT

let pessoas = {
    nome: 'Felipe',
    idade: 32,
    falar: function( ){ //método dentro do objeto;
        console.log('Olá, tudo bem?');
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoas.nome);
console.log(pessoas.idade);
pessoas.falar(); // acesso o método dentro do objeto.

let soma = pessoas.soma(5, 5); 
/*aqui crio a variável para que receba o retorno da função e eu possa reutilizar esse retorno ou somente mostra-lo.*/
console.log(soma);