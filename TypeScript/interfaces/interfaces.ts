interface Humano {
    nome: string
    idade?: number
    [prop: string]:any
    saudar(sobrenome:string): void
}

function saudarComOla(pessoa : Humano){
    console.log('Olá! '+pessoa.nome)
}

function mudarNome(pessoa: {nome: string}){
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'joao Onça',
    idade: 34,
    saudar(sobrenome: string){
        console.log('Olá! Meu nome é '+this.nome+' '+sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({nome: 'Edu', idade: 21, altura:1.68})
pessoa.saudar('Gomes')

// usando em classes

class Cliente implements Humano{
    nome: string = ''
    saudar(sobrenome: string){
        console.log('Olá! Meu nome é '+this.nome+' '+sobrenome)
    }
}

const cliente = new Cliente()
cliente.nome = 'Han'
cliente.saudar('Solo')

//Interface Função
interface FuncaoCalculo{
    (a:number, b:number):number
}

let potencia: FuncaoCalculo

potencia = function(base:number, exp: number):number{
    return Math.pow(base, exp)
}

console.log(potencia(2, 3))