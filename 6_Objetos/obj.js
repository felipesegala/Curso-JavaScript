let obj = {
    nome: 'Felipe',
    sobrenome: 'Segala',
    idade: 32,
    profissao: "Sofware Engenier",
};

console.log(obj);
console.log(typeof obj);

//PARA ACESSAR SOMENTE UM ELEMENTO DO OBJ USO .
console.log(obj.nome);
console.log(obj.sobrenome);
console.log(obj.profissao);

console.log('Meu nome é', obj.nome);

//POSSO REATRIBUIR UM VALOR DE UMA CHAVE
obj.nome = 'PATY';

console.log(obj.nome);

//POSSO TAMBEM ADCIONAR UMA CHAVE AO OBJETO
obj.graduacao = true;

console.log(obj);