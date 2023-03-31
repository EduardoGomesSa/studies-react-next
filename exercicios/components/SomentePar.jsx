export default function SomentePar(props){
    const numeroPar = props.numero % 2 === 0
    return numeroPar ? <span>{props.numero}</span> : null
    
    // if(props.numero % 2 === 0) return (<h1>{props.numero}</h1>)

    // return null
}