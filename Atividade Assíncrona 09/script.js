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

// Soma de Elementos de um Array:
// Escreva uma função recursiva que receba um array de números inteiros e retorne a soma de todos os seus elementos. Por exemplo, dada a entrada [1, 2, 3, 4], o retorno deverá ser 10.

function somaArray(arr, index = 0) {

    if (index >= arr.length) {
        return 0;
    } 
    
    return arr[index] + somaArray(arr, index + 1);
}

// Inversão de uma String:
// Crie uma função recursiva que receba uma string e retorne a mesma string invertida. Por exemplo, a entrada "javascript" deverá resultar em "tpircsavaj".

function inverterString(str) {
     
    if (str === "") {
        return "";
    }
    
    return str.split("").reverse().join("");
}

// Sequência de Fibonacci:
// Faça uma função recursiva que, dado um número inteiro n, retorne o n-ésimo termo da sequência de Fibonacci. Considere que os dois primeiros termos da sequência são 0 e 1.


