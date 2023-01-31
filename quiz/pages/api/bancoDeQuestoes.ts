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
    ]),
    new QuestaoModel(203, "Qual é o coletivo de cães?", [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Esóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ])
]

export default questoes