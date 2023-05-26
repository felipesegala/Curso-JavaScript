// keydown

document.addEventListener('keydown', function() {

    if(event.key === 'Enter') {
        console.log('Apertou Enter');
    }
    
});

//KEYUP

document.addEventListener('keyup', function() {

    if(event.key === 'Enter') {
        console.log('Soltou o Enter');
    }
})