function Acao1(){
    console.log("Acao1")
}

export default function botao(){
    function Acao2(){
        console.log("Acao2")
    }

    function Acao5(e){
        console.log(e)
    }

    return (
        <div>
            <input type="text" onChange={e => console.log(e.target.value)} />
            <button onClick={Acao1}>Click #01</button>
            <button onClick={Acao2}>Click #02</button>
            <button onClick={function(){
                console.log("Acao3")
            }}>Click #03</button>
            <button onClick={() => console.log("Acao4")}>Click #04</button>
            <button onClick={Acao5}>Click #05</button>
            <button onClick={e => Acao5(e.altKey)}>Click #05 v2</button>
        </div>
    )
}