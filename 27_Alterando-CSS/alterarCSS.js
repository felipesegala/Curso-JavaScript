// add CSS com JS

// atribuo a uma variavel o que eu quero alterar para ficar mais facil de reutilizar;
let title = document.querySelector('#title');

//adiciono CSS
title.style.color = 'red';

//Palavras com hífen devem ser utilizadas no formato camel Case
title.style.backgroundColor = 'blue';

let subtitle = document.querySelector('.subtitle');

// ASSIM CRIO VARIOS ESTILOS DE UM SÓ VEZ
subtitle.style.cssText = 'color: blue; background-color: pink; font-size: 20px;';