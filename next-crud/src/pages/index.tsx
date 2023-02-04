import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientesMock = [
    new Cliente('Edu', 21, '1'),
    new Cliente('Niela', 19, '2'),
    new Cliente('Naná', 17, '3'),
    new Cliente('Nakaren', 20, '4'),
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientesMock}></Tabela>
        </Layout>
    </div>
  )
}
