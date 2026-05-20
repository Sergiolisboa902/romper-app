require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-06-11",
    manha: {
      original: {
        versiculo: { texto: "Nós o amamos a ele porque ele nos amou primeiro", referencia: "1Jo 4:19" },
        topicos: [
          { ordem: 1, icone: "☀️", titulo: "Fonte do Amor", conteudo: "Não há luz no planeta senão aquela que procede do sol, e não existe verdadeiro amor a Jesus no coração senão aquele que vem do próprio Senhor Jesus. A partir dessa transbordante fonte do infinito amor de Deus é que todo o nosso amor a Deus deve brotar. Esta deve ser sempre a grande e certa verdade: que nós o amamos por nenhuma outra razão senão porque Ele nos amou primeiro.", tags: ["origem", "amor"] },
          { ordem: 2, icone: "🔥", titulo: "Calor do Espírito", conteudo: "O nosso amor a Ele é o justo resultado de Seu amor por nós. Fria admiração ao estudar as obras de Deus qualquer um pode ter, porém o calor do amor só pode ser aceso no coração pelo Espírito de Deus. Quão maravilhoso um mistério como este, o de que nós nunca seríamos levados a amar a Jesus a menos que o Espírito operasse em nós.", tags: ["espírito", "mistério"] },
          { ordem: 3, icone: "🌱", titulo: "Semente Divina", conteudo: "Que maravilha que, quando nos rebelamos contra Ele, por uma exibição tão incrível de amor, Ele buscou nos trazer de volta. Não! nós nunca teríamos sequer um grão de amor para com Deus a menos que esse amor tivesse sido semeado em nós pela doce semente do Seu amor por nós. O amor, então, tem como sua origem o amor de Deus derramado no coração.", tags: ["regeneração", "graça"] },
          { ordem: 4, icone: "🍞", titulo: "Nutrição Celestial", conteudo: "Após ele ter assim divinamente nascido, deve ser ele divinamente nutrido. O amor é um estrangeiro; não é uma planta que floresceria de forma natural no solo humano; ele deve ser regado de cima. Como o amor vem do céu, ele deve ser alimentado de pão celestial. Ele não pode existir no deserto a menos que seja alimentado pelo maná do alto. O amor deve alimentar-se de amor.", tags: ["crescimento", "maná"] }
        ],
        promessa: "Nós o amamos porque Ele nos amou primeiro; Seu amor é a fonte e o sustento do nosso amor.",
        meditacao: "O amor a Jesus é uma flor delicada que deve ser regada diariamente com o maná do alto."
      },
      simples: {
        versiculo: { texto: "Nós amamos porque Deus nos amou primeiro.", referencia: "1Jo 4:19" },
        topicos: [
          { ordem: 1, icone: "☀️", titulo: "De onde vem o Amor", conteudo: "Assim como a luz da Terra vem do sol, o amor verdadeiro no nosso coração vem de Jesus. Só conseguimos amar a Deus porque Ele tomou a iniciativa e nos amou primeiro. Esse amor não nasce por esforço próprio, mas brota da bondade infinita que Deus derramou sobre nós.", tags: ["origem", "gratidão"] },
          { ordem: 2, icone: "🔥", titulo: "Coração Aquecido", conteudo: "Qualquer pessoa pode admirar a natureza, mas sentir um amor ardente por Deus é algo que só o Espírito Santo pode fazer. É Ele quem acende essa chama no nosso peito. É um mistério maravilhoso: Deus nos buscou e nos ensinou a amá-Lo mesmo quando éramos rebeldes contra Ele.", tags: ["espírito", "mudança"] },
          { ordem: 3, icone: "🌱", titulo: "Semente de Bondade", conteudo: "O amor de Deus foi semeado em nós como uma semente preciosa. Sem essa ação de Deus, nosso coração continuaria seco e frio. Tudo o que sentimos de bom em relação ao Senhor é resultado direto do carinho e da misericórdia que Ele teve conosco desde o início.", tags: ["graça", "vida nova"] },
          { ordem: 4, icone: "🍞", titulo: "Alimento do Céu", conteudo: "O amor por Jesus precisa ser alimentado todos os dias com oração e leitura da Bíblia. Como esse sentimento vem do céu, ele não sobrevive com as coisas do mundo. Precisamos do 'pão celestial' para que o nosso amor continue forte e não murche em meio às dificuldades da vida.", tags: ["crescimento", "foco"] }
        ],
        promessa: "O amor de Deus por você é a garantia de que você terá forças para amá-Lo e servi-Lo sempre.",
        meditacao: "Lembre-se hoje: a alma do nosso amor por Deus é o amor que Ele já provou ter por nós."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Ali quebrou as flechas do arco; o escudo, e a espada, e a guerra", referencia: "Sl 76:3" },
        topicos: [
          { ordem: 1, icone: "🔨", titulo: "Sentença de Morte", conteudo: "O grito de nosso glorioso Redentor, 'está consumado', foi a sentença de morte de todos os adversários de Seu povo, o quebrar das 'flechas do arco, o escudo, e a espada, e a guerra'. Eis o Herói do Gólgota usando Sua cruz como uma bigorna e Seus sofrimentos como um martelo, arremetendo em pedaços os nossos pecados.", tags: ["vitória", "redenção"] },
          { ordem: 2, icone: "💥", titulo: "Golpes Gloriosos", conteudo: "Quão gloriosos são os golpes que o poderoso Quebrador dá com um martelo que é muito mais pesado do que a arma lendária de Thor! Como voam em fragmentos os dardos diabólicos, e os escudos infernais são quebrados como vasos de oleiro! Jesus agarra a espada satânica e a lança ao fogo, quebrando o poder do inimigo.", tags: ["poder", "destruição"] },
          { ordem: 3, icone: "🛡️", titulo: "Plena Expiação", conteudo: "Amado, nenhum pecado de um crente pode agora ser uma seta mortal para feri-lo; nenhuma condenação pode agora ser uma espada para matá-lo, pois o castigo do nosso pecado foi levado por Cristo; a plena expiação foi feita por meio do nosso bendito Substituto e Garantidor. Quem agora acusa? Quem agora condena?", tags: ["justiça", "segurança"] },
          { ordem: 4, icone: "🔥", titulo: "Fim das Destruições", conteudo: "Jesus esvaziou as aljavas do inferno, apagou todos os dardos inflamados e quebrou a ponta de cada flecha da ira; o chão está coberto de estilhaços das armas do inferno apenas para nos lembrar de nosso grande livramento. O pecado não tem mais domínio. Ó tu, inimigo, as destruições chegaram a um fim perpétuo.", tags: ["libertação", "triunfo"] }
        ],
        promessa: "Jesus quebrou as armas do inferno e fez plena expiação; nenhum pecado pode mais condenar o crente.",
        meditacao: "O Herói do Gólgota destruiu cada acusação contra você; bendiga ao Senhor por este livramento eterno."
      },
      simples: {
        versiculo: { texto: "Deus quebrou as flechas, os escudos e as espadas da guerra.", referencia: "Sl 76:3" },
        topicos: [
          { ordem: 1, icone: "🔨", titulo: "Tudo Terminado", conteudo: "Quando Jesus disse 'Está consumado' na cruz, Ele decretou o fim dos nossos inimigos espirituais. Ele usou o Seu sofrimento como um martelo para destruir o poder do pecado e quebrar todas as correntes que nos prendiam. A cruz foi o palco da maior vitória da história.", tags: ["vitória", "jesus"] },
          { ordem: 2, icone: "💥", titulo: "Poder Esmagador", conteudo: "Jesus é o Herói que esmagou as armas do mal. Ele desarmou o inimigo e destruiu todos os ataques de Satanás contra nós. Não há força no inferno que possa resistir ao poder de Cristo. Ele transformou as armas que seriam usadas contra nós em pedaços inúteis.", tags: ["poder", "segurança"] },
          { ordem: 3, icone: "🛡️", titulo: "Livre de Acusações", conteudo: "Agora que Jesus pagou a nossa dívida, nenhum pecado tem poder para nos destruir. Ninguém pode nos acusar ou condenar diante de Deus, porque Jesus assumiu o nosso lugar. Podemos viver com a consciência limpa, sabendo que o preço da nossa paz foi totalmente pago pelo Salvador.", tags: ["perdão", "paz"] },
          { ordem: 4, icone: "🔥", titulo: "Inimigo Derrotado", conteudo: "As armas do mal estão espalhadas pelo chão, quebradas e sem utilidade. Elas servem apenas para nos lembrar do grande livramento que recebemos. O pecado não manda mais na sua vida. Agradeça a Jesus por ter acabado com os planos de destruição do inimigo e descanse no Seu triunfo.", tags: ["liberdade", "gratidão"] }
        ],
        promessa: "Nenhuma arma ou acusação espiritual terá sucesso contra você, pois Jesus já venceu a batalha.",
        meditacao: "Termine seu dia celebrando a vitória de Cristo; o mal foi derrotado e você é livre para amar a Deus."
      }
    }
  },
  {
    data: "2026-06-12",
    manha: {
      original: {
        versiculo: { texto: "(…) Pesado foste na balança, e foste achado em falta", referencia: "Dn 5:27" },
        topicos: [
          { ordem: 1, icone: "⚖️", titulo: "Autoexame Sagrado", conteudo: "É bom frequentemente pesar-nos na balança da Palavra de Deus. É um sagrado exercício ler algum salmo de Davi e perguntar a si mesmo: 'Posso dizer isso? Já senti o que Davi sentiu? Tem o meu coração sido quebrantado por causa do pecado como o dele?'. Esse teste revela a nossa real condição espiritual diante do santuário.", tags: ["exame", "palavra"] },
          { ordem: 2, icone: "🙇", titulo: "Seguir o Exemplo", conteudo: "Repare a vida de Cristo e pergunte-se o quão longe você está conformado a Sua semelhança. Esforce-se para descobrir se você tem a mansidão, a humildade e o espírito encantador que Ele demonstrou. Tome as epístolas e veja se você pode acompanhar o apóstolo Paulo em sua auto-humilhação e devoção profunda.", tags: ["jesus", "humildade"] },
          { ordem: 3, icone: "📉", titulo: "Reconhecer a Falta", conteudo: "Alguma vez você já gritou: 'Miserável homem que eu sou! quem me livrará?'. Você já pareceu a si mesmo ser o principal dos pecadores? Se lendo a Palavra tivermos motivo para parar e dizer: 'Senhor, sinto que nunca estive aqui', use isso como clamor: 'Ó, traze-me aqui! Dá-me verdadeira penitência, fé e fervor'.", tags: ["arrependimento", "busca"] },
          { ordem: 4, icone: "🏛️", titulo: "Balança do Santuário", conteudo: "Não se deixe ser 'achado em falta' quando pesado na balança do santuário, para que não seja achado nas escalas de julgamento final. Julgai-vos a vós mesmos para que não sejais julgados. Peça a graça da mansidão e que o Senhor o torne mais semelhante a Jesus a cada novo exame da Sua santa verdade.", tags: ["justiça", "santidade"] }
        ],
        promessa: "Aquele que se julga à luz da Palavra de Deus encontrará o caminho para a verdadeira transformação.",
        meditacao: "Use a Bíblia como um teste da sua alma; se algo faltar, clame por graça até que Jesus seja formado em você."
      },
      simples: {
        versiculo: { texto: "Você foi pesado na balança e não atingiu o peso necessário.", referencia: "Dn 5:27" },
        topicos: [
          { ordem: 1, icone: "⚖️", titulo: "Teste do Coração", conteudo: "É importante olhar para a Bíblia e comparar a nossa vida com o que ela ensina. Pergunte-se: 'Eu realmente sinto o que os homens de Deus sentiam?'. Avaliar nossas atitudes e sentimentos com honestidade nos ajuda a perceber onde precisamos melhorar e crescer na nossa caminhada com Deus.", tags: ["reflexão", "honestidade"] },
          { ordem: 2, icone: "🙇", titulo: "Ser como Jesus", conteudo: "Olhe para a vida de Jesus e veja se você tem sido paciente, humilde e amoroso como Ele foi. Tente perceber se a sua devoção a Deus é real ou apenas aparência. Ser cristão significa buscar ser cada dia um pouco mais parecido com o nosso Mestre em todos os detalhes.", tags: ["exemplo", "atitude"] },
          { ordem: 3, icone: "📉", titulo: "Pedir Ajuda", conteudo: "Se ao ler a Bíblia você perceber que ainda está longe do ideal de Deus, não desanime. Use isso como um motivo para orar: 'Senhor, eu ainda não sou assim, por favor, me mude!'. Reconhecer que precisamos de mais fé e de um coração mais arrependido é o primeiro passo para receber a ajuda de Deus.", tags: ["oração", "mudança"] },
          { ordem: 4, icone: "🏛️", titulo: "Foco no que Vale", conteudo: "Não viva de forma descuidada. É melhor perceber nossas falhas agora e pedir perdão do que sermos cobrados no futuro. Busque a santidade e a retidão todos os dias. Deixe que a Palavra de Deus molde o seu caráter para que você seja aprovado pelo Senhor em tudo o que fizer.", tags: ["santidade", "foco"] }
        ],
        promessa: "Deus dá sabedoria e força para quem deseja sinceramente mudar de vida e seguir a Sua vontade.",
        meditacao: "Aproveite o dia de hoje para alinhar o seu coração com os ensinamentos de Jesus."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Que nos salvou, e chamou com uma santa vocação (…)", referencia: "2Tm 1:9" },
        topicos: [
          { ordem: 1, icone: "⚓", titulo: "Salvação Presente", conteudo: "Os crentes em Cristo Jesus estão salvos. Não são vistos como pessoas em um estado de expectativa, mas já possuem a salvação. Ela não é uma bênção apenas para o leito de morte ou para o céu, mas uma questão a ser obtida, recebida, garantida e aproveitada agora. O cristão está perfeitamente salvo pelo propósito de Deus.", tags: ["salvação", "certeza"] },
          { ordem: 2, icone: "💰", titulo: "Preço Pago", conteudo: "Ele está salvo também quanto ao preço que foi pago por ele; 'está consumado', foi o grito do Salvador antes de morrer. O crente também está perfeitamente salvo no propósito da aliança, pois assim como caiu em Adão, agora ele vive em Cristo. Toda a obra de resgate foi completada pela graça soberana.", tags: ["redenção", "aliança"] },
          { ordem: 3, icone: "🕊️", titulo: "Santa Vocação", conteudo: "Essa completa salvação é acompanhada por uma sagrada vocação. Aqueles a quem o Salvador salvou na cruz serão, no devido tempo, eficazmente chamados pelo poder do Espírito Santo à santificação. Eles deixam os seus pecados e se esforçam para serem como Cristo por causa de uma nova natureza que se alegra na santidade.", tags: ["chamado", "santidade"] },
          { ordem: 4, icone: "✨", titulo: "Beleza da Graça", conteudo: "Deus não nos chamou porque éramos santos, mas para que pudéssemos ser santos. As excelências que vemos em um crente são tanto obras de Deus como da própria expiação. A salvação deve ser pela graça, porque o Senhor atua de tal maneira que a nossa justiça é para sempre excluída e apenas a Sua plenitude é revelada.", tags: ["graça", "obra de deus"] }
        ],
        promessa: "O cristão desfruta de uma presente salvação e de uma vida santa como evidência de seu chamado.",
        meditacao: "Alegre-se na salvação concluída; Cristo já pagou o preço e o Espírito Santo está produzindo beleza em você."
      },
      simples: {
        versiculo: { texto: "Deus nos salvou e nos chamou para sermos dEle.", referencia: "2Tm 1:9" },
        topicos: [
          { ordem: 1, icone: "⚓", titulo: "Você está Salvo", conteudo: "Se você confia em Jesus, a sua salvação não é uma dúvida ou algo para o futuro distante; é um presente que você já recebeu. Você pode ter a segurança e a paz de saber que pertence a Deus hoje mesmo. A salvação é para ser aproveitada e celebrada durante toda a nossa vida aqui na Terra.", tags: ["segurança", "paz"] },
          { ordem: 2, icone: "💰", titulo: "Dívida Paga", conteudo: "O preço pelo seu resgate já foi totalmente pago por Jesus na cruz. Não falta nada para ser feito. Quando Jesus morreu, Ele garantiu que você fosse livre da culpa e do medo. Você agora vive sob um novo compromisso de amor que Deus fez com você e que nunca será quebrado.", tags: ["liberdade", "amor"] },
          { ordem: 3, icone: "🕊️", titulo: "Novo Jeito de Viver", conteudo: "Estar salvo significa ser chamado por Deus para viver de um jeito diferente. O Espírito Santo começa a mudar os nossos gostos: passamos a odiar o que é errado e a amar o que é bom e puro. Essa mudança acontece naturalmente porque Deus nos deu uma nova natureza que deseja agradar ao Pai.", tags: ["mudança", "santidade"] },
          { ordem: 4, icone: "✨", titulo: "Tudo é Graça", conteudo: "Deus não nos escolheu porque éramos bons ou perfeitos. Ele nos escolheu para nos tornar pessoas melhores. Toda a bondade e honestidade que aparecem na nossa vida são frutos do trabalho de Deus em nós. Agradeça ao Senhor por Ele fazer tudo por você e transformar a sua vida com tanta paciência.", tags: ["gratidão", "favor"] }
        ],
        promessa: "A sua salvação está garantida por Deus e a sua nova vida é a prova do amor dEle por você.",
        meditacao: "Durma em paz sabendo que Jesus já realizou tudo o que era necessário para você viver com Deus."
      }
    }
  },
  {
    data: "2026-06-13",
    manha: {
      original: {
        versiculo: { texto: "(…) quem quiser, tome de graça da água da vida", referencia: "Ap 22:17" },
        topicos: [
          { ordem: 1, icone: "⛲", titulo: "Tome de Graça", conteudo: "Jesus diz: 'Tome de graça'. Ele não requer pagamento ou preparação. Ele não busca recomendação de nossas virtuosas emoções. Se você não tem bons sentimentos, mas está tão somente desejoso, você está convidado; portanto, venha! Você não tem fé ou qualquer arrependimento? Venha a Ele, e Ele dará a você.", tags: ["graça", "convite"] },
          { ordem: 2, icone: "💧", titulo: "Fonte Gratuita", conteudo: "Venha como você está e tome 'de graça', sem dinheiro e sem preço. As fontes de água nas esquinas são benfeitorias valiosas; ninguém é tolo a ponto de não beber por ser pobre. Por mais carente que seja o homem, há uma fonte, e tal como está, ele poderá dela beber. O fato das fontes estarem lá é a própria licença para qualquer pessoa.", tags: ["provisão", "liberdade"] },
          { ordem: 3, icone: "🚫", titulo: "Orgulho e Sede", conteudo: "Muitos são ricos em suas próprias boas obras e não conseguem vir a Cristo. Eles pensam ser 'rebaixamento' serem salvos da mesma forma que os pecadores vis. Esses orgulhosos presunçosos permanecem com sede, pois não aceitam a fonte comum. Eles andam com lábios ressecados enquanto a água da vida flui livremente para todos.", tags: ["orgulho", "vaidade"] },
          { ordem: 4, icone: "🤲", titulo: "Para quem Quiser", conteudo: "Sedento viajante, não espere por uma licença especial para beber do Evangelho. A liberalidade de Deus colocou essa refrescante fonte à disposição e podemos beber sem fazer perguntas. 'Quem quiser' é a única condição. Deixe de lado suas pretensões e sacie sua alma no manancial inesgotável da misericórdia de Jesus.", tags: ["salvação", "misericórdia"] }
        ],
        promessa: "A água da vida é gratuita para todos os necessitados; basta querer para receber a plenitude de Deus.",
        meditacao: "Não deixe seu orgulho te manter sedento; venha a Jesus tal como está e tome de graça da salvação."
      },
      simples: {
        versiculo: { texto: "Quem quiser, venha e beba de graça da água da vida.", referencia: "Ap 22:17" },
        topicos: [
          { ordem: 1, icone: "⛲", titulo: "É de Graça", conteudo: "Jesus te convida a receber a vida eterna sem cobrar nada em troca. Você não precisa se preparar ou ser 'bom o suficiente' para ir até Ele. Se você sente que falta algo na sua vida e deseja mudar, o convite é para você. Não importa o seu passado ou as suas falhas; a graça de Deus é gratuita.", tags: ["presente", "amor"] },
          { ordem: 2, icone: "💧", titulo: "Beba à Vontade", conteudo: "Pense em uma fonte pública de água: qualquer pessoa pode parar e beber, seja rica ou pobre. A salvação de Jesus é assim. Ela está disponível para todos os que têm sede espiritual. Você não precisa de uma autorização especial; o simples fato de Jesus oferecer a ajuda já é o seu direito de aceitá-la.", tags: ["acesso", "ajuda"] },
          { ordem: 3, icone: "🚫", titulo: "Cuidado com o Orgulho", conteudo: "Muitas pessoas não aceitam a ajuda de Deus porque acham que podem se salvar sozinhas ou porque se consideram melhores que os outros. Esse orgulho impede a alma de encontrar a verdadeira paz. Não cometa esse erro. Reconheça que você precisa de Jesus tanto quanto qualquer outra pessoa e receba a vida que Ele oferece.", tags: ["humildade", "verdade"] },
          { ordem: 4, icone: "🤲", titulo: "Convite Aberto", conteudo: "O recado de Deus é simples: 'Quem quiser, venha!'. Não complique as coisas com perguntas ou dúvidas. Vá até Jesus, conte para Ele o que você precisa e deixe que Ele preencha o vazio do seu coração. O manancial de amor de Deus nunca seca e Ele tem prazer em saciar a sede de quem O procura.", tags: ["atitude", "decisão"] }
        ],
        promessa: "Deus prometeu saciar a sede espiritual de todo aquele que se aproximar dEle com um coração sincero.",
        meditacao: "Aproveite a oportunidade hoje; beba da paz de Deus e sinta a renovação na sua alma."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Afasta de mim a vaidade e a palavra mentirosa (…); Não me desampares, Senhor", referencia: "Pv 30:8; Sl 38:21" },
        topicos: [
          { ordem: 1, icone: "✨", titulo: "Estado Mais Feliz", conteudo: "Aqui temos duas grandes lições: o que desaprovar e o que suplicar. O estado mais feliz de um cristão é o santo. Assim como o lugar mais quente é aquele próximo ao sol, o lugar de maior felicidade é aquele mais próximo de Cristo. Nenhum cristão desfruta de conforto quando seus olhos estão postos na vaidade ou mentira.", tags: ["santidade", "felicidade"] },
          { ordem: 2, icone: "🚫", titulo: "Atividades Vãs", conteudo: "O mundano pode obter felicidade em qualquer outro lugar, mas não o cristão. Atividades vãs são perigosas para as almas regeneradas. Ouvimos falar de um filósofo que, enquanto olhava para as estrelas, caiu em um poço; contudo, quão profundamente caem os crentes quando olham para baixo, para as futilidades do pecado!", tags: ["vigilância", "mundo"] },
          { ordem: 3, icone: "🛡️", titulo: "Segurança na Proximidade", conteudo: "Nenhum cristão está seguro quando sua alma é indolente ou seu Deus está longe dele. Satanás não costuma atacar um cristão que vive próximo de Deus; é quando o cristão se afasta, tornando-se espiritualmente carente, que o diabo descobre sua hora de vantagem. A proteção está em caminhar humildemente com nosso Deus.", tags: ["proteção", "comunhão"] },
          { ordem: 4, icone: "📉", titulo: "Passos em Falso", conteudo: "Aquele que escorrega quando desce ao 'Vale da Humilhação', cada vez que dá um passo em falso acaba por convidar o inimigo para atacá-lo. Todo cristão está sempre seguro quanto à sua posição em Cristo, mas sua experiência diária de paz depende de sua fidelidade e proximidade com o Salvador em todas as horas.", tags: ["integridade", "alerta"] }
        ],
        promessa: "Deus sustenta e protege o crente que busca viver próximo a Ele em verdade e santidade.",
        meditacao: "Afaste o seu olhar das vaidades e peça ao Senhor que nunca Se afaste de você, pois nEle está sua única segurança."
      },
      simples: {
        versiculo: { texto: "Senhor, afasta de mim as mentiras e não me abandone.", referencia: "Pv 30:8; Sl 38:21" },
        topicos: [
          { ordem: 1, icone: "✨", titulo: "Onde Mora a Alegria", conteudo: "A verdadeira felicidade para quem segue a Jesus está em viver de forma correta e pura. Assim como sentimos mais calor perto do fogo, sentimos mais alegria perto de Cristo. Não procure felicidade em coisas vazias ou em mentiras; a paz real só acontece quando estamos em sintonia com Deus.", tags: ["felicidade", "sinceridade"] },
          { ordem: 2, icone: "🚫", titulo: "Perigos do Mundo", conteudo: "As distrações e os prazeres errados do mundo são perigosos para a nossa fé. Muitas vezes focamos em coisas sem importância e acabamos nos perdendo em caminhos ruins. Lembre-se: o que diverte o mundo muitas vezes rouba a paz do cristão. Mantenha seu foco no que realmente importa para a sua alma.", tags: ["foco", "vigilância"] },
          { ordem: 3, icone: "🛡️", titulo: "Proteção Constante", conteudo: "Você está mais protegido contra as tentações quando está próximo de Deus. O mal raramente ataca quem está ocupado servindo ao Senhor e orando. O risco aumenta quando ficamos preguiçosos espiritualmente ou nos afastamos da presença de Deus. O segredo da segurança é caminhar de mãos dadas com Jesus.", tags: ["proteção", "intimidade"] },
          { ordem: 4, icone: "📉", titulo: "Atenção nos Passos", conteudo: "Cada pequena decisão errada ou deslize que cometemos é um convite para o desânimo e para problemas maiores. Embora Deus nunca desista de nós, nossa paz diária depende da nossa obediência. Peça a Deus hoje a graça de viver com humildade e atenção, evitando qualquer passo em falso.", tags: ["cuidado", "atitude"] }
        ],
        promessa: "Deus promete estar ao seu lado e te dar forças para vencer as vaidades deste mundo.",
        meditacao: "Termine seu dia pedindo a Deus que te mantenha focado na verdade e sempre perto dEle."
      }
    }
  },
  {
    data: "2026-06-14",
    manha: {
      original: {
        versiculo: { texto: "Deleita-te também no Senhor (…)", referencia: "Sl 37:4" },
        topicos: [
          { ordem: 1, icone: "😊", titulo: "Religião Alegre", conteudo: "A vida do crente é aqui descrita como um deleite em Deus; então, estamos certificados quanto ao grande fato de que a verdadeira religião transborda em felicidade e alegria. Homens ímpios nunca olham para a religião como algo alegre; para eles é uma cerimônia ou dever, porém nunca um prazer ou deleite.", tags: ["alegria", "verdade"] },
          { ordem: 2, icone: "🔗", titulo: "União Inquebrável", conteudo: "Crentes que conhecem a Cristo entendem que fé e deleite são tão abençoadamente unidos que as portas do inferno não prevalecerão tentando separá-los. Aqueles que amam a Deus compreendem que Seus caminhos são caminhos de delícias, e todas as Suas veredas de paz. Não tememos a Deus por obrigação, mas por amor.", tags: ["paz", "unidade"] },
          { ordem: 3, icone: "💎", titulo: "Jóias em Ouro", conteudo: "Nossa piedade é o nosso prazer, nossa esperança é a nossa felicidade, nosso dever é o nosso deleite. Deleite e verdadeira religião estão tão unidos como raiz e flor; tão indivisível como verdade e certeza; são, de fato, duas brilhantes jóias preciosas, lado a lado, cravadas em ouro puro pelo próprio Senhor.", tags: ["valor", "essência"] },
          { ordem: 4, icone: "👣", titulo: "Seguir por Prazer", conteudo: "Os santos descobrem em seu Senhor tamanha plenitude que O seguiriam apesar de todo o mundo lançar fora Seu nome como um mal. Nossa fé não é entrave nem nossa profissão de fé é escravidão. Somos atraídos pela beleza de Cristo e encontramos na obediência o descanso que a nossa alma tanto almeja.", tags: ["adoração", "fidelidade"] }
        ],
        promessa: "A verdadeira religião é deleite e paz; os caminhos do Senhor são cheios de alegria transbordante.",
        meditacao: "Que a sua vida com Deus hoje não seja um fardo, mas o seu maior prazer e felicidade."
      },
      simples: {
        versiculo: { texto: "Sinta prazer em servir ao Senhor.", referencia: "Sl 37:4" },
        topicos: [
          { ordem: 1, icone: "😊", titulo: "Felicidade Real", conteudo: "Servir a Deus não é algo chato ou pesado; é a fonte da verdadeira alegria. Muitas pessoas acham que a religião é apenas um conjunto de regras, mas quem conhece Jesus sabe que estar com Ele traz uma felicidade que nada no mundo consegue superar. O Reino de Deus é feito de paz e contentamento.", tags: ["alegria", "vida"] },
          { ordem: 2, icone: "🔗", titulo: "Amor, não Obrigação", conteudo: "Nós seguimos a Jesus porque O amamos, e não porque somos obrigados. Quando o amor de Deus enche o nosso coração, fazer o que é certo se torna um prazer. Os caminhos de Deus nos levam a lugares de descanso e segurança, e a nossa fé nos dá forças para enfrentar qualquer dificuldade com um sorriso no rosto.", tags: ["amor", "paz"] },
          { ordem: 3, icone: "💎", titulo: "Tesouros Unidos", conteudo: "A fé e a alegria andam sempre juntas, como a raiz e a flor. Uma não existe sem a outra. Ser cristão é ter a esperança de um futuro maravilhoso e a felicidade de um presente acompanhado pelo Criador. Essa combinação é o segredo para uma vida plena e com sentido todos os dias.", tags: ["fé", "valor"] },
          { ordem: 4, icone: "👣", titulo: "Prazer em Obedecer", conteudo: "Descobrimos em Jesus tudo o que precisamos para sermos felizes. Por isso, seguir os passos dEle é o nosso maior desejo. Mesmo que o mundo não entenda, nós sabemos que a liberdade real está em obedecer a Deus e viver perto dEle. Deixe que o prazer da presença de Jesus guie as suas atitudes hoje.", tags: ["obediência", "liberdade"] }
        ],
        promessa: "Se você buscar a sua felicidade em Deus, Ele realizará os desejos mais profundos do seu coração.",
        meditacao: "Encare as suas tarefas de hoje com alegria, lembrando que servir ao Senhor é um privilégio maravilhoso."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Ó Senhor, a nós pertence a confusão de rosto […] porque pecamos contra ti", referencia: "Dn 9:8" },
        topicos: [
          { ordem: 1, icone: "🙇", titulo: "Arrependimento Profundo", conteudo: "Uma percepção clara e profunda do pecado deve nos prostrar diante do trono. Favorecidos como temos sido, ainda somos ingratos; privilegiados sem medida, não frutificamos na mesma proporção. Quem não irá corar ao olhar para trás? Pecamos contra a luz que penetrou em nossas mentes e contra o amor no qual nos alegramos.", tags: ["humildade", "arrependimento"] },
          { ordem: 2, icone: "🩸", titulo: "Pecado do Eleito", conteudo: "O pecado de uma alma perdoada é atroz. Olhe para Davi e ouça seus ossos quebrantados em confissão! Repare suas lágrimas e os profundos suspiros com os quais acompanha sua harpa. Olhe para Pedro, que chorou amargamente após sua negação. Esses exemplos nos mostram que a proximidade com Cristo torna a falha ainda mais dolorosa.", tags: ["consciência", "dor"] },
          { ordem: 3, icone: "🔥", titulo: "Tições do Fogo", conteudo: "Nossos pecados, antes e depois da conversão, nos levariam ao lugar de fogo inextinguível se não fosse a misericórdia soberana que nos separou, arrebatando-nos como tições do fogo. É apenas pela graça que não fomos consumidos. Que essa consciência nos leve a uma adoração mais profunda e sincera ao Deus que nos poupa.", tags: ["misericórdia", "salvação"] },
          { ordem: 4, icone: "✨", titulo: "Admirar a Graça", conteudo: "Minha alma, curve-se sob um sentimento de tua pecaminosidade natural e adore teu Deus. Admire a graça que te salva, a misericórdia que te poupa e o amor que te perdoa! Não se engane, mas busque sempre o espírito de penitência que mantém o coração macio e pronto para receber mais da bondade divina nesta noite.", tags: ["graça", "adoração"] }
        ],
        promessa: "A misericórdia do Senhor é a causa de não sermos consumidos; Sua graça é suficiente para perdoar e restaurar.",
        meditacao: "Reconheça suas falhas com honestidade diante de Deus e maravilhe-se com o amor que te aceita apesar de tudo."
      },
      simples: {
        versiculo: { texto: "Senhor, nós ficamos envergonhados porque pecamos contra Ti.", referencia: "Dn 9:8" },
        topicos: [
          { ordem: 1, icone: "🙇", titulo: "Coração Humilde", conteudo: "Reconhecer que erramos é o primeiro passo para estarmos perto de Deus. Mesmo tendo recebido tantas bênçãos, muitas vezes somos ingratos e falhamos com o Senhor. Olhar para o nosso passado com sinceridade nos ajuda a entender o quanto dependemos do perdão e da paciência de Deus todos os dias.", tags: ["humildade", "verdade"] },
          { ordem: 2, icone: "🩸", titulo: "A Dor da Falha", conteudo: "Grandes homens da Bíblia, como Davi e Pedro, sofreram muito quando perceberam que tinham entristecido a Deus. Quando amamos alguém, dói muito quando falhamos com essa pessoa. Se você sente tristeza por ter errado hoje, saiba que esse sentimento é o Espírito Santo te chamando de volta para o caminho certo.", tags: ["perdão", "sentimento"] },
          { ordem: 3, icone: "🔥", titulo: "Resgatados por Amor", conteudo: "Se não fosse o amor imenso de Deus, estaríamos perdidos para sempre. Ele nos tirou do perigo e nos deu uma nova chance. Somos como pessoas que foram salvas de um incêndio no último segundo. Essa gratidão por termos sido resgatados deve ser o que nos motiva a querer viver uma vida cada vez melhor para o Senhor.", tags: ["gratidão", "resgate"] },
          { ordem: 4, icone: "✨", titulo: "Admire o Perdão", conteudo: "Aproveite esta noite para pensar no quanto Deus é bom por te aceitar mesmo conhecendo todos os seus defeitos. Não tente esconder nada dEle; peça perdão com sinceridade e sinta o alívio de ser amado incondicionalmente. O amor de Deus é maior que qualquer pecado seu. Descanse na certeza desse perdão maravilhoso.", tags: ["amor", "paz"] }
        ],
        promessa: "Se confessarmos os nossos pecados, Deus é fiel e justo para nos perdoar e nos limpar de toda maldade.",
        meditacao: "Não durma carregando culpa; entregue tudo a Jesus e receba o descanso que só o perdão dEle oferece."
      }
    }
  },
  {
    data: "2026-06-15",
    manha: {
      original: {
        versiculo: { texto: "E disse Sara: Deus me tem feito riso; todo aquele que o ouvir se rirá comigo", referencia: "Gn 21:6" },
        topicos: [
          { ordem: 1, icone: "😊", titulo: "Milagre do Riso", conteudo: "Foi acima do poder da natureza que a idosa Sara fosse honrada com um filho; e, da mesma forma, além de todas as regras naturais, eu, um pobre e destruído pecador, achei graça para comportar em minha alma a habitação do Espírito. Eu que era seco e estéril como um deserto, fui feito para dar frutos de santificação.", tags: ["milagre", "alegria"] },
          { ordem: 2, icone: "🎵", titulo: "Salmos de Triunfo", conteudo: "Bem que minha boca se encheu de riso por causa da singular e surpreendente graça que recebi do Senhor, pois encontrei Jesus, a semente prometida, e Ele é meu para sempre. Neste dia, eu levantarei salmos de triunfo para o Senhor que lembrou da minha humilhação e exaltou o meu poder em Sua salvação gloriosa.", tags: ["louvor", "vitória"] },
          { ordem: 3, icone: "🗣️", titulo: "Alegria Contagiante", conteudo: "Eu gostaria que todos aqueles que ouvem o meu grande livramento do inferno rissem de alegria comigo. Eu surpreenderia meus familiares com minha paz abundante e alegraria meus amigos com minha felicidade cada vez maior. Quero que o mundo seja impressionado com a alegria genuína que a minha conversa diária manifesta.", tags: ["testemunho", "paz"] },
          { ordem: 4, icone: "🌊", titulo: "Mar de Delícias", conteudo: "Minha alegria não irá parar repentinamente enquanto meu Amado for tema dos meus pensamentos diários. O Senhor Jesus é um profundo mar de alegria; minha alma mergulha nesse mar, sendo engolida nas delícias de Sua comunhão. Olhe para o teu Jesus, minha alma, e convide céu e terra a se unirem em tua alegria indizível.", tags: ["comunhão", "adoração"] }
        ],
        promessa: "O Senhor transforma o nosso deserto em jardim e enche a nossa boca de riso através da Sua salvação.",
        meditacao: "Mergulhe hoje no mar de alegria que é a presença de Jesus e deixe que esse riso santo contagie todos ao seu redor."
      },
      simples: {
        versiculo: { texto: "Sara disse: Deus me deu motivo para rir de alegria.", referencia: "Gn 21:6" },
        topicos: [
          { ordem: 1, icone: "😊", titulo: "O Impossível Aconteceu", conteudo: "Deus fez o impossível na vida de Sara, e Ele fez o mesmo por você ao te salvar. Talvez você se sentisse vazio e sem esperança, mas a graça de Deus trouxe vida nova para o seu coração. É um milagre perceber que o próprio Deus escolheu morar dentro de nós e transformar a nossa tristeza em felicidade real.", tags: ["milagre", "vida nova"] },
          { ordem: 2, icone: "🎵", titulo: "Cantar de Alegria", conteudo: "Saber que Jesus é seu para sempre é o maior motivo para sorrir. Deus olhou para você quando ninguém mais via saída e te deu um motivo para celebrar. Use o dia de hoje para agradecer e cantar ao Senhor, reconhecendo que a Sua bondade mudou completamente o destino da sua história.", tags: ["gratidão", "louvor"] },
          { ordem: 3, icone: "🗣️", titulo: "Felicidade que se Espalha", conteudo: "A alegria que Deus te deu deve ser vista pelas outras pessoas. Que a sua paz e o seu bom humor mostrem aos seus amigos e familiares o quanto Jesus é maravilhoso. Não guarde esse tesouro só para você; deixe que o mundo perceba que existe uma felicidade real que só quem caminha com Deus consegue ter.", tags: ["exemplo", "alegria"] },
          { ordem: 4, icone: "🌊", titulo: "Mergulho na Paz", conteudo: "Estar com Jesus é como mergulhar em um oceano de coisas boas. Quanto mais você pensa nEle, mais feliz você fica. Não deixe as preocupações roubarem o seu sorriso. Mantenha o seu foco no amor de Deus e você verá que a alegria do Senhor é o que te dá forças para vencer qualquer desafio.", tags: ["comunhão", "paz"] }
        ],
        promessa: "Deus trocará o seu desânimo por uma alegria transbordante que todos notarão.",
        meditacao: "Alegre-se hoje com a presença do seu Salvador; Ele é o motivo do seu riso mais sincero."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) o que abre, e ninguém fecha (…)", referencia: "Ap 3:7" },
        topicos: [
          { ordem: 1, icone: "🗝️", titulo: "Chave de Ouro", conteudo: "Jesus é o guardião das portas do paraíso, e coloca diante de cada alma crente uma porta aberta que ninguém será capaz de fechar. Que alegria descobrir que a fé nEle é a chave de ouro para as portas eternas. Minha alma, porventura levas essa chave no teu seio, ou estás confiando em alguma enganosa gazua que irá falhar?", tags: ["fé", "eternidade"] },
          { ordem: 2, icone: "🌹", titulo: "A Flor Escolhida", conteudo: "O grande Rei fez um banquete e proclamou que ninguém entraria senão quem trouxesse consigo a mais bela flor. Milhares trouxeram o que estimavam ser o melhor do jardim, mas foram expulsos. Traziam a beladona da superstição ou a cicuta da justiça própria; flores que não são caras ao Rei e que não abrem os portões.", tags: ["justiça", "superstição"] },
          { ordem: 3, icone: "✨", titulo: "Rosa de Sarom", conteudo: "Minha alma, recolheste a Rosa de Sarom? Exibes o lírio dos vales em teu seio? Se assim for, o Porteiro irá lhe abrir; nem por um momento Ele negará tua admissão, pois para esta Rosa o céu sempre se abre. Tu encontrarás o teu caminho até o trono de Deus, pois nada no paraíso excede a Sua radiante beleza.", tags: ["jesus", "aceitação"] },
          { ordem: 4, icone: "💍", titulo: "Jesus é o Tudo", conteudo: "Pela fé, segure em tua mão a rosa vermelho-sangue do Calvário; pelo amor, exiba-a; pela comunhão, preserve-a. Faça-a teu tudo e serás bem-aventurado acima de toda a felicidade, feliz além do sonho. Jesus seja meu para sempre, meu Deus, meu céu, meu tudo. Ele é a garantia de que entraremos na glória eterna.", tags: ["adoração", "segurança"] }
        ],
        promessa: "Jesus abre as portas do céu para todos os que confiam em Seu sacrifício e trazem a Sua beleza no coração.",
        meditacao: "Confie apenas nos méritos de Jesus, a Rosa de Sarom, como sua única entrada para a felicidade eterna."
      },
      simples: {
        versiculo: { texto: "Jesus abre a porta e ninguém consegue fechar.", referencia: "Ap 3:7" },
        topicos: [
          { ordem: 1, icone: "🗝️", titulo: "Porta Aberta", conteudo: "Jesus é quem manda no céu e Ele abriu uma porta para você que ninguém neste mundo pode fechar. Ter fé em Jesus é como ter a chave mestra que abre o caminho para Deus e para a vida eterna. Tenha a certeza de que você está confiando na pessoa certa para garantir o seu futuro.", tags: ["fé", "esperança"] },
          { ordem: 2, icone: "🌹", titulo: "O Presente Certo", conteudo: "Não adianta tentar impressionar a Deus com nossas próprias boas ações ou com religiosidade vazia. Essas coisas não servem para entrar no Reino dEle. O único 'bilhete de entrada' que Deus aceita é o amor de Jesus no nosso coração. Sem o Salvador, todo o nosso esforço humano acaba sendo inútil para a salvação.", tags: ["humildade", "verdade"] },
          { ordem: 3, icone: "✨", titulo: "Jesus é a Chave", conteudo: "A presença de Jesus na sua vida é o que te dá livre acesso ao Pai. Ele é a pessoa mais linda e importante do universo. Se você estiver unido a Ele, as portas do céu estarão sempre abertas para você. Não tenha medo do futuro; com Jesus ao seu lado, você já tem o lugar garantido na casa de Deus.", tags: ["jesus", "segurança"] },
          { ordem: 4, icone: "💍", titulo: "Meu Tudo", conteudo: "Faça de Jesus o centro da sua vida. Ame o que Ele ama e viva perto dEle todos os dias. Ter Jesus é ter tudo o que uma pessoa precisa para ser verdadeiramente feliz, além de qualquer sonho. Termine o seu dia agradecendo por ter um Salvador que é o seu Deus, o seu céu e o seu melhor amigo.", tags: ["gratidão", "plenitude"] }
        ],
        promessa: "Deus garante a entrada no Seu Reino para todos os que colocam a sua confiança total em Jesus.",
        meditacao: "Descanse hoje na certeza de que a porta da graça de Deus está aberta para você."
      }
    }
  },
  {
    data: "2026-06-16",
    manha: {
      original: {
        versiculo: { texto: "E dou-lhes a vida eterna, e nunca hão de perecer (…)", referencia: "Jo 10:28" },
        topicos: [
          { ordem: 1, icone: "⚓", titulo: "Contra a Incredulidade", conteudo: "O cristão nunca deve pensar levianamente sobre a incredulidade. Desconfiar do Seu amor e fidelidade Lhe é muito desagradável. Quanto podemos ofendê-Lo por duvidar de Sua sustentadora graça? Isso é contrário a cada uma das promessas da preciosa Palavra de Deus, pois nunca serás esquecido ou deixado a perecer.", tags: ["fé", "advertência"] },
          { ordem: 2, icone: "👩‍👦", titulo: "Amor que não Esquece", conteudo: "Se assim pudesse ser, como seria verdadeiro Aquele que disse: 'Porventura pode uma mulher esquecer-se tanto de seu filho? Mas ainda que esta se esquecesse, contudo eu não me esquecerei de ti'. Qual seria o valor da promessa que diz que a aliança da Sua paz não mudará? Deus Se compadece de ti com um amor imutável.", tags: ["fidelidade", "consolo"] },
          { ordem: 3, icone: "🛡️", titulo: "Mão do Pai", conteudo: "Onde estaria a verdade das palavras de Cristo: 'Ninguém as arrebatará da minha mão. Meu Pai é maior do que todos; e ninguém pode arrebatá-las da mão de meu Pai'? Todas as doutrinas da graça seriam refutadas se um único filho de Deus pudesse perecer. A honra, o poder e o juramento de Deus garantem a sua segurança.", tags: ["proteção", "soberania"] },
          { ordem: 4, icone: "🧥", titulo: "Vestes de Alegria", conteudo: "Afaste esses medos incrédulos que tanto desonram a Deus. Levanta-te, sacode a poeira de ti e coloca tuas belas vestes. Lembre-se que é pecaminoso duvidar de Sua palavra, onde Ele prometeu a ti que nunca irás perecer. Deixa a vida eterna dentro de ti expressar-se em confiante e radiante alegria no dia de hoje.", tags: ["alegria", "coragem"] }
        ],
        promessa: "Eu dou-lhes a vida eterna e nunca hão de perecer; ninguém pode arrebatá-los da mão do Pai.",
        meditacao: "Duvidar da fidelidade de Deus é um pecado; levante-se e vista-se de confiança na promessa eterna do Senhor."
      },
      simples: {
        versiculo: { texto: "Eu dou a eles a vida eterna; eles nunca morrerão.", referencia: "Jo 10:28" },
        topicos: [
          { ordem: 1, icone: "⚓", titulo: "Confie Totalmente", conteudo: "Não deixe a dúvida entrar no seu coração. Deus fica triste quando duvidamos do amor e do cuidado dEle. Ele prometeu que nunca vai te esquecer e que você está seguro nas mãos dEle. Ter fé significa acreditar que Deus é fiel e que Ele vai cumprir cada promessa que fez para a sua vida.", tags: ["confiança", "fé"] },
          { ordem: 2, icone: "👩‍👦", titulo: "Mais que Amor de Mãe", conteudo: "Deus nos ama mais do que uma mãe ama o seu bebê. Mesmo que uma mãe pudesse esquecer do seu filho, Deus garante que nunca se esquecerá de você. A paz que Ele te deu não depende das circunstâncias, mas do compromisso eterno que Ele assumiu de te proteger e te guiar em todos os momentos.", tags: ["amor", "cuidado"] },
          { ordem: 3, icone: "🛡️", titulo: "Segurança Absoluta", conteudo: "Jesus disse que ninguém tem poder para te arrancar das mãos dEle e nem das mãos do Pai. O poder de Deus é maior que qualquer problema ou inimigo. Se você pertence a Jesus, você está em um lugar de segurança total. Nada pode mudar o plano de Deus de te levar em segurança até o final da jornada.", tags: ["proteção", "poder"] },
          { ordem: 4, icone: "🧥", titulo: "Ânimo e Alegria", conteudo: "Mande o medo embora! A dúvida só serve para te desanimar e desonrar a Deus. Levante a cabeça e lembre-se que você tem a vida eterna. Viva o dia de hoje com alegria e confiança, sabendo que o Senhor está cuidando de tudo. Você nasceu para ser um vencedor através de Jesus Cristo.", tags: ["ânimo", "alegria"] }
        ],
        promessa: "Você está seguro nas mãos de Deus e nada no universo pode quebrar esse vínculo de proteção.",
        meditacao: "Sorria hoje com a certeza de que o seu futuro eterno já está garantido pelo Senhor."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "O SENHOR é a minha luz e a minha salvação; a quem temerei? (…)", referencia: "Sl 27:1" },
        topicos: [
          { ordem: 1, icone: "🕯️", titulo: "Interesse Pessoal", conteudo: "Há aqui um interesse pessoal: 'Minha luz' e 'minha salvação'. Com o novo nascimento, a luz divina é derramada na alma. Após a conversão, nosso Deus é o nosso conforto, alegria e direção. Repare que Ele não apenas dá luz, mas Ele é luz; não apenas dá salvação, mas Ele é salvação em Sua própria essência divina.", tags: ["identidade", "luz"] },
          { ordem: 2, icone: "🔭", titulo: "Luz em Todo Sentido", conteudo: "Deus é luz interna, luz ao redor, luz que é refletida a partir de nós, e luz a ser revelada a nós. Aquele que se apegou a Deus possui todas as bênçãos da aliança em seu poder. Sendo elas um fato confirmado, o argumento é uma pergunta: 'A quem temerei?'. Uma pergunta que é sua própria resposta vitoriosa.", tags: ["clareza", "segurança"] },
          { ordem: 3, icone: "👊", titulo: "Desafio ao Medo", conteudo: "Os poderes das trevas não são para serem temidos, pois o Senhor os destrói. Esse desafio não repousa sobre o vigor vaidoso de um braço de carne, mas sobre o real poder do onipotente EU SOU. Se Deus é por nós, quem será contra nós? O medo é banido pela presença Daquele que sustenta todo o universo com Sua mão.", tags: ["coragem", "poder"] },
          { ordem: 4, icone: "⚓", titulo: "Cordão de Três Dobras", conteudo: "'O Senhor é a força da minha vida'; aqui está o terceiro brilhante epíteto para mostrar que a esperança está ligada com um cordão que não pode ser quebrado. Nossa vida deriva toda a força de Deus, e se Ele nos faz fortes, não poderemos ser enfraquecidos por maquinações adversas agora ou no porvir.", tags: ["força", "firmeza"] }
        ],
        promessa: "O Senhor é luz, salvação e força; com Ele, não há motivo para temer qualquer poder terreno ou espiritual.",
        meditacao: "Multiplique ações de louvor nesta noite, pois a sua vida está ligada ao onipotente Deus por um vínculo inquebrável."
      },
      simples: {
        versiculo: { texto: "O Senhor é a minha luz e a minha salvação; eu não tenho medo de ninguém.", referencia: "Sl 27:1" },
        topicos: [
          { ordem: 1, icone: "🕯️", titulo: "Deus é Tudo", conteudo: "Diga com confiança: 'Deus é a MINHA luz e o MEU Salvador'. Isso significa que Ele ilumina o seu caminho e te livra de todo perigo. Deus não apenas te ajuda; Ele mesmo é a solução para todos os seus problemas. Ter essa amizade pessoal com o Criador é a maior riqueza que você pode ter.", tags: ["intimidade", "segurança"] },
          { ordem: 2, icone: "🔭", titulo: "Luz que Guia", conteudo: "Deus traz clareza para a sua mente e paz para o seu coração. Ele é como um farol que te guia no meio da escuridão. Quando você confia nEle, você recebe todas as bênçãos que Ele prometeu. Com Deus ao seu lado, você pode encarar qualquer situação perguntando: 'Por que eu teria medo?'.", tags: ["direção", "esperança"] },
          { ordem: 3, icone: "👊", titulo: "Vencer o Medo", conteudo: "Não precisa ter medo do mal ou das coisas que te assustam à noite. O poder de Deus é real e muito maior do que qualquer força negativa. Se o Deus Todo-Poderoso está te protegendo, ninguém consegue te derrubar. A sua segurança não depende da sua força, mas da força infinita do Senhor.", tags: ["coragem", "proteção"] },
          { ordem: 4, icone: "⚓", titulo: "Força Diária", conteudo: "Deus é quem te dá energia e ânimo para viver. Ele é a base da sua vida, como um alicerce que não quebra. Mesmo que você se sinta fraco, a força de Deus te sustenta e te faz aguentar firme. Nada pode enfraquecer você quando o Senhor decide te fortalecer. Descanse nessa certeza maravilhosa.", tags: ["força", "ânimo"] }
        ],
        promessa: "O Senhor te guiará, te salvará e te dará forças em todos os momentos da sua vida.",
        meditacao: "Termine o dia agradecendo a Deus por ser a sua luz e o seu porto seguro no meio de qualquer tempestade."
      }
    }
  },
  {
    data: "2026-06-17",
    manha: {
      original: {
        versiculo: { texto: "Salva-nos, Senhor (…)", referencia: "Sl 12:1" },
        topicos: [
          { ordem: 1, icone: "📣", titulo: "Oração Curta e Direta", conteudo: "A oração é notável por ser curta, embora oportuna e sugestiva. Davi lamentou o pequeno número de homens fiéis e elevou seu coração em súplica; quando a criatura falhou, ele correu para o Criador. Davi sentiu sua própria fraqueza; o salmista vai de forma franca ao seu Deus com uma ponderada oração de apenas duas palavras.", tags: ["oração", "dependência"] },
          { ordem: 2, icone: "👨‍🏫", titulo: "Socorro no Estudo", conteudo: "As ocasiões para essa oração são frequentes. Ela é adequada aos crentes tentados quando toda a ajuda desaparece. Estudantes em dificuldades doutrinárias podem obter ajuda elevando este grito ao Espírito Santo, o grande Professor. Em todos os casos, tempos e lugares, ela servirá com perfeição às almas necessitadas.", tags: ["ajuda", "espírito"] },
          { ordem: 3, icone: "⚔️", titulo: "Reforço na Luta", conteudo: "Guerreiros espirituais em conflitos interiores podem enviá-la ao trono em busca de reforços. Pecadores em dúvidas podem oferecer a mesma persuasiva súplica. 'Salva-me, Senhor' nos atenderá na vida e na morte, no sofrimento ou em trabalhos, em regozijo ou tristeza; nEle, nossa ajuda é encontrada; não sejamos negligentes em clamar.", tags: ["combate", "fidelidade"] },
          { ordem: 4, icone: "💍", titulo: "Resposta Certa", conteudo: "A resposta é certa se for sinceramente oferecida através de Jesus. O caráter do Senhor nos assegura que Ele não deixará Seu povo; Seu relacionamento como Pai e Marido garante Sua ajuda. Jesus é o compromisso de todas as coisas boas, e Sua firme promessa permanece: 'Não temas, eu te ajudo'.", tags: ["promessa", "fidelidade"] }
        ],
        promessa: "A resposta à oração sincera é garantida pelo caráter fiel de Deus e pelo sacrifício de Jesus.",
        meditacao: "Aprenda a orar com clareza e franqueza; um pedido simples de ajuda a Deus vale mais que mil palavras vazias."
      },
      simples: {
        versiculo: { texto: "Senhor, ajuda-nos!", referencia: "Sl 12:1" },
        topicos: [
          { ordem: 1, icone: "📣", titulo: "Fale com Deus", conteudo: "Às vezes não precisamos de orações longas e complicadas. Um pedido simples e sincero de 'Senhor, me ajuda!' chega direto ao coração de Deus. Davi fez isso quando se sentiu sozinho e fraco. Quando você perceber que não consegue resolver algo sozinho, não hesite em chamar pelo seu Criador imediatamente.", tags: ["oração", "sinceridade"] },
          { ordem: 2, icone: "👨‍🏫", titulo: "Ajuda para Aprender", conteudo: "Você pode usar essa oração em qualquer momento do dia. Se estiver com dificuldades para entender algo ou precisando de sabedoria para uma decisão, peça ajuda ao Espírito Santo. Ele é o melhor professor que existe e tem prazer em guiar quem O procura com humildade e vontade de aprender.", tags: ["sabedoria", "busca"] },
          { ordem: 3, icone: "⚔️", titulo: "Força nos Problemas", conteudo: "Nas horas de tentação ou de tristeza, grite por socorro. Essa oração serve para os momentos de vida ou de morte, de riso ou de choro. Deus é a nossa ajuda sempre presente. Não tente carregar o peso do mundo nas costas; admita que você precisa de Deus e sinta o alívio de ser carregado por Ele.", tags: ["consolo", "dependência"] },
          { ordem: 4, icone: "💍", titulo: "Deus Responde", conteudo: "Pode confiar: Deus sempre ouve e responde quem pede com sinceridade. Ele se importa com você como um pai se importa com o filho. Jesus é a prova de que Deus quer o nosso bem e está sempre pronto para nos socorrer. Não tenha medo, pois o Senhor prometeu estar com você e te ajudar em tudo.", tags: ["confiança", "promessa"] }
        ],
        promessa: "Deus ouve as orações mais simples e nunca abandona quem clama por Sua ajuda.",
        meditacao: "Lembre-se hoje: você tem um Deus poderoso que está a apenas um pedido de distância."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Então Israel cantou este cântico: Brota, ó poço! Cantai dele", referencia: "Nm 21:17" },
        topicos: [
          { ordem: 1, icone: "💦", titulo: "Promessa de Água", conteudo: "Famoso foi o poço de Beer, tema da promessa: 'Ajunta o povo e lhe darei água'. As pessoas necessitavam de água, e ela foi prometida pelo gracioso Deus delas. Nós também precisamos de suprimentos de graça celestial e, pelo pacto, o Senhor prometeu nos dar tudo aquilo que necessitamos para a vida espiritual.", tags: ["promessa", "graça"] },
          { ordem: 2, icone: "🎵", titulo: "Louvor na Sede", conteudo: "O poço se tornou motivo de louvor. Antes da água jorrar, uma radiante fé levou as pessoas a cantar; quando viram a fonte borbulhando, o louvor tornou-se jubiloso. Estamos nós sedentos? Não vamos murmurar, mas cantar. Sede espiritual é amarga, mas a promessa indica um poço; vamos, de bom coração, buscá-lo com alegria.", tags: ["louvor", "fé"] },
          { ordem: 3, icone: "🤲", titulo: "Fundamento da Oração", conteudo: "O poço era o fundamento da oração: 'Brota, ó poço!'. Aquilo que Deus Se comprometeu a dar, devemos ir buscar, ou demonstraremos que não temos nem desejo nem fé. Nossos exercícios devocionais não podem ser uma formalidade vazia, mas um canal de graça para sermos cheios de toda a plenitude de Deus.", tags: ["oração", "busca"] },
          { ordem: 4, icone: "⛏️", titulo: "Objeto de Esforço", conteudo: "O poço foi objeto de esforço: 'que cavaram os príncipes'. O Senhor nos deseja ativos na obtenção da graça. A oração não deve ser negligenciada; o congregar não deve ser abandonado. O Senhor nos dará Sua paz abundantemente, mas não em um caminho de ociosidade. Apresse-se em procurá-Lo onde estão as fontes.", tags: ["esforço", "atitude"] }
        ],
        promessa: "Deus prometeu suprir a sede da alma; Ele fará brotar fontes de graça para quem O busca com fé e esforço.",
        meditacao: "Não espere passivamente pela bênção; cave poços de oração e estudo e veja a graça de Deus jorrar em sua alma."
      },
      simples: {
        versiculo: { texto: "O povo cantou: Jorra, água do poço! Cantem para o poço!", referencia: "Nm 21:17" },
        topicos: [
          { ordem: 1, icone: "💦", titulo: "Deus vai Prover", conteudo: "Deus prometeu dar água ao Seu povo no deserto quando eles estavam com sede. Da mesma forma, Ele prometeu dar toda a graça e o ânimo que a sua alma precisa hoje. Você não precisa ficar seco ou desanimado; o Senhor tem um suprimento infinito de coisas boas guardado para você através do Seu amor.", tags: ["provisão", "graça"] },
          { ordem: 2, icone: "🎵", titulo: "Cante antes da Benção", conteudo: "O povo começou a cantar antes mesmo da água aparecer. Isso é ter fé! Em vez de reclamar da 'sede' ou dos problemas, tente louvar a Deus pela solução que Ele vai trazer. O louvor prepara o nosso coração para receber a benção e nos dá alegria enquanto esperamos o tempo certo das coisas acontecerem.", tags: ["fé", "louvor"] },
          { ordem: 3, icone: "🤲", titulo: "Peça com Vontade", conteudo: "O povo orou: 'Brota, água do poço!'. Deus prometeu ajudar, mas Ele quer que a gente peça. Não faça as suas orações apenas por obrigação; peça com vontade e com a certeza de que Deus quer te ouvir. Falar com Deus é o canal por onde as coisas boas dEle chegam até a nossa vida prática.", tags: ["oração", "sinceridade"] },
          { ordem: 4, icone: "⛏️", titulo: "Faça a sua Parte", conteudo: "Os líderes do povo tiveram que cavar para encontrar a água. Deus traz a benção, mas Ele gosta de nos ver agindo também. Vá à igreja, leia a Bíblia e se esforce para estar perto de Deus. O Senhor dá a paz, mas Ele quer que a gente a procure com dedicação e não fique parado esperando cair do céu.", tags: ["atitude", "dedicação"] }
        ],
        promessa: "Deus fará a alegria e a paz jorrarem na sua vida se você O buscar com fé e dedicação.",
        meditacao: "Termine seu dia pedindo a Deus que faça brotar uma fonte de esperança e renovação no seu coração."
      }
    }
  },
  {
    data: "2026-06-18",
    manha: {
      original: {
        versiculo: { texto: "(…) teu Redentor (…) ", referencia: "Is 54:5" },
        topicos: [
          { ordem: 1, icone: "👑", titulo: "Ofícios de Cristo", conteudo: "Jesus, o Redentor, é totalmente nosso e para sempre. Todos os ofícios de Cristo são realizados em nosso nome. Ele é Rei, Sacerdote e Profeta para nós. Sempre que lemos um novo título dEle, vamos nos apropriar como nosso. O cajado, a espada e o cetro de Jesus são todos empregados para nossa exaltação e defesa.", tags: ["identidade", "majestade"] },
          { ordem: 2, icone: "💎", titulo: "Plenitude de Deus", conteudo: "Sua plenitude de Deus é o nosso inesgotável e infalível tesouro. Também Sua humanidade é nossa em toda a Sua perfeição. Para nós, Ele comunica a virtude de um caráter imaculado e a eficácia meritória de uma vida dedicada; em nós, Ele confere a recompensa adquirida pelo Seu incessante serviço e submissão.", tags: ["perfeição", "tesouro"] },
          { ordem: 3, icone: "🧥", titulo: "Bela Cobertura", conteudo: "Ele faz com que o imaculado manto de Sua vida seja nossa bela cobertura; as virtudes de Seu caráter são nossos ornamentos. Ele nos lega Sua manjedoura, para aprendermos como Deus desceu ao homem; Sua cruz, para nos ensinar como o homem vai a Deus. Todos os Seus milagres e intercessões foram para nós.", tags: ["justiça", "sacrifício"] },
          { ordem: 4, icone: "🤝", titulo: "Nosso Cristo", conteudo: "Ele trilhou o caminho da tristeza em nosso favor e tem feito mais por nós com Seu legado celestial do que com todas as obras da Sua vida terrena. Ele não Se envergonha de ser reconhecido como 'nosso Senhor Jesus Cristo'. Cristo é o nosso Cristo, sempre e para sempre, o mais ricamente desfrutável. Chame-O hoje de 'teu Redentor'.", tags: ["comunhão", "honra"] }
        ],
        promessa: "Jesus não Se envergonha de ser o seu Redentor; Ele usa toda a Sua dignidade e poder para a sua proteção e exaltação.",
        meditacao: "Aproprie-se de cada título de Jesus como sendo seu; Ele é o seu Rei, Pastor e Amigo para todo o sempre."
      },
      simples: {
        versiculo: { texto: "Jesus é o seu Redentor.", referencia: "Is 54:5" },
        topicos: [
          { ordem: 1, icone: "👑", titulo: "Ele é Seu", conteudo: "Tudo o que Jesus é e tudo o que Ele tem pertencem a você. Ele é o seu Rei que te protege, o seu Pastor que te guia e o seu Defensor que luta por você. Não veja Jesus como alguém distante, mas como Alguém que colocou toda a Sua autoridade e grandeza à sua disposição para o seu bem.", tags: ["identidade", "proteção"] },
          { ordem: 2, icone: "💎", titulo: "Riqueza Infinita", conteudo: "Jesus compartilha com a gente a Sua perfeição e a Sua bondade. Ele é o tesouro que nunca acaba. Tudo o que Ele conquistou vencendo o pecado e a morte agora é um presente para você. Você não precisa tentar ser perfeito sozinho; Jesus te dá a santidade e a força dEle para você viver em paz.", tags: ["valor", "presente"] },
          { ordem: 3, icone: "🧥", titulo: "Vestido de Justiça", conteudo: "A vida correta de Jesus serve como uma 'roupa' de justiça para você. Quando Deus te olha, Ele vê a perfeição do Seu Filho em sua vida. Jesus nos ensinou com a Sua vinda que Deus quer estar perto de nós e com a Sua morte que nós podemos estar perto de Deus. Todo o esforço dEle foi pensando em você.", tags: ["aceitação", "amor"] },
          { ordem: 4, icone: "🤝", titulo: "Sempre Juntos", conteudo: "Jesus não tem vergonha de ser o seu Salvador. Ele enfrentou tristezas e dores para que você pudesse ter alegria eterna. Ele é o 'nosso' Senhor em todos os momentos e de todas as formas possíveis. Sinta o prazer de ter Cristo como a sua maior posse hoje e sempre. Chame-O agora de 'meu Salvador'.", tags: ["intimidade", "gratidão"] }
        ],
        promessa: "Jesus se comprometeu a ser o seu resgatador e Ele nunca voltará atrás nessa decisão de te salvar.",
        meditacao: "Desfrute hoje da amizade com Jesus, sabendo que tudo o que Ele conquistou agora é seu."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Já entrei no meu jardim, minha irmã, minha esposa (…)", referencia: "Ct 5:1" },
        topicos: [
          { ordem: 1, icone: "🏡", titulo: "Jardim Separado", conteudo: "O coração do crente é o jardim de Cristo. Ele o comprou com Seu precioso sangue. Um jardim envolve separação; não é um terreno baldio, ele é murado. Entristece ouvir cristãos querendo ficar o mais próximo possível do mundo. A graça está baixa quando se busca conformidade com o que não é de Deus.", tags: ["santidade", "separação"] },
          { ordem: 2, icone: "🌹", titulo: "Lugar de Beleza", conteudo: "Um jardim é um lugar de beleza que ultrapassa as terras selvagens. O verdadeiro cristão deve buscar ser mais excelente em sua vida do que o melhor moralista, pois o jardim de Cristo deve produzir as melhores flores do mundo. Não vamos fazê-Lo esperar com plantas murchas ou insignificantes.", tags: ["caráter", "excelência"] },
          { ordem: 3, icone: "🌳", titulo: "Lugar de Crescimento", conteudo: "O jardim é um lugar de crescimento. Os santos não devem permanecer subdesenvolvidos, sendo sempre meros brotos ou flores murchas. Devemos crescer na graça e no conhecimento de Jesus. O crescimento é rápido onde Jesus é o lavrador e o Espírito Santo é o orvalho refrescante que cai do alto.", tags: ["crescimento", "graça"] },
          { ordem: 4, icone: "🤫", titulo: "Lugar de Isolamento", conteudo: "O Senhor Jesus deseja reservar nossas almas como um lugar onde Ele possa Se manifestar, pois Ele não o fará ao mundo. Mantenha seu coração encerrado por Cristo! Não se preocupe como Marta, mas tenha o espaço que Maria teve para se sentar aos pés de Jesus. Que o Senhor regue Seu jardim com chuvas de graça.", tags: ["intimidade", "descanso"] }
        ],
        promessa: "O Senhor Jesus Se manifesta e habita no coração que Se separa do mundo para ser Seu jardim particular.",
        meditacao: "Cuide do seu coração como quem cuida de um jardim para o Rei; deixe que o Espírito Santo traga o crescimento hoje."
      },
      simples: {
        versiculo: { texto: "Já entrei no meu jardim, minha querida.", referencia: "Ct 5:1" },
        topicos: [
          { ordem: 1, icone: "🏡", titulo: "Um Lugar Reservado", conteudo: "O seu coração é como um jardim que Jesus comprou para ser só dEle. Um jardim não é uma rua onde qualquer um passa; ele tem muros e é protegido. Não tente viver igual ao mundo ou seguir caminhos que não agradam a Deus. Valorize o fato de você pertencer exclusivamente ao Senhor e mantenha-se puro.", tags: ["identidade", "proteção"] },
          { ordem: 2, icone: "🌹", titulo: "Beleza Interior", conteudo: "Um jardim deve ser bonito e bem cuidado. A sua vida deve mostrar atitudes melhores e mais amorosas do que as das pessoas que não conhecem a Deus. Busque florescer com bondade e paciência. Não ofereça a Jesus um coração 'murcho' ou preguiçoso, mas dê o seu melhor para agradar ao seu Mestre.", tags: ["atitude", "valor"] },
          { ordem: 3, icone: "🌳", titulo: "Sempre Crescendo", conteudo: "Você não deve ficar parado na sua fé. Deus quer que você cresça, aprenda mais e se torne mais forte a cada dia. Jesus cuida de você como um jardineiro cuida das suas plantas, e o Espírito Santo traz o frescor necessário para você não secar. Confie no cuidado de Deus para o seu crescimento espiritual.", tags: ["crescimento", "força"] },
          { ordem: 4, icone: "🤫", titulo: "Tempo com Jesus", conteudo: "Jesus quer ter momentos a sós com você, longe da agitação do mundo. Ele reserva segredos e carinhos que só mostra para quem O busca de verdade. Não fique tão ocupado com as tarefas do dia a dia a ponto de não ter tempo para se sentar e ouvir a voz de Deus. Deixe que a graça do Senhor refresque a sua alma nesta noite.", tags: ["intimidade", "paz"] }
        ],
        promessa: "Jesus cuidará do seu coração como um jardim precioso e te fará florescer em paz e alegria.",
        meditacao: "Termine o seu dia abrindo o seu 'jardim' para Jesus e desfrutando da companhia dEle."
      }
    }
  },
  {
    data: "2026-06-19",
    manha: {
      original: {
        versiculo: { texto: "E todos foram cheios do Espírito Santo (…)", referencia: "At 2:4" },
        topicos: [
          { ordem: 1, icone: "🕊️", titulo: "Ricas Consequências", conteudo: "As consequências desse sagrado preenchimento são impossíveis de serem estimadas: vida, conforto, luz, pureza, poder e paz. Como óleo sagrado, Ele unge a cabeça do crente, separando-o ao sacerdócio dos santos. Como única água purificante, Ele nos limpa do pecado e nos consagra à santidade, operando em nós o querer e o fazer.", tags: ["espírito", "unção"] },
          { ordem: 2, icone: "💡", titulo: "Luz e Fogo", conteudo: "Como luz, Ele manifestou a nós nossa perdição e agora revela Jesus, guiando-nos na justiça. Não somos mais trevas, porém luz no Senhor. Como fogo, Ele tanto nos purifica da escória como faz resplandecer nossa natureza consagrada. Ele é a chama pelo qual somos capazes de oferecer a alma como sacrifício vivo a Deus.", tags: ["revelação", "purificação"] },
          { ordem: 3, icone: "💧", titulo: "Orvalho e Pomba", conteudo: "Como orvalho celeste, Ele remove nossa esterilidade e fertiliza nossas vidas. Ó, que Ele caia sobre nós neste alvorecer! Como pomba, com asas de amor pacífico, Ele paira sobre a Igreja e sobre os crentes. Como Consolador, Ele dissipa as preocupações e dúvidas que desfiguram a paz da Sua amada em todos os momentos.", tags: ["paz", "consolo"] },
          { ordem: 4, icone: "🌬️", titulo: "Vento da Vida", conteudo: "Ele desce sobre os escolhidos e dá testemunho de adoção, trabalhando neles o espírito filial que clama: 'Aba, Pai'. Como vento, Ele traz o sopro da vida aos homens; soprando onde Lhe apraz, Ele executa as operações de vivificação pelas quais a criação espiritual é sustentada. Queira Deus que possamos sentir Sua presença todos os dias.", tags: ["identidade", "vida"] }
        ],
        promessa: "O Espírito Santo enche o crente com luz, poder e paz, testemunhando a nossa adoção como filhos de Deus.",
        meditacao: "Peça hoje para ser cheio do Espírito Santo; Ele é o óleo, a luz, o fogo e o orvalho que a sua alma necessita."
      },
      simples: {
        versiculo: { texto: "Todos ficaram cheios do Espírito Santo.", referencia: "At 2:4" },
        topicos: [
          { ordem: 1, icone: "🕊️", titulo: "Presentes do Espírito", conteudo: "Ser cheio do Espírito Santo traz coisas maravilhosas: vida, paz, pureza e força. Ele age em nós como um óleo que nos separa para Deus e como uma água que limpa o nosso coração de todo o pecado. Deixe que o Espírito de Deus dirija as suas vontades e as suas ações no dia de hoje.", tags: ["espírito", "força"] },
          { ordem: 2, icone: "💡", titulo: "Luz no Caminho", conteudo: "O Espírito Santo funciona como uma luz que nos mostra quem Jesus é e nos guia pelo caminho certo. Ele também é como um fogo que queima o que é ruim e faz a nossa fé brilhar. Com a ajuda dEle, conseguimos dedicar a nossa vida inteira como um presente de gratidão para Deus.", tags: ["direção", "fé"] },
          { ordem: 3, icone: "💧", titulo: "Paz e Consolo", conteudo: "Sinta o frescor do Espírito Santo como o orvalho da manhã, que tira o cansaço e faz a nossa alma dar bons frutos. Ele é o nosso Consolador, aquele que manda embora as preocupações e as dúvidas. Nos momentos difíceis, Ele traz a calma de uma pomba e protege o nosso coração com o Seu amor pacífico.", tags: ["paz", "descanso"] },
          { ordem: 4, icone: "🌬️", titulo: "Fôlego de Vida", conteudo: "O Espírito Santo nos dá a certeza de que somos filhos de Deus. Ele é como o vento que traz vida e energia para tudo o que fazemos. Peça a Deus hoje para sentir essa presença forte e suave, que nos faz chamar o Criador de 'Pai' com toda a confiança e carinho de uma criança amada.", tags: ["identidade", "vida nova"] }
        ],
        promessa: "Deus prometeu derramar o Seu Espírito sobre você e te guiar em toda a verdade e paz.",
        meditacao: "Comece o seu dia pedindo a direção do Espírito Santo; Ele tem tudo o que você precisa para ser feliz."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "O meu amado é meu, e eu sou dele; ele apascenta o seu rebanho entre os lírios (…)", referencia: "Ct 2:16-17" },
        topicos: [
          { ordem: 1, icone: "☁️", titulo: "Sombras no Panorama", conteudo: "Se há um versículo afortunado é este: 'O meu amado é meu, e eu sou dele'. Tão calmo e cheio de garantia que poderia ter sido escrito pela mesma mão do Salmo 23. No entanto, ela não é uma paisagem inteiramente iluminada pelo sol. Há uma nuvem no céu que lança uma sombra: 'Até que refresque o dia, e fujam as sombras'.", tags: ["fé", "segurança"] },
          { ordem: 2, icone: "⛰️", titulo: "Montanhas de Divisão", conteudo: "Há uma palavra sobre as 'montanhas de Beter', ou 'montanhas de divisão', e para o nosso amor qualquer coisa semelhante à divisão é amargura. Amado, esse pode ser o seu estado; não duvide de sua salvação; você sabe que Cristo é seu, mas você não está se banqueteando com Ele agora. Sente uma ausência temporária de seu Senhor.", tags: ["ausência", "prova"] },
          { ordem: 3, icone: "🐑", titulo: "Entre os Lírios", conteudo: "'Onde ele está?', pergunta a alma. E a resposta vem: 'Ele apascenta o seu rebanho entre os lírios'. Se quisermos encontrar a Cristo, devemos entrar em comunhão com o Seu povo, devemos chegar às ordenanças com os Seus santos. Uma sombra de tristeza pode se lançar, mas a busca diligente trará o vislumbre dEle novamente.", tags: ["comunhão", "busca"] },
          { ordem: 4, icone: "🙏", titulo: "Oração na Sombra", conteudo: "Enquanto você exclama 'Eu sou seu', você é forçado a ficar de joelhos e orar: 'Até que refresque o dia, volta, amado meu'. Oh, por um vislumbre noturno dEle! Que o Senhor não nos deixe em divisão, mas nos atraia para o Seu seio. Ceie com Ele esta noite e deixe que as sombras de Beter se dissipem diante da Sua face gloriosa.", tags: ["oração", "intimidade"] }
        ],
        promessa: "A união do crente com Cristo é eterna e inabalável, mesmo quando as sombras temporárias escondem a Sua face.",
        meditacao: "Não deixe a ausência de sentimentos abalar a sua certeza: 'O meu amado é meu, e eu sou dele' continua sendo a verdade."
      },
      simples: {
        versiculo: { texto: "O meu amado é meu, e eu sou dEle. Ele cuida das Suas ovelhas no meio das flores.", referencia: "Ct 2:16-17" },
        topicos: [
          { ordem: 1, icone: "☁️", titulo: "Certeza na Escuridão", conteudo: "Dizer 'Jesus é meu e eu sou dEle' é a frase mais linda que um cristão pode falar. Traz uma paz enorme saber que pertencemos ao Senhor. Mas nem todos os dias são ensolarados; às vezes surgem nuvens e nos sentimos um pouco distantes ou tristes. Isso não muda a verdade de que você continua sendo de Deus.", tags: ["paz", "fidelidade"] },
          { ordem: 2, icone: "⛰️", titulo: "Sensação de Distância", conteudo: "Às vezes parece que há uma montanha nos separando de Jesus. Você sabe que é salvo, mas não sente a alegria da presença dEle como antes. Essa 'sombra' pode ser um teste ou apenas uma fase difícil. O importante é não duvidar da sua salvação só porque os seus sentimentos estão confusos agora.", tags: ["sentimentos", "firmeza"] },
          { ordem: 3, icone: "🐑", titulo: "Onde Encontrar Jesus", conteudo: "Se você sente falta de Jesus, procure-O nos lugares certos: na oração, na Bíblia e junto com outras pessoas que também O amam. Jesus cuida do Seu povo 'entre as flores', ou seja, na beleza da santidade e da comunhão. Não se isole; busque a companhia dos irmãos e a paz voltará ao seu coração.", tags: ["busca", "comunhão"] },
          { ordem: 4, icone: "🙏", titulo: "Chame pelo Amado", conteudo: "Se você está se sentindo sozinho nesta noite, faça uma oração sincera: 'Senhor, volta para perto de mim!'. Deus ouve esse desejo da sua alma. Mesmo que haja sombras agora, o dia vai amanhecer e a luz de Jesus brilhará novamente para você. Descanse na certeza de que você continua sendo o tesouro mais precioso de Deus.", tags: ["oração", "descanso"] }
        ],
        promessa: "Mesmo que você não sinta Jesus por perto agora, o amor dEle por você continua o mesmo, firme e eterno.",
        meditacao: "Termine seu dia reafirmando a sua fé: 'Eu pertenço a Jesus e nada pode mudar isso'."
      }
    }
  },
  {
    data: "2026-06-20",
    manha: {
      original: {
        versiculo: { texto: "Porque eis que darei ordem, e sacudirei a casa de Israel (…)", referencia: "Am 9:9" },
        topicos: [
          { ordem: 1, icone: "🌪️", titulo: "Ordem Divina", conteudo: "Cada sacudida vem por ordem e permissão divina. Satanás teve que pedir permissão antes de tocar em Jó. Nossas sacudidas são trabalho do céu; Satanás pode ser a peneira na esperança de destruir, porém a mão soberana do Mestre está realizando a purificação pelo mesmo processo. O Senhor dirige tanto o mangual como o crivo.", tags: ["soberania", "prova"] },
          { ordem: 2, icone: "🌾", titulo: "Joeirar o Grão", conteudo: "O Senhor Jesus usará a pá que está em Sua mão e separará o precioso do vil. Nem todos que são de Israel são Israel; o monte no chão do celeiro não é feno limpo e o processo de joeirar precisa ser realizado. Na peneira, apenas o verdadeiro permanece. Cascas e joio voarão diante do vento, e apenas o milho sólido permanecerá.", tags: ["justiça", "verdade"] },
          { ordem: 3, icone: "🛡️", titulo: "Segurança do Trigo", conteudo: "Observe a completa segurança do trigo do Senhor; mesmo o menor grão tem uma promessa de preservação. O próprio Deus peneira e, portanto, é uma severa obra; Ele o faz em todos os lugares, 'entre todas as nações'. Apesar disso, nem o menor ou mais enrugado dos grãos é consentido cair na terra e se perder.", tags: ["proteção", "segurança"] },
          { ordem: 4, icone: "💎", titulo: "Tesouro Preservado", conteudo: "Cada crente individualmente é precioso aos olhos do Senhor. Um joalheiro não perderia um diamante, nem a mãe uma criança; o Senhor não perderá um de Seus remidos. Embora possamos ser pequenos ou sentirmo-nos insignificantes, se somos do Senhor, podemos nos regozijar de que estamos eternamente preservados em Cristo Jesus.", tags: ["valor", "preservação"] }
        ],
        promessa: "Nenhum grão do trigo do Senhor cairá na terra; você está perfeitamente seguro e preservado pela mão de Deus.",
        meditacao: "As provações de hoje são apenas a peneira de Deus para te purificar; você nunca será perdido ou destruído."
      },
      simples: {
        versiculo: { texto: "Eu vou sacudir o povo de Israel como se sacode o trigo numa peneira.", referencia: "Am 9:9" },
        topicos: [
          { ordem: 1, icone: "🌪️", titulo: "Deus no Controle", conteudo: "Nada acontece na sua vida sem que Deus permita. Às vezes passamos por situações que nos 'sacodem' e nos deixam tontos, mas saiba que Deus está no comando dessas situações. O mal pode tentar te destruir, mas Deus usa esses momentos difíceis para limpar o que não presta e fortalecer a sua fé.", tags: ["soberania", "confiança"] },
          { ordem: 2, icone: "🌾", titulo: "O que é Real Fica", conteudo: "As dificuldades servem para mostrar o que é verdadeiro no nosso coração. Assim como a palha voa com o vento e o grão fica na peneira, os desafios revelam a nossa confiança real em Deus. Não tenha medo de ser testado; se a sua fé é sincera, ela vai resistir e se tornar ainda mais forte depois da tempestade.", tags: ["verdade", "firmeza"] },
          { ordem: 3, icone: "🛡️", titulo: "Proteção Total", conteudo: "Deus garantiu que nem o menor grão de trigo se perderia na peneira. Isso quer dizer que Ele cuida de você pessoalmente, em cada detalhe. Mesmo que a prova seja dura e pareça que tudo vai desmoronar, o Senhor está segurando você. Você é valioso demais para Deus para ser deixado de lado ou esquecido.", tags: ["proteção", "cuidado"] },
          { ordem: 4, icone: "💎", titulo: "Você é um Tesouro", conteudo: "Imagine um joalheiro cuidando de um diamante precioso; é assim que Deus cuida de você. Ele não vai permitir que você seja destruído. Mesmo que você se sinta pequeno ou fraco, você pertence ao Senhor, e o compromisso dEle é te manter seguro para sempre. Alegre-se hoje por estar guardado pelo Criador.", tags: ["valor", "alegria"] }
        ],
        promessa: "Deus te manterá seguro em meio a qualquer provação e garantirá que você não sofra nenhum dano permanente.",
        meditacao: "Confie na mão de Deus que te segura hoje; você é um grão precioso que o Senhor nunca deixará cair."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "E, deixando logo as suas redes, o seguiram", referencia: "Mc 1:18" },
        topicos: [
          { ordem: 1, icone: "🏃", titulo: "Obediência Pronta", conteudo: "Quando ouviram o chamado de Jesus, Simão e André obedeceram sem objeção. Se pudéssemos sempre colocar imediatamente em prática aquilo que ouvimos, nossa leitura não falharia em nos enriquecer. Não perderá o seu pão aquele que o come imediatamente, nem será privado do benefício da doutrina aquele que age de acordo com ela.", tags: ["obediência", "ação"] },
          { ordem: 2, icone: "❄️", titulo: "Perigo da Demora", conteudo: "A maioria dos leitores se torna comovida, mas a sugestão é uma flor que não foi atada e nenhuma fruta surge; eles vacilam e esquecem, até que são congelados novamente. Esse fatal 'amanhã' é vermelho-sangue com o assassinato das justas resoluções; é o abatedouro dos inocentes e o maior inimigo da vida espiritual.", tags: ["urgência", "vigilância"] },
          { ordem: 3, icone: "📖", titulo: "Cumpridores da Palavra", conteudo: "Oramos para que os leitores possam ser não apenas leitores, mas cumpridores da palavra. A prática da verdade é a mais adequada leitura. Queira o leitor ficar impressionado com alguma obrigação e se apresse em cumpri-la antes que o brilho sagrado se afaste de sua alma. Deixe suas redes e tudo o que tem antes de ser rebelde.", tags: ["prática", "compromisso"] },
          { ordem: 4, icone: "🚩", titulo: "Rompa as Malhas", conteudo: "Não dê lugar ao diabo pela demora! Corra enquanto oportunidade e despertamento estão em feliz conjunção. Não seja pego em suas próprias redes, mas rompa as malhas do mundanismo e vá para onde a glória te chama. Feliz é o escritor que se reunirá com leitores que decidiram cumprir seus ensinamentos; sua colheita será grande.", tags: ["libertação", "missão"] }
        ],
        promessa: "Aquele que obedece prontamente ao chamado de Jesus encontrará uma colheita de bênçãos e a honra do Mestre.",
        meditacao: "Não deixe para amanhã o que Deus te chamou para fazer hoje; a obediência imediata é o segredo do crescimento espiritual."
      },
      simples: {
        versiculo: { texto: "Eles deixaram as redes na mesma hora e seguiram Jesus.", referencia: "Mc 1:18" },
        topicos: [
          { ordem: 1, icone: "🏃", titulo: "Atitude Rápida", conteudo: "Os primeiros discípulos não ficaram dando desculpas quando Jesus os chamou. Eles agiram na hora! Quando Deus fala ao seu coração ou te mostra algo na Bíblia, tente colocar em prática o mais rápido possível. Aprender sobre Deus só traz resultados reais se a gente mudar o nosso jeito de agir conforme o que aprendemos.", tags: ["ação", "foco"] },
          { ordem: 2, icone: "❄️", titulo: "Não Deixe para Depois", conteudo: "O maior erro que podemos cometer é dizer: 'Amanhã eu mudo' ou 'Amanhã eu começo a orar'. Esse 'amanhã' muitas vezes nunca chega e a nossa vontade de servir a Deus acaba esfriando. Não permita que a preguiça ou a rotina matem os seus bons desejos. Quando sentir que deve fazer o bem, faça agora.", tags: ["atenção", "urgência"] },
          { ordem: 3, icone: "📖", titulo: "Faça o que Você Lê", conteudo: "Ler a Bíblia é maravilhoso, mas o objetivo final é viver o que está escrito nela. Que as meditações de hoje te incentivem a tomar uma atitude prática. Se Deus te lembrou de pedir perdão a alguém ou de ajudar um necessitado, apresse-se em fazer isso antes que o dia acabe e a inspiração vá embora.", tags: ["prática", "obediência"] },
          { ordem: 4, icone: "🚩", titulo: "Seja Livre", conteudo: "Muitas vezes ficamos presos nas nossas próprias rotinas e preocupações, como peixes em uma rede. Jesus te chama para ser livre e seguir um caminho muito maior. Deixe de lado o que te impede de caminhar com Deus e vá para onde Ele te guiar. A recompensa de obedecer ao Senhor é uma vida cheia de significado e glória.", tags: ["liberdade", "caminho"] }
        ],
        promessa: "Quem segue a Jesus com prontidão verá a mão de Deus agindo poderosamente em sua vida e na vida de outros.",
        meditacao: "Ouça a voz de Jesus chamando você agora e responda com um 'sim' imediato através das suas ações."
      }
    }
  }
];

async function saveToObsidian(dayData) {
  const year = dayData.data.split('-')[0];
  const monthNames = ["", "01-Janeiro", "02-Fevereiro", "03-Março", "04-Abril", "05-Maio", "06-Junho", "07-Julho", "08-Agosto", "09-Setembro", "10-Outubro", "11-Novembro", "12-Dezembro"];
  const monthIdx = parseInt(dayData.data.split('-')[1]);
  const monthName = monthNames[monthIdx];
  const dir = path.join('content', 'Devocionais', year, monthName);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const periods = ['manha', 'noite'];
  const versions = ['original', 'simples'];

  for (const p of periods) {
    if (!dayData[p]) continue;
    for (const v of versions) {
      if (!dayData[p][v]) continue;
      const d = dayData[p][v];
      const fileName = `${dayData.data}-${p}-${v}.md`;
      const filePath = path.join(dir, fileName);
      
      const content = `---
data: ${dayData.data}
periodo: ${p === 'manha' ? 'Manhã' : 'Noite'}
versiculo: "${d.versiculo.referencia}"
versao: ${v}
tags: [devocional, ${p}, ${v}, ${d.topicos[0].tags[0]}]
---

# Devocional da ${p === 'manha' ? 'Manhã' : 'Noite'} (${v}) — ${dayData.data.split('-').reverse().join('/')}

> "${d.versiculo.texto}"
> — ${d.versiculo.referencia}

${d.topicos.map(t => `## ${t.icone} ${t.titulo}\n${t.conteudo}`).join('\n\n')}

---
> 💬 **Promessa:** "${d.promessa}"

✨ **Meditação:** ${d.meditacao}
`;
      fs.writeFileSync(filePath, content);
    }
  }
}

async function uploadToSupabase(dayData) {
  const entries = [];
  ['manha', 'noite'].forEach(p => {
    if (dayData[p]) {
      ['original', 'simples'].forEach(v => {
        const d = dayData[p][v];
        if (d) {
          entries.push({
            data: dayData.data,
            periodo: p === 'manha' ? 'Manhã' : 'Noite',
            versao: v,
            versiculo: d.versiculo,
            topicos: d.topicos,
            promessa: d.promessa,
            meditacao: d.meditacao
          });
        }
      });
    }
  });

  const { error } = await supabase.from('devocionais').upsert(entries, { onConflict: 'data, periodo, versao' });
  if (error) console.error(`❌ Erro no upload ${dayData.data}:`, error.message);
  else console.log(`✅ ${dayData.data} processado (2 versões).`);
}

async function run() {
  console.log('🚀 Iniciando Carga Fiel de Junho (Bloco 2: 11-20)...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
  console.log('🏁 Bloco 2 de Junho (11-20) concluído.');
}

run();
