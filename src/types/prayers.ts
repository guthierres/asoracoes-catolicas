import { MercyPrayer } from './mercyPrayers';

export interface Prayer {
  verse?: string;
  response?: string;
  prayer?: string;
  repeat?: number;
}

export const consagracaoPrayer = {
  title: "Consagração a Nossa Senhora",
  prayer: `Ó minha Senhora, ó minha Mãe,
eu me ofereço todo(a) a Vós,
e em prova de minha devoção para convosco,
eu vos consagro neste dia meus olhos,
meus ouvidos, minha boca, meu coração
e inteiramente todo o meu ser.
E como assim sou vosso(a),
ó incomparável Mãe,
guardai-me e, defendei-me
como coisa e propriedade vossa.
Amém.`
};

export const angelusPrayers: Prayer[] = [
  {
    verse: "O Anjo do Senhor anunciou a Maria.",
    response: "E Ela concebeu do Espírito Santo.",
    prayer: "Ave Maria..."
  },
  {
    verse: "Eis aqui a serva do Senhor.",
    response: "Faça-se em mim segundo a vossa palavra.",
    prayer: "Ave Maria…"
  },
  {
    verse: "E o Verbo se fez carne.",
    response: "E habitou entre nós.",
    prayer: "Ave Maria…"
  },
  {
    verse: "Rogai por nós, Santa Mãe de Deus!",
    response: "Para que sejamos dignos das promessas de Cristo."
  }
];

export const angelusFinalPrayer = `Derramai, ó Deus, a Vossa graça em nossos corações, para que, conhecendo pela mensagem do anjo a encarnação do vosso Filho, cheguemos, por Sua Paixão e Cruz, à glória da Ressurreição. Por Cristo, nosso Senhor. Amém.`;

export const reginaCoeli: Prayer[] = [
  {
    verse: "Rainha do Céu, alegrai-Vos, aleluia.",
    response: "Porque Aquele que merecestes trazer em vosso seio, aleluia."
  },
  {
    verse: "Ressuscitou como disse. Aleluia.",
    response: "Rogai por nós a Deus. Aleluia."
  },
  {
    verse: "Exultai e alegrai-Vos, ó Virgem Maria. Aleluia.",
    response: "Pois o Senhor ressuscitou verdadeiramente. Aleluia."
  }
];

export const reginaCoeliPrayer = `Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição do Vosso Filho, Nosso Senhor Jesus Cristo, concedei-nos, Vos suplicamos, a graça de alcançarmos pela proteção da Virgem Maria, Sua Mãe, as alegrias da vida eterna. Pelo mesmo Cristo Nosso Senhor. Amém.`;

export const gloryPrayer = {
  prayer: "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre, Amém.",
  repeat: 3
};