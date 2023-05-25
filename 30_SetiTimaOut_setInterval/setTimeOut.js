//setTimeOut

console.log('Antes do setTimOut');

//function nessa caso é setado como parâmetro pro setTimeOut e ao msm tempo CALLBACK
setTimeout(function() {
console.log('Testando o setTimeOut');

}, 2000) //aqui no final coloco o tempo de espera que quero para realizar a ação em milisegundos, sendo para cada segundo são 1000 milisegundos.

console.log('Depois do setTimOut');

//Mesmo tendo instruções antes e depois do setTimOut ele só realizará sua ação após o tempo determinado.

//Uma função que é passada como argumento para outra é considerada uma CallBack.