import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const {alternarTema} = useAppData()
  return (
    <Layout titulo="Notificações" subtitulo="Aqui vc irá administrar suas notificações">
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  )
}
