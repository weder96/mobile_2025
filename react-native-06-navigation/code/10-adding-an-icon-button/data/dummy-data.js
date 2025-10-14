import Category from '../models/category';
import Trip from '../models/trip';

// 1. Categorias de Viagem (Trip Types)
export const CATEGORIES = [
  new Category('c1', 'Férias na Praia', '#00BFFF'), // DeepSkyBlue
  new Category('c2', 'City Break', '#FF4500'), // OrangeRed
  new Category('c3', 'Aventura', '#228B22'), // ForestGreen
  new Category('c4', 'Tour Cultural', '#DAA520'), // GoldenRod
  new Category('c5', 'Refúgio Relaxante', '#4682B4'), // SteelBlue
  new Category('c6', 'Safári', '#D2691E'), // Chocolate
  new Category('c7', 'Mochilão', '#8B4513'), // SaddleBrown
  new Category('c8', 'Viagem de Carro', '#708090'), // SlateGray
  new Category('c9', 'Escapada de Luxo', '#FFD700'), // Gold
  new Category('c10', 'Esportes de Inverno', '#E0FFFF') // LightCyan
];

// 2. Pacotes de Viagem (Trips)
// Assuming you have a Trip model class defined like this:
// class Trip {
//   constructor(id, categoryIds, title, budget, activityLevel, imageUrl, durationInDays, whatToPack, itinerary, isFamilyFriendly, isGoodForCouples, isSoloTravelerFriendly, isWheelchairAccessible) { ... }
// }

export const TRIPS = [
  new Trip(
    't1',
    ['c2', 'c4'],
    'Uma Semana em Roma',
    'affordable', // budget
    'moderate', // activityLevel
    'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    7, // durationInDays
    [
      'Sapatos de caminhada confortáveis',
      'Câmera fotográfica',
      'Guia de viagem',
      'Carregador portátil',
      'Jaqueta leve'
    ],
    [
      'Dias 1-2: Explore a Roma Antiga (Coliseu, Fórum Romano).',
      'Dia 3: Visite a Cidade do Vaticano (Basílica de São Pedro, Museus do Vaticano).',
      'Dias 4-5: Passeie por Trastevere e desfrute da culinária local.',
      'Dias 6-7: Descubra a arte renascentista (Galeria Borghese, Panteão).'
    ],
    true,  // isFamilyFriendly
    true,  // isGoodForCouples
    true,  // isSoloTravelerFriendly
    false  // isWheelchairAccessible
  ),

  new Trip(
    't2',
    ['c1', 'c5', 'c9'],
    'Bungalô sobre as Águas nas Maldivas',
    'luxurious', // budget
    'relaxing', // activityLevel
    'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800',
    10, // durationInDays
    [
      'Roupas de banho',
      'Protetor solar (fator alto)',
      'Óculos de sol',
      'Um bom livro',
      'Equipamento de snorkel'
    ],
    [
      'Faça o check-in no seu bangalô sobre as águas.',
      'Passe os dias nadando, mergulhando e tomando sol.',
      'Desfrute de coquetéis ao pôr do sol e jantares requintados.',
      'Relaxe com um tratamento de spa.',
      'Não faça absolutamente nada e recarregue as energias.'
    ],
    true,   // isFamilyFriendly
    true,   // isGoodForCouples
    false,  // isSoloTravelerFriendly
    true    // isWheelchairAccessible
  ),

  new Trip(
    't3',
    ['c3', 'c7'],
    'Trilha Inca para Machu Picchu',
    'moderate', // budget
    'strenuous', // activityLevel
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800',
    4, // durationInDays
    [
      'Botas de trekking',
      'Mochila (40L)',
      'Pastilhas de purificação de água',
      'Remédio para o mal de altitude',
      'Capa de chuva'
    ],
    [
      'Dia 1: Comece a caminhada de Cusco até Wayllabamba.',
      'Dia 2: Suba ao ponto mais alto, a Passagem da Mulher Morta.',
      'Dia 3: Desça para a floresta nublada e veja ruínas Incas.',
      'Dia 4: Chegue a Machu Picchu ao nascer do sol pela Porta do Sol.'
    ],
    false, // isFamilyFriendly
    true,  // isGoodForCouples
    true,  // isSoloTravelerFriendly
    false  // isWheelchairAccessible
  ),

  new Trip(
    't4',
    ['c8'],
    'Costa da Califórnia pela Highway 1',
    'moderate', // budget
    'moderate', // activityLevel
    'https://cdn.pixabay.com/photo/2018/01/22/02/17/travel-3098016_960_720.jpg',
    5, // durationInDays
    [
      'Carro alugado (conversível, se possível!)',
      'Playlist de viagem',
      'Câmera',
      'Óculos de sol',
      'Lanches para a estrada'
    ],
    [
      'Comece em São Francisco e atravesse a Golden Gate Bridge.',
      'Dirija para o sul, parando em Santa Cruz e Monterey.',
      'Atravesse a icônica Bixby Bridge em Big Sur.',
      'Explore as praias de Santa Bárbara.',
      'Termine a viagem em Los Angeles.'
    ],
    true,  // isFamilyFriendly
    true,  // isGoodForCouples
    true,  // isSoloTravelerFriendly
    true   // isWheelchairAccessible
  ),

  new Trip(
    't5',
    ['c2', 'c4'],
    'Templos Antigos de Kyoto',
    'pricey',
    'moderate',
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
    6,
    [
      'Sapatos fáceis de tirar (para entrar nos templos)',
      'Dinheiro em espécie (Yen)',
      'Japan Rail Pass',
      'Adaptador de tomada',
      'Roupas modestas para locais religiosos'
    ],
    [
      'Visite o Templo Dourado (Kinkaku-ji).',
      'Caminhe pela Floresta de Bambu de Arashiyama.',
      'Explore as ruas e gueixas do distrito de Gion.',
      'Suba o caminho de torii no Santuário Fushimi Inari.',
      'Participe de uma tradicional cerimônia do chá.'
    ],
    true,
    true,
    true,
    false
  ),

  new Trip(
    't6',
    ['c6', 'c3'],
    'Safári no Serengeti',
    'luxurious',
    'relaxing',
    'https://cdn.pixabay.com/photo/2019/07/19/19/35/lion-4349491_960_720.jpg',
    5,
    [
      'Binóculos',
      'Roupas de cores neutras',
      'Chapéu de sol de abas largas',
      'Repelente de insetos',
      'Câmera com lente de zoom'
    ],
    [
      'Acorde cedo para um safári matinal.',
      'Desfrute de um almoço piquenique na savana.',
      'Procure os "Big Five" em um safári à tarde.',
      'Relaxe em um lodge de safári com vista para a planície.'
    ],
    true,
    true,
    false,
    false
  ),

  new Trip(
    't7',
    ['c10', 'c9'],
    'Esqui nos Alpes Suíços',
    'luxurious',
    'strenuous',
    'https://cdn.pixabay.com/photo/2023/08/14/21/44/mountain-8190836_1280.jpg',
    7,
    [
      'Equipamento completo de esqui/snowboard',
      'Camadas térmicas',
      'Óculos de proteção e protetor solar',
      'Seguro de viagem para esportes de inverno',
      'Roupas elegantes para o après-ski'
    ],
    [
      'Passe os dias esquiando nas pistas de Zermatt, com vista para o Matterhorn.',
      'Aproveite a cena après-ski em bares charmosos.',
      'Saboreie um fondue de queijo suíço autêntico.',
      'Faça um passeio de trem panorâmico, como o Glacier Express.'
    ],
    true,
    true,
    true,
    false
  ),

  new Trip(
    't8',
    ['c7', 'c2'],
    'Aventura Gastronômica em Bangkok',
    'affordable',
    'moderate',
    'https://cdn.pixabay.com/photo/2017/04/19/20/16/pub-2243488_960_720.jpg',
    3,
    [
      'Sapatos confortáveis para caminhar',
      'Álcool em gel',
      'Apetite para aventura',
      'Dinheiro em espécie (Baht)',
      'Mente aberta para novos sabores'
    ],
    [
      'Explore os mercados e barracas de comida de rua de Chinatown (Yaowarat).',
      'Experimente um autêntico Pad Thai em uma barraca local.',
      'Visite um mercado flutuante para uma experiência única.',
      'Não deixe de provar o arroz pegajoso com manga.'
    ],
    false,
    true,
    true,
    false
  ),

  new Trip(
    't9',
    ['c3', 'c5'],
    'Eco-Lodge na Floresta Amazônica',
    'pricey',
    'moderate',
    'https://cdn.pixabay.com/photo/2015/09/26/21/33/suspension-bridge-959853_960_720.jpg',
    4,
    [
      'Repelente de insetos com alta concentração de DEET',
      'Camisas de manga comprida e calças leves',
      'Botas impermeáveis',
      'Binóculos para observação de pássaros',
      'Lanterna de cabeça'
    ],
    [
      'Participe de caminhadas guiadas pela selva com um guia local.',
      'Faça passeios noturnos para avistar animais de hábitos noturnos.',
      'Navegue de canoa pelos rios e igarapés.',
      'Aprenda sobre plantas medicinais e a vida selvagem.'
    ],
    false,
    true,
    true,
    false
  ),

  new Trip(
    't10',
    ['c1', 'c5', 'c9'],
    'Fuga para o Pôr do Sol em Santorini',
    'luxurious',
    'relaxing',
    'https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg',
    5,
    [
      'Roupas brancas e azuis para as fotos',
      'Roupa de banho',
      'Chapéu de sol e óculos escuros',
      'Câmera para capturar as vistas',
      'Sapatos confortáveis para andar nas vilas'
    ],
    [
      'Assista ao mundialmente famoso pôr do sol em Oia.',
      'Relaxe nas praias de areia preta de Perissa e Perivolos.',
      'Explore as ruas estreitas e lojas da capital, Fira.',
      'Faça um cruzeiro de catamarã pela caldeira vulcânica.',
      'Tire fotos icônicas com as cúpulas azuis.'
    ],
    true,
    true,
    false,
    false
  )
];