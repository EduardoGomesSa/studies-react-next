import { useRouter } from "next/router"
import Link from "next/link"

export default function Buscar(){
    const router = useRouter()
    const id = router.query.id

    console.log(router)
    return (
        <div>
            <h1>rotas / {id} / buscar</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}