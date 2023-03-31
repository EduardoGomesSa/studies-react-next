import NumerosMegaSena from "./NumerosMegaSena"

export default function MegaSenaDisplay(props){
    const numerosDisplay = []
    for(let i=0; i < props.quantidade; i++){
        numerosDisplay.push(<NumerosMegaSena numero={props.numeros[i]} />)
    }

    return(
        <div>
            {numerosDisplay}
        </div>
    )
}