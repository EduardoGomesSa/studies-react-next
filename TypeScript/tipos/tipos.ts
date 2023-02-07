//string
let nome:string = 'joao'

console.log(nome)

//number
let idade:number = 27

console.log(idade)

//boolean
let possuiHobbies:boolean = false

console.log(possuiHobbies)

//number
let minhaIdade: number
minhaIdade = 27

console.log(typeof minhaIdade)

// minhaIdade = 'minha idade é 21'
// console.log(typeof minhaIdade)

//array
let hobbies : any[] = ['ler', 'estudar', 'correr', 'cozinhar']
console.log(hobbies[0])
console.log(typeof hobbies)

//tuplas
let endereco: [string, number] = ['Rua 1', 42]

console.log(endereco)

//enuns
enum Cor{
    azul,
    vermelho = 100,
    amarelo,
    rosa = 100
}

let minhaCor: Cor = Cor.amarelo
console.log(minhaCor)

//any
let carro: any = 'BMW'
console.log(carro)
carro = { marcar: 'BMW', ano: 2019}
console.log(carro)