"use strict";
//string
let nome = 'joao';
console.log(nome);
//number
let idade = 27;
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
//number
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'minha idade é 21'
// console.log(typeof minhaIdade)
//array
let hobbies = ['ler', 'estudar', 'correr', 'cozinhar'];
console.log(hobbies[0]);
console.log(typeof hobbies);
//tuplas
let endereco = ['Rua 1', 42];
console.log(endereco);
//enuns
var Cor;
(function (Cor) {
    Cor[Cor["azul"] = 0] = "azul";
    Cor[Cor["vermelho"] = 100] = "vermelho";
    Cor[Cor["amarelo"] = 101] = "amarelo";
    Cor[Cor["rosa"] = 100] = "rosa";
})(Cor || (Cor = {}));
let minhaCor = Cor.amarelo;
console.log(minhaCor);
//any
let carro = 'BMW';
console.log(carro);
carro = { marcar: 'BMW', ano: 2019 };
console.log(carro);
