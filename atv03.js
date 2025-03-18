// Crie uma função em JavaScript que receba um array de números e retorne um novo array contendo apenas os números que são múltiplos de 5 divididos por 5.

let numbers = [5, 12, 15, 22, 30, 7, 50];
let resultado = dividirMultiplosDeCinco(numbers);
console.log(resultado);

function dividirMultiplosDeCinco(arr) {
    return arr.filter(num => num % 5 === 0).map(num => num / 5);
}
