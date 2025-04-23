// Conversão de Base Personalizada:
// Crie uma função recursiva que receba dois parâmetros: um número inteiro positivo n e a base b (por exemplo, 2, 8, 16). O método deverá converter o número n para a base b e retornar sua representação como uma string.

function converterBase(n, b) {

    if (n < b) {
        return n.toString(b);
    }

    return converterBase(Math.floor(n / b), b) + (n % b).toString(b);
}

// Cálculo do Fatorial:
// Implemente uma função recursiva que, dado um número inteiro não negativo, calcule o seu fatorial. Exemplo: fatorial(5) deve retornar 120, pois 5! = 5 × 4 × 3 × 2 × 1.

function fatorialRecursiva(n) {

    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorialRecursiva(n - 1);
}

// Verificação de Número Primo:
// Desenvolva uma função recursiva que determine se um número inteiro maior que 1 é primo. A função deverá retornar true se o número for primo e false caso contrário.

function ehPrimo(n, divisor = 2) {

    if (n <= 1) {
        return false;
    } else if (divisor * divisor > n) {
        return true;
    }
    else if (n % divisor === 0) {
        return false;
    } 

    return ehPrimo(n, divisor + 1);

}

// Teste ehPrimo
console.log(ehPrimo(7)); // true
console.log(ehPrimo(10)); // false
console.log(ehPrimo(13)); // true
