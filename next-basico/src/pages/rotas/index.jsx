import Link from "next/link"
import router, { useRouter } from "next/router"

export default function rotas(){
    function NavegacaoSimples(url){
        router.push(url)
    }

    function NavegacaoComParams(){
        router.push({
            pathname: "/rotas/params",
            query:{
                id:123,
                nome:"Edu"
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Edu">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/666/Novo Mundo">
                    <li>Novo Mundo</li>
                </Link>
            </ul>

            <div style={{display:"flex", displayDirection:"column"}}>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => NavegacaoSimples("/rotas/666/Novo Mundo")}>Novo Mundo</button>
                <button onClick={NavegacaoComParams}>Params</button>
            </div>
        </div>
    )
}