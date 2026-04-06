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
        avatar2: "./assets/avatars/amylin1.jpeg",
        videoDestaque: "./assets/videos/amylin.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/amylin1.jpeg",
        musicas: [
            { 
                titulo: "Our Song", 
                sunoId: "e5ef6f53-140e-4b4e-b332-22b9517ede9a" 
            },  
            { 
                titulo: "", 
                arquivo: "./assets/musicas/" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 2,
        nome: "Natali",
        categoria: "Reggaetón, bachata, Latin pop",
        descricao: "Natali é uma vocalista contralto de tom doce, profundo e sensual, com entrega emotiva e controle dinâmico preciso, que funde a fluidez melódica do Latin pop com o falado rítmico do reggaetón e da bachata.",
        avatar: "./assets/avatars/natali.jpeg",
        avatar2: "./assets/avatars/natali1.jpeg",
        videoDestaque: "./assets/videos/natali.mp4",
        banner: "./assets/banners/natali1.jpeg",
        musicas: [
            { 
                titulo: "Insensatez", 
                arquivo: "./assets/musicas/01-nat.mp3" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Hoy te borro", 
                arquivo: "./assets/musicas/02-nat.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 3,
        nome: "Foxmine",
        categoria: "Alternative, pop, folk, celtic",
        descricao: "Sua voz etérea e soprano cintilante, que mistura perfeitamente baladas folk introspectivas com instrumentação celta ambiente.",
        avatar: "./assets/avatars/foxmine.jpeg",
        avatar2: "./assets/avatars/foxmine1.jpeg",
        videoDestaque: "./assets/videos/foxmine.mp4",
        banner: "./assets/banners/foxmine1.jpeg",
        musicas: [
            { 
                titulo: "🎵 MARINA E OS BICHINHOS 🎵", 
                arquivo: "./assets/musicas/01-fox.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 4,
        nome: "Bady G",
        categoria: "Reggaeton, R&B/Soul, latin music",
        descricao: "Bady G é uma vocalista contralto de timbre aveludado e levemente defumado, com inflexão mexicano-californiana, que transita entre sussurros íntimos e belts potentes, combinando a fluidez melismática do R&B com a atitude sensual do reggaetón e do perreo.",
        avatar: "./assets/avatars/badyg.jpeg",
        avatar2: "./assets/avatars/badyg1.jpeg",
        videoDestaque: "./assets/videos/badyg.mp4",
        banner: "./assets/banners/badyg1.jpeg",
        musicas: [
            { 
                titulo: "Baila en la Luna", 
                arquivo: "./assets/musicas/01-bad.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 5,
        nome: "Bonin",
        categoria: "Alternative rock, ambient rock, post-punk, art rock, adult contemporary",
        descricao: "Bonin é um vocalista barítono de timbre caloroso e soulful, com leve aresta nasal e aspereza natural nas frases médio-agudas, que transita fluidamente entre o peito e a cabeça, utilizando falsete expressivo, texturas breathy e um grit vocal contido para entregar temas espirituais e melancólicos dentro do rock alternativo, ambient rock e pós-punk.",
        avatar: "./assets/avatars/bonin.jpeg",
        avatar2: "./assets/avatars/bonin1.jpeg",
        videoDestaque: "./assets/videos/bonin.mp4",
        banner: "./assets/banners/bonin1.jpeg",
        musicas: [
            { 
                titulo: "", 
                arquivo: "./assets/musicas/" // Substitua pelo ID real da URL do Suno
            }
        ]
    },{
        id: 6,
        nome: "Brett",
        categoria: "Country-pop ballad ",
        descricao: "Brett é um vocalista country-pop de timbre profundo e macio, que entrega baladas românticas com vibrato leve, dicção clara e uma interpretação calorosa e sincera, combinando a sensibilidade do adult contemporary com a sofisticação acústica e atmosférica do country moderno, tal qual Brett Young.",
        avatar: "./assets/avatars/brett.jpeg",
        avatar2: "./assets/avatars/brett1.jpeg",
        videoDestaque: "./assets/videos/brett.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/brett1.jpeg",
        musicas: [
            { 
                titulo: "Curitiba Nights", 
                arquivo: "./assets/musicas/01-bre.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 7,
        nome: "Galileu",
        categoria: "Gospel, Worship, Contemporary Christian, Brazilian praise",
        descricao: "Galileu é um cantor gospel brasileiro de timbre rasgado e potente, com alcance de baritenor e entrega emocional intensa que transita de versos suaves e orantes a refrões explosivos e cheios de fé, utilizando força de peito, vibrato mínimo e uma energia crua de performance ao vivo, típica do louvor contemporâneo brasileiro.",
        avatar: "./assets/avatars/galileu.jpeg",
        avatar2: "./assets/avatars/galileu1.jpeg",
        videoDestaque: "./assets/videos/galileu.mp4",
        banner: "./assets/banners/galileu1.jpeg",
        musicas: [
             { 
                titulo: "O Lamento do Viajante Estelar", 
                arquivo: "./assets/musicas/01-gal.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 8,
        nome: "Jean & Cloe",
        categoria: "gospel, male vocals, female vocals, guitar, r&b",
        descricao: "Jean e Cloe são a dupla do gospel contemporâneo que une a força rasgada e apaixonada do vocal masculino com a doçura melismática e soul da voz feminina, tecendo duetos de adoração onde o violão acústico e a cadência R&B criam pontes entre a intimidade da oração e a celebração da fé.",
        avatar: "./assets/avatars/jeancloe.jpeg",
        avatar2: "./assets/avatars/jeancloe1.jpeg",
        videoDestaque: "./assets/videos/jeanecloe.mp4",
        banner: "./assets/banners/jeancloe1.jpeg",
        musicas: [
               { 
                titulo: "Em Nome do Senhor - Baseado em 1 Samuel 17:45", 
                arquivo: "./assets/musicas/01-jec.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 9,
        nome: "Kryssen Vale",
        categoria: "Rock alternativo com raízes no hard rock dos anos 90",
        descricao: "Um cantor de voz única e expressiva, timbre escuro e levemente rouco, capaz de alternar suavidade emocional e explosões poderosas, explorando uma ampla extensão vocal com técnica refinada, identidade própria e entrega visceral.",
        avatar: "./assets/avatars/kryssenvale.jpeg",
        avatar2: "./assets/avatars/kryssenvale1.jpeg",
        videoDestaque: "./assets/videos/kryssenvale.mp4",
        banner: "./assets/banners/kryssenvale1.jpeg",
        musicas: [
            { 
                titulo: "", 
                arquivo: "./assets/musicas/" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 10,
        nome: "Motomami",
        categoria: "Pop alternativo + R&B contemporâneo + eletrônica minimalista",
        descricao: "Um artista de identidade própria, com timbre definido e emocional, articulação marcante e controle técnico refinado, que traduz sentimentos profundos em interpretações envolventes, equilibrando naturalidade, sensibilidade e presença sonora moderna.",
        avatar: "./assets/avatars/motomami.jpeg",
        avatar2: "./assets/avatars/motomami1.jpeg",
        videoDestaque: "./assets/videos/motomami.mp4",
        banner: "./assets/banners/motomami1.jpeg",
        musicas: [
            { 
                titulo: "Dangerous Game", 
                arquivo: "./assets/musicas/01-mot.mp3" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Diálogo del Amor", 
                arquivo: "./assets/musicas/02-mot.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 11,
        nome: "Scott",
        categoria: "Post-grunge rock dos anos 2000",
        descricao: "Um cantor de voz masculina profunda e marcante, com interpretação intensa e emocional, capaz de conduzir versos introspectivos e contidos até refrões amplos e poderosos, sustentando notas longas com entrega dramática e presença sólida.",
        avatar: "./assets/avatars/scott.jpeg",
        avatar2: "./assets/avatars/scott1.jpeg",
        videoDestaque: "./assets/videos/scott.mp4", // No futuro: "https://www.youtube.com/embed/..."
        banner: "./assets/banners/scott1.jpeg",
        musicas: [
                    { 
                titulo: "A locket in my chest", 
                arquivo: "./assets/musicas/05-scot.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 12,
        nome: "Shine",
        categoria: "Uma fusão de pop latino, flamenco pop e art pop contemporâneo",
        descricao: "Cantora espanhola de voz feminina suave e profundamente emocional, timbre quente e arejado, alcance médio-alto brilhante (soprano), forte acento andaluz e dicção precisa, que utiliza falsete expressivo, quebras glóticas e melismas flamencos para transmitir vulnerabilidade e intensidade, evocando a sensibilidade do flamenco moderno sem perder uma identidade própria, inspirada na fase inicial de Rosalía.",
        avatar: "./assets/avatars/shine.jpeg",
        avatar2: "./assets/avatars/shine1.jpeg",
        videoDestaque: "./assets/videos/shine.mp4",
        banner: "./assets/banners/shine1.jpeg",
        musicas: [
             { 
                titulo: "Aire", 
                arquivo: "./assets/musicas/01-shi.mp3" // Substitua pelo ID real da URL do Suno
            },
                               { 
                titulo: "Coração Naufragado", 
                arquivo: "./assets/musicas/02-shi.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 13,
        nome: "Suttlin",
        categoria: "Thrash metal com forte influência hardcore",
        descricao: "Vocalista de voz projetada, crua e intensa, com uso consciente de rasgos e voice cracks em saltos agudos, capaz de sustentar agressividade contínua sem perder articulação, evocando a fúria do metal brasileiro clássico — com energia jovem à la Max Cavalera — porém com abordagem menos gutural e identidade própria.",
        avatar: "./assets/avatars/suttlin.jpeg",
        avatar2: "./assets/avatars/suttlin1.jpeg",
        videoDestaque: "./assets/videos/suttin.mp4",
        banner: "./assets/banners/suttlin1.jpeg",
        musicas: [
              { 
                titulo: "Die dunkle Seite des Mondes_suttin", 
                arquivo: "./assets/musicas/01-sut.mp3" // Substitua pelo ID real da URL do Suno
            }
        ]
    },
    {
        id: 14,
        nome: "Veddin",
        categoria: "Rock ballad, grunge anos 90, folk, blues",
        descricao: "Cantor barítono de voz profunda, levemente rouca e altamente expressiva, que interpreta com dor contida e intensidade crescente, transmitindo saudade, memória e amor perdido por meio de uma entrega íntima, crua e emocionalmente honesta.",
        avatar: "./assets/avatars/veddin.jpeg",
        avatar2: "./assets/avatars/veddin1.jpeg",
        videoDestaque: "./assets/videos/veddin.mp4",
        banner: "./assets/banners/veddin1.jpeg",
        musicas: [
            { 
                titulo: "Just Inhale", 
                arquivo: "./assets/musicas/01-ved.mp3" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Return", 
                arquivo: "./assets/musicas/02-ved.mp3" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Worthy One", 
                arquivo: "./assets/musicas/03-ved.mp3" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Null Love Exception", 
                arquivo: "./assets/musicas/04-ved.mp3" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Sombras no Espelho", 
                arquivo: "./assets/musicas/05-ved.mp3" // Substitua pelo ID real da URL do Suno
            },
            { 
                titulo: "Null Love Exception", 
                arquivo: "./assets/musicas/04-ved.mp3" // Substitua pelo ID real da URL do Suno
            }

        ]
    }

    // Adicione quantos personas desejar seguindo este padrão...
];

// Exporta para que o script.js possa ler (se não usar módulos, a variável global já resolve)
// window.PERSONAS_DATA = PERSONAS_DATA;