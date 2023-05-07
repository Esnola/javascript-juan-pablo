const sumar = (a,b,c) => a+b+c;
console.log(sumar(1,2,3))

const parcial = a => b => c => sumar(a,b,c)

const resultado = parcial(1)(2)(3)
console.log(resultado)