// parseFloat 10.0

console.log(parseFloat('12.999')); // str com ponto flutuante, transformada em numero ponto flutuante;
console.log(parseInt('12.999'));

//parseInt transforma em numero inteiro
console.log(parseInt('10'));
console.log(parseInt(16.99));

// to fixed
console.log(23.5151551515.toFixed(1));

// isNaN

console.log(isNaN('teste'));
console.log(isNaN(12));
console.log(isNaN('14'));

//MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);