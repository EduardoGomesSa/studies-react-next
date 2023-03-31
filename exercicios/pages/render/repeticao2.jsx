import listaProdutos from '../../data/listaProdutos'

export default function repeticao2(){
    function RenderizarLinhas(){
        return listaProdutos.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {RenderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}