/* JSON = JavaScript Objetc Notation;
Utiliza o formato de chave e valor; (q nem objeto)
Muito utilizado em API e também arquivos de configuração;

/////////////

Tipos de Dados

Aceita diversos tipos de dados
Strings
Números
Arrays
Objetos - {"nome": "Matheus"}; ASPAS DUPLAS
null

*/

const objs = [
    {
    "nome": "Felipe",
    "idade": 32,
    "esta_trabalhando": false,
    "detalhes_profissao": {
    "profissao": "Programador",
    "empresa": "Empresa x"  
    },
    "hobbies": ["Programar", "Estudar", "Games"]
    },
    {
    "nome": "Paty",
    "idade": 26,
    "esta_trabalhando": true,
    "detalhes_profissao": {
    "profissao": null,
    "empresa": null  
    },
    "hobbies": ["Programar", "Games"]  
    }
]

console.log(objs);


// CONVERTER OBJETO PARA JSON

const jsonData = JSON.stringify(objs);
console.log(jsonData);

//CONVERTER JSON PARA OBJETO

const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
});