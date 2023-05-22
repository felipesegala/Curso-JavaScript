/*this sempre se refere ao objeto global Window*/
console.log(this);

let pessoa = {
    nome: 'Felipe',
    idade: 32,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    dizerNome: function() {
        console.log("o meu nome é", this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr ' + this.nome;
    }
};

pessoa.falar();
pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

console.log(pessoa.saudacao());

let sdc = pessoa.saudacao();

console.log("ola", sdc);