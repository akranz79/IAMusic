/**
 * DATASET DOS PERSONAS - SUNOFLIX
 * Este arquivo atua como o "Banco de Dados" do Front-end.
 * * DICA DE ENGENHEIRO: 
 * Para usar vídeos do YouTube no futuro, o link deve ser o de "EMBED":
 * Exemplo: https://www.youtube.com/embed/ID_DO_VIDEO?autoplay=1&mute=1&controls=0
 */

const PERSONAS_DATA = [
    {
        id: 1,
        nome: "Amylin",
        categoria: "Gothic rock, symphonic metal, alternative rock",
        descricao: "Amylin é uma vocalista etérea de rock gótico e metal sinfônico, de timbre aveludado e dramático com overtones operísticos, que transita entre a vulnerabilidade angelical e a intensidade poderosa.",
        avatar: "./assets/avatars/amylin.jpeg",
        videoDestaque: "./assets/videos/amylin.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/amylin1.jpeg",
        musicas: [
            { 
                titulo: "The Tome and the Thornbush", 
                sunoId: "5b211eca-a4a0-4788-900b-effd32465628" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Our Song", 
                sunoId: "e5ef6f53-140e-4b4e-b332-22b9517ede9a" 
            }
        ]
    },
    {
        id: 2,
        nome: "Natali",
        categoria: "Reggaetón, bachata, Latin pop",
        descricao: "Natali é uma vocalista contralto de tom doce, profundo e sensual, com entrega emotiva e controle dinâmico preciso, que funde a fluidez melódica do Latin pop com o falado rítmico do reggaetón e da bachata.",
        avatar: "./assets/avatars/natali.jpeg",
        videoDestaque: "./assets/videos/natali.mp4",
        banner: "./assets/banners/natali1.jpeg",
        musicas: [
            { 
                titulo: "Insensatez", 
                sunoId: "62d2d537-6abc-4f0d-bc82-9aa3950fa791" 
            }
        ]
    },
    {
        id: 3,
        nome: "Foxmine",
        categoria: "Alternative, pop, folk, celtic",
        descricao: "Sua voz etérea e soprano cintilante, que mistura perfeitamente baladas folk introspectivas com instrumentação celta ambiente.",
        avatar: "./assets/avatars/foxmine.jpeg",
        videoDestaque: "./assets/videos/foxmine.mp4",
        banner: "./assets/banners/foxmine1.jpeg",
        musicas: [
            { 
                titulo: "Ultima Morada", 
                sunoId: "8319a712-ccdd-4ad4-b3ff-ce3a982d6dfc" 
            }
        ]
    },
    {
        id: 4,
        nome: "Bady G",
        categoria: "Reggaeton, R&B/Soul, latin music",
        descricao: "Bady G é uma vocalista contralto de timbre aveludado e levemente defumado, com inflexão mexicano-californiana, que transita entre sussurros íntimos e belts potentes, combinando a fluidez melismática do R&B com a atitude sensual do reggaetón e do perreo.",
        avatar: "./assets/avatars/badyg.jpeg",
        videoDestaque: "./assets/videos/badyg.mp4",
        banner: "./assets/banners/badyg1.jpeg",
        musicas: [
            { 
                titulo: "Baila en la Luna", 
                sunoId: "481c28b4-77f7-43c1-ba21-7ab8ae36a5c4" 
            }
        ]
    },
    {
        id: 5,
        nome: "Bonin",
        categoria: "Alternative rock, ambient rock, post-punk, art rock, adult contemporary",
        descricao: "Bonin é um vocalista barítono de timbre caloroso e soulful, com leve aresta nasal e aspereza natural nas frases médio-agudas, que transita fluidamente entre o peito e a cabeça, utilizando falsete expressivo, texturas breathy e um grit vocal contido para entregar temas espirituais e melancólicos dentro do rock alternativo, ambient rock e pós-punk.",
        avatar: "./assets/avatars/bonin.jpeg",
        videoDestaque: "./assets/videos/bonin.mp4",
        banner: "./assets/banners/bonin1.jpeg",
        musicas: [
            { 
                titulo: "Montains and Spring", 
                sunoId: "b5814334-bde2-4fec-bfba-0f0a8f485558" 
            }
        ]
    },{
        id: 6,
        nome: "Brett",
        categoria: "Country-pop ballad ",
        descricao: "Brett é um vocalista country-pop de timbre profundo e macio, que entrega baladas românticas com vibrato leve, dicção clara e uma interpretação calorosa e sincera, combinando a sensibilidade do adult contemporary com a sofisticação acústica e atmosférica do country moderno, tal qual Brett Young.",
        avatar: "./assets/avatars/brett.jpeg",
        videoDestaque: "./assets/videos/brett.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/brett1.jpeg",
        musicas: [
            { 
                titulo: "A locket in my chest", 
                sunoId: "bd25bd21-3a3c-4de3-94ea-86a7b6c327ba" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "If You Didn’t Feel It", 
                sunoId: "8afc66d1-fbac-4935-920f-f5867b0fdc6c" 
            }
        ]
    },
    {
        id: 7,
        nome: "Galileu",
        categoria: "Gospel, Worship, Contemporary Christian, Brazilian praise",
        descricao: "Galileu é um cantor gospel brasileiro de timbre rasgado e potente, com alcance de baritenor e entrega emocional intensa que transita de versos suaves e orantes a refrões explosivos e cheios de fé, utilizando força de peito, vibrato mínimo e uma energia crua de performance ao vivo, típica do louvor contemporâneo brasileiro.",
        avatar: "./assets/avatars/galileu.jpeg",
        videoDestaque: "./assets/videos/galileu.mp4",
        banner: "./assets/banners/galileu1.jpeg",
        musicas: [
            { 
                titulo: "O NOSSO LUGAR AO SOL", 
                sunoId: "6069d22c-c76f-4c6a-b1e1-da5cc835b6b9" 
            }
        ]
    },
    {
        id: 8,
        nome: "Jean & Cloe",
        categoria: "gospel, male vocals, female vocals, guitar, r&b",
        descricao: "Jean e Cloe são a dupla IA do gospel contemporâneo que une a força rasgada e apaixonada do vocal masculino com a doçura melismática e soul da voz feminina, tecendo duetos de adoração onde o violão acústico e a cadência R&B criam pontes entre a intimidade da oração e a celebração da fé.",
        avatar: "./assets/avatars/jeancloe.jpeg",
        videoDestaque: "./assets/videos/jeancloe.mp4",
        banner: "./assets/banners/jeancloe1.jpeg",
        musicas: [
            { 
                titulo: "I Will Not Fear", 
                sunoId: "49c415d1-5797-4a4f-a581-5fa9d8487caa" 
            },
            { 
                titulo: "Em nome do Senhor", 
                sunoId: "376d00a9-54b6-43d6-b4c6-3cd70949830a" 
            }
        ]
    },
    {
        id: 9,
        nome: "Kryssen Vale",
        categoria: "",
        descricao: "",
        avatar: "./assets/avatars/kryssenvale.jpeg",
        videoDestaque: "./assets/videos/kryssenvale.mp4",
        banner: "./assets/banners/kryssenvale1.jpeg",
        musicas: [
            { 
                titulo: "The Board", 
                sunoId: "c4cc7e02-3239-4a51-b5d5-47af963adbcc" 
            }
        ]
    },
    {
        id: 10,
        nome: "Motomami",
        categoria: "",
        descricao: "",
        avatar: "./assets/avatars/motomami.jpeg",
        videoDestaque: "./assets/videos/motomami.mp4",
        banner: "./assets/banners/motomami1.jpeg",
        musicas: [
            { 
                titulo: "Diálogo del Amor", 
                sunoId: "69ab974b-6e6d-4245-861d-4bf59824f555" 
            },
             { 
                titulo: "Una Noche en Río", 
                sunoId: "83875617-d17c-4ba2-9dd1-05c86426616f" 
            }
        ]
    },
    {
        id: 11,
        nome: "Scott",
        categoria: "",
        descricao: "Amylin é uma vocalista etérea de rock gótico e metal sinfônico, de timbre aveludado e dramático com overtones operísticos, que transita entre a vulnerabilidade angelical e a intensidade poderosa.",
        avatar: "./assets/avatars/scott.jpeg",
        videoDestaque: "./assets/videos/scott.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/scott1.jpeg",
        musicas: [
            { 
                titulo: "Prose of the End", 
                sunoId: "053e4b7b-2806-475f-9b16-3db65745cbb6" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Seconds Before the Fall", 
                sunoId: "fd404a55-060b-4e7d-8162-2c22397f7512" 
            }
        ]
    },
    {
        id: 12,
        nome: "Shine",
        categoria: "",
        descricao: "",
        avatar: "./assets/avatars/shine.jpeg",
        videoDestaque: "./assets/videos/shine.mp4",
        banner: "./assets/banners/shine1.jpeg",
        musicas: [
            { 
                titulo: "Aire", 
                sunoId: "5e0998ac-043a-4ec8-b882-c32892ca87df" 
            }
        ]
    },
    {
        id: 13,
        nome: "Suttlin",
        categoria: "",
        descricao: "",
        avatar: "./assets/avatars/suttlin.jpeg",
        videoDestaque: "./assets/videos/suttlin.mp4",
        banner: "./assets/banners/suttlin1.jpeg",
        musicas: [
            { 
                titulo: "Ultima Morada", 
                sunoId: "572a5861-6710-45c8-8c6f-f6aed3b52774" 
            }
        ]
    },
    {
        id: 14,
        nome: "Veddin",
        categoria: "",
        descricao: "",
        avatar: "./assets/avatars/veddin.jpeg",
        videoDestaque: "./assets/videos/veddin.mp4",
        banner: "./assets/banners/veddin1.jpeg",
        musicas: [
            { 
                titulo: "Weightless", 
                sunoId: "01285da9-eacd-459a-8d2d-10ef2a2dbe2d" 
            },
              { 
                titulo: "Null Love Exception", 
                sunoId: "2c358a1c-c50a-427c-9255-d64a145e7124" 
            },
              { 
                titulo: "Sombras no Espelho", 
                sunoId: "7d5b3ca2-cb92-4c06-8688-e3ee3a8f7707" 
            },
              { 
                titulo: "Worthy One", 
                sunoId: "5333dc0b-0447-442d-9305-c6467a2ce9ec" 
            }
        ]
    }

    // Adicione quantos personas desejar seguindo este padrão...
];

// Exporta para que o script.js possa ler (se não usar módulos, a variável global já resolve)
// window.PERSONAS_DATA = PERSONAS_DATA;