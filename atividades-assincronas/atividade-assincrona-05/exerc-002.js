// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let user = prompt('Digite seu nome de usuário: ');
let password = prompt('Digite sua senha: ');

while (user === password) {
    alert('Error: a senha não pode ser igual ao nome de usuário!');
    user = prompt('Digite seu nome de usuário: ');
    password = prompt('Digite sua senha: ');
}

alert('Usuário e senha cadastrados com sucesso!');
