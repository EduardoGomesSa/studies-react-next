interface PessoaProps{
    nome:string
    idade?:number
}

export default function Pessoa(props:PessoaProps){
    return (
        <div>
            <div>{props.nome}</div>
            <div>{props.idade ?? 'Não informada'}</div>
        </div>
    )
}