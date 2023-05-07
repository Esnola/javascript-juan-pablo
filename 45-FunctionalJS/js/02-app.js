const suma = (a,b) =>  a + b;
const multiplicar = (a,b) =>  a * b;

const sumarMultiplicar = fn => fn(10,20);

console.log(sumarMultiplicar(suma,20,10));
console.log(sumarMultiplicar(multiplicar,20,10));