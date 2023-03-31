export async function getStaticProps(){
    console.log("[server] gerando props para o component...")
    const resp = await fetch("http://localhost:3000/api/produtos")
    const produtos = await resp.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props){
    console.log("[cliente] renderizando o componente...")
    function renderizarProdutos(){
        return props.produtos.map(produto => {
            return <li key={produto.id}>Id {produto.id} {produto.nome} tem preço R${produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Estático #04</h1>

            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}