import { useState } from "react";
import MegaSenaDisplay from "../../components/MegaSenaDisplay";
import NumerosMegaSena from "../../components/NumerosMegaSena";

export default function megasena1(){
    const [valorQtd, setValorQtd] = useState(6)
    const [numeros = [], setNumeros] = useState(0)

    function GerarNumeros(){
        var qtd = valorQtd
        if(valorQtd<6 || valorQtd > 15){
            setValorQtd(6)
            qtd = 6
        } 

        const numerosGerados = []
        let numeroValido = 0
        for(let i=0; i < qtd; i++){
            numerosGerados.push(Math.floor(Math.random() * 60) + 1)           
        }
        setNumeros(numerosGerados)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
                <MegaSenaDisplay quantidade={valorQtd} numeros={numeros} />
                  
            <div>
            <span>Quantidade: </span>
            <input type="number" onChange={e => setValorQtd(e.target.value)} />
            <button onClick={GerarNumeros}>Gerar</button>
            </div>
        </div>
    )
}