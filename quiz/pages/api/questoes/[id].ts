import type { NextApiRequest, NextApiResponse } from 'next'
import QuestaoModel from '../../../model/questao'
import questoes from '../bancoDeQuestoes'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestaoModel>
) {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1){
    const questaoSelecionada = unicaQuestaoOuNada[0]

    res.status(200).json(questaoSelecionada.paraObjeto())
  } else{
    res.status(204).send(unicaQuestaoOuNada[0])
  }
}