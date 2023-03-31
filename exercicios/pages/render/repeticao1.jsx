export default function repeticao1(){
    const listaAprovados = [
        'Joao',
        'Laura',
        'Eduardo',
        'Thayna',
        'Livia',
        'Daniela',
        'Eduarda',
        'Mia',
        'Leticia',
        'Nakaren',
    ]

    function RenderizarLista(){
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    return (
        <ul>
            {RenderizarLista()}
        </ul>
    )
}

// function RenderizarLista(){
//     const itens = []

//     for(var i = 0; i < listaAprovados.length; i++){
//         itens.push(<li key = {i} >{listaAprovados[i]}</li>)
//     }
//     return itens
// }