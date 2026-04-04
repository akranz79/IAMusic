/**
 * SUNOFLIX - SCRIPT.JS (VERSÃO PLAYLIST AUTOMÁTICA)
 * Foco: Troca automática de vídeos e sincronia com o Hero.
 */

// 1. REFERÊNCIAS DO DOM
const personasRow = document.getElementById('personasRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroVideo = document.getElementById('heroVideo');

// Variável de controle para a Playlist
let currentPersonaIndex = 0;

// 2. FUNÇÃO: ATUALIZAR O DESTAQUE (HERO)
function updateHero(persona) {
    if (!persona) return;

    // Atualiza os textos com efeito de transição simples
    heroTitle.style.opacity = 0;
    heroDesc.style.opacity = 0;
    
    setTimeout(() => {
        heroTitle.innerText = persona.nome;
        heroDesc.innerText = persona.descricao;
        heroTitle.style.opacity = 1;
        heroDesc.style.opacity = 1;
    }, 500);

    // Atualiza o vídeo de fundo
    if (persona.videoDestaque) {
        heroVideo.pause();
        heroVideo.src = persona.videoDestaque;
        heroVideo.load();
        
        // Tenta dar o play (Muted é obrigatório para autoplay no browser)
        heroVideo.play().catch(() => {
            console.log("Autoplay bloqueado. O vídeo aguarda interação.");
        });
    }
}

// 3. FUNÇÃO: LOGICA DE PRÓXIMO VÍDEO (PLAYLIST)
function playNextVideo() {
    currentPersonaIndex++;
    
    // Se chegar ao fim da lista, volta para o primeiro
    if (currentPersonaIndex >= PERSONAS_DATA.length) {
        currentPersonaIndex = 0;
    }
    
    const nextPersona = PERSONAS_DATA[currentPersonaIndex];
    updateHero(nextPersona);
    
    // Opcional: Faz o scroll do carrossel acompanhar o vídeo atual
    scrollToActiveCard(currentPersonaIndex);
}

// 4. FUNÇÃO: RENDERIZAR CARDS (LAYOUT 9:16)
function renderPersonas() {
    if (!personasRow || !PERSONAS_DATA) return;
    
    personasRow.innerHTML = '';

    PERSONAS_DATA.forEach((persona, index) => {
        const img = document.createElement('img');
        img.src = persona.avatar;
        img.alt = persona.nome;
        img.classList.add('row__poster');

        // Se clicar no card, força a troca do Hero e abre o modal
        img.addEventListener('click', () => {
            currentPersonaIndex = index;
            updateHero(persona);
            openPersonaModal(persona);
        });

        personasRow.appendChild(img);
    });
}

// 5. FUNÇÃO: ABRIR MODAL
function openPersonaModal(persona) {
    const musicasHTML = persona.musicas.map(musica => `
        <div class="suno-embed-container" style="margin-bottom: 20px;">
            <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 8px;">Música: ${musica.titulo}</p>
            <iframe 
                src="https://suno.com/embed/${musica.sunoId}" 
                width="100%" height="150px" 
                style="border: none; border-radius: 8px;" 
                allow="autoplay; encrypted-media">
            </iframe>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <div class="modal__video-header" style="margin-bottom: 20px;">
            <video controls autoplay width="100%" style="border-radius: 8px; background: #000;">
                <source src="${persona.videoDestaque}" type="video/mp4">
            </video>
        </div>
        <h1 style="font-size: 2.5rem; margin-bottom: 10px;">${persona.nome}</h1>
        <p style="color: #e50914; font-weight: bold; text-transform: uppercase; margin-bottom: 15px;">${persona.categoria}</p>
        <p style="line-height: 1.6; color: #ccc; margin-bottom: 30px;">${persona.descricao}</p>
        <h3 style="border-bottom: 1px solid #333; padding-bottom: 10px; margin-bottom: 20px;">Playlist Suno IA</h3>
        ${musicasHTML}
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 6. FUNÇÃO: SCROLL SUAVE PARA O CARD ATIVO
function scrollToActiveCard(index) {
    const cardWidth = 215; // Largura do card (200px) + margin (15px)
    personasRow.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
    });
}

// 7. EVENTOS DE FECHAMENTO
const closeModalAction = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalBody.innerHTML = ''; 
};

closeModal.onclick = closeModalAction;
window.onclick = (event) => { if (event.target == modal) closeModalAction(); };

// 8. INICIALIZAÇÃO E LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PERSONAS_DATA !== 'undefined' && PERSONAS_DATA.length > 0) {
        renderPersonas();
        updateHero(PERSONAS_DATA[0]);

        // O SEGREDO: Listener que detecta quando o vídeo do Hero acaba
        heroVideo.addEventListener('ended', playNextVideo);

    } else {
        console.error("Erro: PERSONAS_DATA não encontrado.");
    }
});