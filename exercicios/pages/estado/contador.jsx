import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador(){
const [numero, setNumero] = useState(0) 

    // function Contar(param){
    //     param ? setNumero(numero + 1) : setNumero(numero - 1)
    // }

    const Aumentar = () => setNumero(numero + 1) 

    const Diminuir = () => setNumero(numero - 1)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            {/* <h2>{numero}</h2> */}
            <NumeroDisplay numero = {numero} />
            <div>
                <button style={{
                    width:"50px",
                    height:"30px"
                }} onClick={Aumentar}>+</button>
                <button style={{
                    width: "50px",
                    height:"30px"
                }} onClick={Diminuir}>-</button>
            </div>
        </div>
    )
}