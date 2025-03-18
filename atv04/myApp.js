// 1. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

let twoNumbers = [6, 2];

function sortArray(arr) {
	if (arr[0] > arr[1]) {
		let temp = arr[0];
		arr[0] = arr[1];
		arr[1] = temp;
	}
	return arr;
}

// 2. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

let threeNumbers = [10, 3, 8];

function ordemCrescente(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

// 3. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array. Modifique os elementos do array de modo a sequência de números ficar do contrário. Ou seja, se digitou: 1,2,3 Vai aparecer: 3,2,1

let userNumbers = [];

function inverseArray(arr) {
    for (let i = 0; i < 3; i++) {
		let number = parseInt(prompt('Digite um número: '));
        arr.push(number);
    }
    console.log('Esse são os números digitados: ' + arr);
    
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    console.log('Essa é a sequência de números invertida: ' + arr);
}

//inverseArray(userNumbers)

// 4. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor. Ao final, exiba o array e o array ao contrário (generalização do script anterior).

let userNumbers2 = [];

function inverseArray2(arr) {
    let n = parseInt(prompt('Quantos números deseja inserir no array? '));
    for (let i = 0; i < n; i++) {
        let number = parseInt(prompt('Digite um número: '));
        arr.push(number);
    }

    console.log('Esse são os números digitados: ' + arr);

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    console.log('Essa é a sequência de números invertida: ' + arr);}

// inverseArray2(userNumbers2);

// 5. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

let bubbleSortArray = [5, 3, 2, 4, 7, 1, 0, 6];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;	
}

console.log(bubbleSort(bubbleSortArray));

// 6. Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function showIndexes(arr, number) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            indexes.push(i);
        }
    }
    return indexes;
}

// 7. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores do array.

let n = parseInt(prompt('Digite um número inteiro positivo: '));
let fibonacci = [0, 1];

function fibonacciArray(n) {
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

console.log(fibonacciArray(n));

// 8. Faça o mesmo do exercício anterior, mas com fatorial.
// Fatorial de 0: 0! = '
// Fatorial de 1: 1 x elemento0 = 1
// Fatorial de 2: 2 x elemento1 = 2
// Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
// ...
// Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!

let n2 = parseInt(prompt('Digite um número inteiro positivo: '));
let fatorial = [1];

function fatorialArray(n) {
    for (let i = 1; i <= n; i++) {
        fatorial.push(fatorial[i - 1] * i);
    }
    return fatorial;
}

console.log(fatorialArray(n2));

// 9. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias. O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for o jogador 1 ou jogador 2)

let matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let jogador = 1;

function jogada(linha, coluna) {
    if (matriz[linha][coluna] === '') {
        if (jogador === 1) {
            matriz[linha][coluna] = 'X';
            jogador = 2;
        } else {
            matriz[linha][coluna] = 'O';
            jogador = 1;
        }
    }

    console.log(matriz);
}

// 10. Peça ao usuário uma quantidade de linhas e e outra de colunas, depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

let linhas = parseInt(prompt('Digite a quantidade de linhas: '));
let colunas = parseInt(prompt('Digite a quantidade de colunas: '));
let matriz2 = [];

function matrizNumeros(linhas, colunas) {
    let count = 1;
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(count);
            count++;
        }
        matriz2.push(linha);
    }
    return matriz2;
}

console.log(matrizNumeros(linhas, colunas));
