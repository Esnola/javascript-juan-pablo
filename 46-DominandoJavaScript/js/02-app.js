const numuno = 20
const numdos = '40'

function verifica(a, b){
    na = a
    nb = b
    if(typeof(a) !== "number") na = parseInt(a)
    if(typeof(b) !== "number") nb = parseInt(b)
    console.log(na + nb)
}

console.log(parseInt(numuno) + parseInt(numdos))
console.log(numuno + Number(numdos))
console.log(numdos+numuno)
verifica(numuno,numdos)