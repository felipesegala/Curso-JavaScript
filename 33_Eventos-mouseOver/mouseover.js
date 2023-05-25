// MOUSEOVER e MOUSEOUT

let title = document.querySelector('.titl');

title.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

title.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white';
})


//alterando outro elemento com mouseover

let subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('mouseover', function() {
    let legenda = document.querySelector('#legenda');

    legenda.classList.remove('hide');
})


subtitle.addEventListener('mouseout', function() {
    let legenda = document.querySelector('#legenda');

    legenda.classList.add('hide');
})