/* 
Funções assíncronas funcionam como Promises, porém com uma sintaxe mais simples;
Precisamos declarar a função com a palavra async;
E quando precisamos aguardar por algo a instrução precisa de await;
Podemos aplicar o recurso em funções anônimas e métodos de classe.
Tentar usar o await sem o async gera um erro
*/

function primeiraFuncao() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Esperou isso aqui');
            resolve()
        }, 2000)
    })


}

async function segundaFuncao() {
    console.log('Iniciou');

    await primeiraFuncao();

    console.log('Terminou');
};

segundaFuncao();