let btn = document.querySelector('#btn');

console.log(btn);

//addEventlistener = é o método aonde passo o parametro que desejo, nesse caso o click
btn.addEventListener('click', function() {

    console.log('Clicou botão');

    this.style.color = 'red';
})

//sempre q acessar um this dentro de um evento, o this vai estar se referindo a ele

let title = document.querySelector('.titl');

title.addEventListener('click', function() {

    let subtitle = document.querySelector('.subtitle');
    subtitle.style.display = 'none' 

});

//Comum tbm é ao clicar em um texto, algum outro some ou muda de cor, pra isso faço como no exemplo acima

//double click

let subtitle = document.querySelector('.subtitle')
    subtitle.addEventListener('dblclick', function() {
        console.log('click duplo');
    });


   

