import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'

const URL_BASE = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [idsDasQuestoes, SetIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${URL_BASE}/questionario`)
    const idDasQuestoes = await resp.json()
    SetIdsDasQuestoes(idDasQuestoes)
  }
  
  async function carregarQuestao(idQuestao: number){
    const resp = await fetch(`${URL_BASE}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel){
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta(){
    if(questao){
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
    }
  }

  function irPraProximoPasso(){
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : Finalizar()
  }

  function irPraProximaQuestao(proximoId: number){
    carregarQuestao(proximoId)
  }

  function Finalizar(){
    router.push({
      pathname: "/resultado",
      query:{
        total: idsDasQuestoes.length,
        certas: respostasCertas

      }
    })
  }

  return questao ? (
        <Questionario
          questao={questao} 
          ultima={idProximaPergunta() === undefined}
          questaoRespondida={questaoRespondida} 
          irPraProximoPasso={irPraProximoPasso} />
  ) : false
}
