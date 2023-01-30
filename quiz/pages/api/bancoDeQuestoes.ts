import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, "Qual inseto transmite a doença de chagas?", [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barada'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, "Qual fruta é conhecida no nordeste como jerimum?", [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ])
]

export default questoes