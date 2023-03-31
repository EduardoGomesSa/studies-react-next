export default function Estilo(props){
    return (
        <>
            <h1 style={{backgroundColor: props.numero >= 0 ? 'green' : 'red'}}>
                Texto qualquer
            </h1>
        </>
    )
}