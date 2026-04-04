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
        categoria: "Gothic rock, symphonic metal, alternative rock",
        descricao: "Amylin é uma vocalista etérea de rock gótico e metal sinfônico, de timbre aveludado e dramático com overtones operísticos, que transita entre a vulnerabilidade angelical e a intensidade poderosa.",
        avatar: "./assets/avatars/brett.jpeg",
        videoDestaque: "./assets/videos/brett.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/brett1.jpeg",
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
        id: 7,
        nome: "Galileu",
        categoria: "Reggaetón, bachata, Latin pop",
        descricao: "Natali é uma vocalista contralto de tom doce, profundo e sensual, com entrega emotiva e controle dinâmico preciso, que funde a fluidez melódica do Latin pop com o falado rítmico do reggaetón e da bachata.",
        avatar: "./assets/avatars/galileu.jpeg",
        videoDestaque: "./assets/videos/galileu.mp4",
        banner: "./assets/banners/galileu1.jpeg",
        musicas: [
            { 
                titulo: "Insensatez", 
                sunoId: "62d2d537-6abc-4f0d-bc82-9aa3950fa791" 
            }
        ]
    },
    {
        id: 8,
        nome: "Jean & Cloe",
        categoria: "Alternative, pop, folk, celtic",
        descricao: "Sua voz etérea e soprano cintilante, que mistura perfeitamente baladas folk introspectivas com instrumentação celta ambiente.",
        avatar: "./assets/avatars/jeancloe.jpeg",
        videoDestaque: "./assets/videos/jeancloe.mp4",
        banner: "./assets/banners/jeancloe1.jpeg",
        musicas: [
            { 
                titulo: "Ultima Morada", 
                sunoId: "8319a712-ccdd-4ad4-b3ff-ce3a982d6dfc" 
            }
        ]
    },
    {
        id: 9,
        nome: "Kryssen Vale",
        categoria: "Reggaeton, R&B/Soul, latin music",
        descricao: "Bady G é uma vocalista contralto de timbre aveludado e levemente defumado, com inflexão mexicano-californiana, que transita entre sussurros íntimos e belts potentes, combinando a fluidez melismática do R&B com a atitude sensual do reggaetón e do perreo.",
        avatar: "./assets/avatars/kryssenvale.jpeg",
        videoDestaque: "./assets/videos/kryssenvale.mp4",
        banner: "./assets/banners/kryssenvale1.jpeg",
        musicas: [
            { 
                titulo: "Baila en la Luna", 
                sunoId: "481c28b4-77f7-43c1-ba21-7ab8ae36a5c4" 
            }
        ]
    },
    {
        id: 10,
        nome: "Motomami",
        categoria: "Alternative rock, ambient rock, post-punk, art rock, adult contemporary",
        descricao: "Bonin é um vocalista barítono de timbre caloroso e soulful, com leve aresta nasal e aspereza natural nas frases médio-agudas, que transita fluidamente entre o peito e a cabeça, utilizando falsete expressivo, texturas breathy e um grit vocal contido para entregar temas espirituais e melancólicos dentro do rock alternativo, ambient rock e pós-punk.",
        avatar: "./assets/avatars/motomami.jpeg",
        videoDestaque: "./assets/videos/motomami.mp4",
        banner: "./assets/banners/motomami1.jpeg",
        musicas: [
            { 
                titulo: "Montains and Spring", 
                sunoId: "b5814334-bde2-4fec-bfba-0f0a8f485558" 
            }
        ]
    },
    {
        id: 11,
        nome: "Scott",
        categoria: "Gothic rock, symphonic metal, alternative rock",
        descricao: "Amylin é uma vocalista etérea de rock gótico e metal sinfônico, de timbre aveludado e dramático com overtones operísticos, que transita entre a vulnerabilidade angelical e a intensidade poderosa.",
        avatar: "./assets/avatars/scott.jpeg",
        videoDestaque: "./assets/videos/scott.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/scott1.jpeg",
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
        id: 12,
        nome: "Shine",
        categoria: "Reggaetón, bachata, Latin pop",
        descricao: "Natali é uma vocalista contralto de tom doce, profundo e sensual, com entrega emotiva e controle dinâmico preciso, que funde a fluidez melódica do Latin pop com o falado rítmico do reggaetón e da bachata.",
        avatar: "./assets/avatars/shine.jpeg",
        videoDestaque: "./assets/videos/shine.mp4",
        banner: "./assets/banners/shine1.jpeg",
        musicas: [
            { 
                titulo: "Insensatez", 
                sunoId: "62d2d537-6abc-4f0d-bc82-9aa3950fa791" 
            }
        ]
    },
    {
        id: 13,
        nome: "Suttlin",
        categoria: "Alternative, pop, folk, celtic",
        descricao: "Sua voz etérea e soprano cintilante, que mistura perfeitamente baladas folk introspectivas com instrumentação celta ambiente.",
        avatar: "./assets/avatars/suttlin.jpeg",
        videoDestaque: "./assets/videos/suttlin.mp4",
        banner: "./assets/banners/suttlin1.jpeg",
        musicas: [
            { 
                titulo: "Ultima Morada", 
                sunoId: "8319a712-ccdd-4ad4-b3ff-ce3a982d6dfc" 
            }
        ]
    },
    {
        id: 14,
        nome: "Veddin",
        categoria: "Reggaeton, R&B/Soul, latin music",
        descricao: "Bady G é uma vocalista contralto de timbre aveludado e levemente defumado, com inflexão mexicano-californiana, que transita entre sussurros íntimos e belts potentes, combinando a fluidez melismática do R&B com a atitude sensual do reggaetón e do perreo.",
        avatar: "./assets/avatars/veddin.jpeg",
        videoDestaque: "./assets/videos/veddin.mp4",
        banner: "./assets/banners/veddin1.jpeg",
        musicas: [
            { 
                titulo: "Baila en la Luna", 
                sunoId: "481c28b4-77f7-43c1-ba21-7ab8ae36a5c4" 
            }
        ]
    }

    // Adicione quantos personas desejar seguindo este padrão...
];

// Exporta para que o script.js possa ler (se não usar módulos, a variável global já resolve)
// window.PERSONAS_DATA = PERSONAS_DATA;