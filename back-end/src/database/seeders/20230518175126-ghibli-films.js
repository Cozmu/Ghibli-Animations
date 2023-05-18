'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('films', [
      {
        title: 'Nausicaä do Vale do Vento',
        description: 'Diante da destruição dos recursos naturais de seu planeta, a princesa guerreira Nausicaa mobiliza seu povo contra o violento exército de uma rainha má.',
        image: ''
      },
      {
        title: 'O Castelo no Céu',
        description: 'A jovem órfã Sheeta e seu sequestrador, coronel Muska, estão voando para uma prisão militar quando sua aeronave é atacada por uma gangue de piratas aéreos liderados por Dola.',
        image: ''
      },
      {
        title: 'Meu Amigo Totoro',
        description: 'Duas meninas se mudam para o interior do Japão para cuidar de sua mãe doente e fazem amizade com criaturas mágicas que habitam os arredores de seu novo lar.',
        image: ''
      },
      {
        title: 'Túmulo dos Vagalumes',
        description: 'Os irmão Setsuko e Seita vivem no Japão em meio a Segunda Guerra Mundial. Após a morte da mãe em um bombardeio e a convocação do pai para a Guerra, eles vão morar com alguns parentes. Insatisfeitos, saem da cidade e acabam em um abrigo na floresta.',
        image: ''
      },
      {
        title: 'O Serviço de Entregas da Kiki',
        description: 'Por ordem de sua mãe, Kiki parte para um aprendizado de um ano, acompanhada por seu gato preto. A um comando de sua vassoura mágica, ela vai parar na charmosa cidadezinha de Moreoastal.',
        image: ''
      },
      {
        title: 'Memórias de Ontem',
        description: 'Taeko é uma mulher solteira que se dedica apenas ao trabalho. Ela sai de sua nativa Tóquio pela primeira vez e viaja a Yamagata para visitar a família da irmã durante a colheita anual de açafrão-bastardo.',
        image: ''
      },
      {
        title: 'Porco Rosso: O Último Herói Romântico',
        description: 'Piratas dos céus decidem aterrorizar o Mar Adriático e apenas um bravo piloto, metade homem e metade porco, tem a coragem necessária para enfrentá-los.',
        image: ''
      },
      {
        title: 'Eu Posso Ouvir o Oceano',
        description: 'O estudante universitário Taku recorda a chegada da aluna Rikako, dois anos atrás, e o fatídico verão que colocou à prova sua amizade com Yutaka.',
        image: ''
      },
      {
        title: 'PomPoko: A Grande Batalha dos Guaxinins',
        description: 'Lançamentos imobiliários estão expulsando os guaxinins selvagens de Tama Hills. Mas eles estão se preparando para revidar!',
        image: ''
      },
      {
        title: 'Sussurros do Coração',
        description: 'A estudante Shizuku descobre que todos os livros que ela pega na biblioteca já foram retirados por alguém chamado Seiji. Agora, ela quer encontrá-lo.',
        image: ''
      },
      {
        title: 'Princesa Mononoke',
        description: 'Um príncipe sofre com uma maldição mortal e parte em busca da cura. Ele acaba indo parar no meio da batalha entre uma cidade mineradora e os animais da floresta.',
        image: ''
      },
      {
        title: 'Meus Vizinhos, Os Yamadas',
        description: 'A família Yamada é uma família como todas as outras, com os mesmos dilemas, alegrias e descobertas. Os pais lidam com cada situação com humor, tentando demonstrar todo o amor que sentem pelos filhos.',
        image: ''
      },
      {
        title: 'A Viagem de Chihiro',
        description: 'Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer.',
        image: ''
      },
      {
        title: 'O Reino dos Gatos',
        description: 'Haru salva um gato que estava prestes a ser atropelado por um caminhão e descobre que ele é, na verdade, um príncipe. Por gratidão o Rei dos Gatos a pede em casamento, e a menina é levada para o Reino dos Gatos. Agora, ela quer sua liberdade.',
        image: ''
      },
      {
        title: 'O Castelo Animado',
        description: 'A jovem Sophie trabalha na chapelaria de seu falecido pai em uma cidade monótona. Mas as coisas mudam de figura depois que um feitiço a transforma em uma mulher idosa.',
        image: ''
      },
      {
        title: 'Contos de Terramar',
        description: 'Um arquifeiticeiro conduz um príncipe problemático e sombrio em uma jornada para descobrir a fonte do mal que o habita e salvar a mulher que eles amam.',
        image: ''
      },
      {
        title: 'Ponyo - Uma Amizade que Veio do Mar',
        description: 'Um garoto de 5 anos chamado Sosuke fica amigo de uma princesa peixinho-dourado chamada Ponyo, que quer desesperadamente virar humana.',
        image: ''
      },
      {
        title: 'O Mundo dos Pequeninos',
        description: 'A pequenina Arriety se torna amiga de um menino muito, mas muito grande. Agora, ela tem de proteger sua família minúscula dos enormes parentes dele.',
        image: ''
      },
      {
        title: 'Da Colina Kokuriko',
        description: 'Dois estudantes tentam impedir que um antigo clube da época da guerra seja destruído durante as preparações para as Olimpíadas de Tóquio de 1964.',
        image: ''
      },
      {
        title: 'Vidas ao Vento',
        description: 'Jiro Horikoshi é um jovem que vive em uma cidade no interior do Japão. Ele tem o sonho de voar em um avião com formato de pássaro. A partir desse sonho, Jiro decide que construir um avião como deseja e colocá-lo no ar é a meta de sua vida',
        image: ''
      },
      {
        title: 'O Conto da Princesa Kaguya',
        description: 'Kaguya era uma bebê que foi encontrada dentro de um tronco de bambu brilhante. Passado o tempo, ela se transforma em uma bela jovem que passa a ser cobiçada por cinco nobres, dentre eles, o próprio imperador.',
        image: ''
      },
      {
        title: 'As Memórias de Marnie',
        description: 'Ao passar as férias numa cidade onde nada acontece, Anna faz amizade com uma garota que mora em uma casa deserta. Mas será que o vínculo entre elas é real?',
        image: ''
      },
      {
        title: 'Aya e a Bruxa',
        description: 'Uma órfã teimosa e corajosa é adotada por uma bruxa e se torna sua aprendiz nas artes mágicas.',
        image: ''
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('films', null, {})
  }
}
