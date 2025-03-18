// Crie uma função em JavaScript que receba um array de strings e retorne um novo array contendo somente as strings que possuem mais de 5 caracteres, convertidas para maiúsculo.

let strings = ["hello", "world", "javascript", "programming", "code"];
let resultado = filtrarPalavrasLongas(strings);
console.log(resultado);

function filtrarPalavrasLongas(arr) {
    return arr.filter(str => str.length > 5).map(str => str.toUpperCase());
}
