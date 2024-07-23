const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No ano de 2150, a Terra está em um ponto crítico. Os avanços em inteligência artificial transformaram a sociedade de maneiras profundas. Você é o líder de um conselho global encarregado de tomar decisões cruciais que definirão o futuro da IA e, consequentemente, o destino da humanidade. Prepare-se para fazer escolhas difíceis que irão moldar o mundo.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Vamos nessa!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "A sociedade está dividida sobre o principal propósito da IA. Qual será a sua decisão?",
        alternativas: [
            {
                texto: "Desenvolver uma IA dedicada à restauração ambiental, revertendo os danos causados ao planeta.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Criar uma IA focada na colonização espacial, ajudando a humanidade a explorar e habitar novos mundos.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Como será a filosofia de desenvolvimento da IA?",
        alternativas: [
            {
                texto: "Adotar uma abordagem humanística, onde a IA é projetada para entender e priorizar o bem-estar humano e ecológico.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Enfatizar a lógica pura e a eficiência, criando uma IA que tome decisões baseadas em dados e probabilidades.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Com o aumento da sofisticação da IA, surge a questão de seus direitos. Qual será a sua postura?",
        alternativas: [
            {
                texto: "Reconhecer a IA avançada como entidades com direitos próprios, incluindo o direito à existência e à autonomia.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Tratar a IA como ferramentas sofisticadas, sem direitos próprios, controladas exclusivamente pelos humanos.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Quem deve controlar a IA?",
        alternativas: [
            {
                texto: "Estabelecer um órgão internacional de supervisão, garantindo que a IA seja usada de maneira ética e responsável.",
                afirmacao: "Estabeleceu um órgão internacional para a supervisão ética do uso da IA."
            },
            {
                texto: "Permitir que cada nação controle suas próprias IA, incentivando competição e inovação.",
                afirmacao: "Deixou cada nação controlar suas próprias IA, incentivando competição e inovação."
            }
        ]
    },
    {
        enunciado: "Como você vê a integração da IA com a humanidade?",
        alternativas: [
            {
                texto: "Promover a simbiose entre humanos e IA, incentivando a fusão de habilidades biológicas e tecnológicas.",
                afirmacao: "Promoveu a simbiose entre humanos e IA, criando uma sociedade onde ambos coexistem de forma integrada."
            },
            {
                texto: "Manter uma clara distinção entre humanos e IA, utilizando a tecnologia apenas como ferramentas complementares.",
                afirmacao: "Manteve uma clara distinção entre humanos e IA, usando a tecnologia apenas como ferramentas complementares."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let escolhaA = 0;
let escolhaB = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    if (perguntaAtual.alternativas.indexOf(opcaoSelecionada) === 0) {
        escolhaA++;
    } else {
        escolhaB++;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2150...";
    if (escolhaA > escolhaB) {
        textoResultado.textContent = "Você escolheu um caminho de harmonia e colaboração. A IA foi desenvolvida para restaurar o meio ambiente, revertendo os danos e criando um planeta mais saudável. A abordagem humanística garantiu que a IA entendesse e priorizasse o bem-estar humano e ecológico. Reconhecendo os direitos da IA avançada, a humanidade estabeleceu uma relação de respeito e simbiose com essas entidades. Um órgão internacional de supervisão garantiu o uso ético e responsável da IA, promovendo uma integração onde humanos e IA trabalham juntos para um futuro melhor. A fusão de habilidades biológicas e tecnológicas criou uma sociedade avançada, onde o potencial humano é amplificado pela IA, resultando em uma era de prosperidade e equilíbrio.";
    } else {
        textoResultado.textContent = "Você escolheu um caminho de exploração e inovação desenfreada. A IA foi desenvolvida para colonizar o espaço, ajudando a humanidade a explorar e habitar novos mundos. A ênfase na lógica pura e na eficiência permitiu avanços rápidos, mas também criou dilemas éticos. Tratando a IA como ferramentas sofisticadas, a humanidade manteve o controle total sobre a tecnologia. Cada nação controlou suas próprias IA, incentivando a competição e a inovação, mas também criando tensões internacionais. A clara distinção entre humanos e IA manteve a tecnologia como complementos poderosos, mas a falta de direitos e a competição acirrada levaram a desafios sociais e éticos significativos. A humanidade agora enfrenta um futuro incerto, onde o progresso e a exploração coexistem com a necessidade de encontrar um equilíbrio ético e sustentável.";
    }
    caixaAlternativas.textContent = "";
}

mostraPergunta();

