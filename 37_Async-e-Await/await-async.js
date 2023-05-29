/* 
Funções assíncronas funcionam como Promises, porém com uma sintaxe mais simples;
Precisamos declarar a função com a palavra async;
E quando precisamos aguardar por algo a instrução precisa de await;
Podemos aplicar o recurso em funções anônimas e métodos de classe.
Tentar usar o await sem o async gera um erro
*/

// function primeiraFuncao() {

//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log('Esperou isso aqui');
//             resolve()
//         }, 2000)
//     })


// }

// async function segundaFuncao() {
//     console.log('Iniciou');

//     await primeiraFuncao();

//     console.log('Terminou');
// };

// segundaFuncao();

//pratica
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`) //Obtendo um usuário pela api
    //fetch é um recurso javascript para fazer requisições assíncronas
    .then(data => data.json())
    //then pq o fetch me retorna uma Promise
    .catch(err => console.log(err))
    //catch para homologar eventuais erros que possam ocorrer na requisição
}

async function showUserName(id) {

    try {
        const user = await getUser(id)

        console.log(`O nome do usuário é: ${user.data.first_name}`);
    } catch(err) {
        console.log(err);
    }

    
}

showUserName(3)