// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let nota = Number(prompt("Digite uma nota entre 0 e 10: "));

while (nota < 0 || nota > 10) {
  nota = Number(prompt("Nota inválida! Digite uma nota entre 0 e 10: "));
}

alert("Parabéns, valor validado com sucesso!");
