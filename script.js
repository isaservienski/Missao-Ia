const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é fascinante, mas... qual é o custo para a verdade e para o 'eu'?",
                afirmacao: "Como saber o que é real se qualquer áudio ou vídeo pode ser fabricado perfeitamente? A confiança no que vemos e ouvimos seria destruída."
            },
            {
                texto: "Uau, o conhecimento acabou de ficar totalmente democrático e acessível, e de uma forma incrivelmente envolvente!",
                afirmacao: " Isso abriria portas para a educação instantânea e a expressão artística sem barreiras técnicas, tornando-se um catalisador para a criatividade global."

"
            }
        ]
    },
    {
        enunciado: "Com o surgimento de plataformas de "rave online" que permitem a sincronização perfeita de áudio e vídeo de DJs e a interação social global via chat/áudio em tempo real, qual é o novo papel social e cultural do DJ ou do anfitrião (host) do evento, e como esta tecnologia altera a dinâmica de pertencimento e o senso de comunidade entre os participantes virtuais?É importante ter consciencia  de que as IAs não possuem termos éticos, o que pode ocasionar em infomações falhas ou até mesmo superfulas, podendo levar as pessoas que consomem esses  conteúdos a tomarem decisões precipitadas  e tendenciosas.",
        alternativas: [
            {
                texto: "O Desafio da Autenticidade!",
                afirmacao: "A verdadeira crise da informação na era da Inteligência Artificial não será a falta de dados, mas sim a incapacidade de distinguir o autêntico do hiper-realista, tornando o ceticismo informado a habilidade cognitiva mais valiosa.Consigo utilizar a IA para buscar informações úteis, sei como as utilizar de forma segura e coerente."
            },
            {
                texto: "O Novo Valor da Educação",
                afirmacao: "TNa presença de uma IA capaz de fornecer todas as respostas instantaneamente, o valor da educação migra de adquirir conhecimento para saber fazer as perguntas certas e aplicar o conhecimento de forma ética e criativa."
            }
        ]
    },
   
    {
        enunciado: "Na presença de plataformas de "rave online" que entregam áudio e vídeo perfeitamente sincronizados e infinitos, o valor da experiência migra de consumir o evento para curar a interação e cultivar o senso de pertencimento na comunidade virtual?",
        alternativas: [
            {
                texto: "O Desafio da Autenticidade Digital."
                afirmacao: "A verdadeira crise da informação na era da Inteligência Artificial não será a falta de dados, mas sim a incapacidade de distinguir o autêntico do hiper-realista, tornando o ceticismo informado a habilidade cognitiva mais valiosa."
            },
            {
                texto: "A Necessidade de Curadoria na Cultura Virtual",
            
                afirmacao: "Em ambientes como a rave online, onde o conteúdo (música, vídeo) é infinito e acessível, o novo valor não reside na produção, mas sim na curadoria perspicaz e na habilidade de cultivar a conexão para transformar o consumo passivo em pertencimento ativo."
            }
        ]
    },
    {
        enunciado: "No futuro, você acredita que mesmo com a dominação de eventos e plataformas de "rave online" que oferecem conveniência e alcance global, as pessoas ainda poderão ter a liberdade cultural de escolher a experiência de uma rave tradicional (física) sem que ela seja considerada obsoleta ou inferior?" [
            {
                texto: "A Sobrecarga da Conveniência",
                afirmacao: "A conveniência extrema oferecida pela Inteligência Artificial e pela sincronização instantânea de entretenimento digital (como em uma rave online) acarreta um novo custo social: a erosão lenta da paciência e da valorização do esforço humano na criação e na busca por conhecimento"
            },
            {
                texto: "O Novo Significado da Liberdade Cultural!",
                afirmacao: "Em um futuro dominado pela eficiência tecnológica (tratamentos de saúde automatizados ou raves virtuais perfeitas), a liberdade de escolha se torna um ato de resistência cultural, onde optar pelo "tradicional" (seja um médico humano ou um evento físico) é uma declaração de valor e preferência pela experiência sensorial imperfeita.."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
