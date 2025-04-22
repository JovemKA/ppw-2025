// Crie uma função em JavaScript que receba um array de números e retorne um novo array contendo somente os números pares multiplicados por 3.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = filtrarEMultiplicarPares(numbers);
console.log(result);

function filtrarEMultiplicarPares(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * 3);
}
