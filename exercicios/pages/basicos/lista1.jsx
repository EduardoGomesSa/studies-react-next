// Desafio: Gerar uma lista numerada de tags span

export default function lista1(){
    return (
        <div>
            {gerar(20)}
        </div>
    )
}

function gerar(qtd){  
    var lista = []
    for(var i = 1; i <= qtd; i++){
        lista.push(<span> {i}, <br /> </span>)
    }

    return lista
}