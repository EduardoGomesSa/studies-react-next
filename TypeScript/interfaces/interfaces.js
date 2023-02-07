"use strict";
function saudarComOla(pessoa) {
    console.log('Olá! ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'joao Onça',
    idade: 34,
    saudar(sobrenome) {
        console.log('Olá! Meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Edu', idade: 21, altura:1.68})
pessoa.saudar('Gomes');
// usando em classes
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log('Olá! Meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const cliente = new Cliente();
cliente.nome = 'Han';
cliente.saudar('Solo');
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 3));
