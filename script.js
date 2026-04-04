/**
 * SUNOFLIX - SCRIPT.JS (VERSÃO FINAL SINCRONIZADA)
 * Foco: Prioridade total na troca automática (Vídeo ou Banner)
 */

// 1. REFERÊNCIAS DO DOM
const personasRow = document.getElementById('personasRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroVideo = document.getElementById('heroVideo');

// Variáveis de Controle
let currentPersonaIndex = 0;
let isMouseOverRow = false;
let autoPlayTimer; // Variável para controlar o timer global

// 2. FUNÇÃO: ATUALIZAR O HERO
function updateHero(persona) {
    if (!persona) return;

    // Reset de animação nos textos
    heroTitle.style.opacity = 0;
    heroDesc.style.opacity = 0;
    
    setTimeout(() => {
        heroTitle.innerText = persona.nome;
        heroDesc.innerText = persona.descricao;
        heroTitle.style.opacity = 1;
        heroDesc.style.opacity = 1;
    }, 500);

    if (heroVideo) {
        heroVideo.pause();
        
        // Define o banner como poster sempre
        heroVideo.poster = persona.banner || persona.avatar;

        if (persona.videoDestaque && persona.videoDestaque !== "") {
            heroVideo.src = persona.videoDestaque;
            heroVideo.load();
            heroVideo.play().catch(() => {
                console.log("Autoplay bloqueado. Exibindo poster.");
            });
        } else {
            heroVideo.src = ""; // Sem vídeo, limpa o player para mostrar o poster
        }
    }
    
    // Reinicia o timer de segurança toda vez que o hero muda
    resetAutoPlayTimer();
}

// 3. FUNÇÃO: MUDAR PARA O PRÓXIMO
function playNext() {
    // Se o usuário está interagindo com o modal, não muda o fundo
    if (modal.style.display === 'block') return;

    currentPersonaIndex++;
    if (currentPersonaIndex >= PERSONAS_DATA.length) {
        currentPersonaIndex = 0;
    }
    
    const nextPersona = PERSONAS_DATA[currentPersonaIndex];
    updateHero(nextPersona);
    scrollToActiveCard(currentPersonaIndex);
}

// 4. CONTROLE DO TIMER (O Coração da Mudança)
function resetAutoPlayTimer() {
    clearInterval(autoPlayTimer);
    
    // Define um tempo máximo de exibição (ex: 15 segundos) 
    // Isso garante que mesmo vídeos longos ou banners mudem.
    autoPlayTimer = setInterval(() => {
        if (!isMouseOverRow && modal.style.display !== 'block') {
            playNext();
        }
    }, 15000); // 15 segundos por persona
}

// 5. RENDERIZAR CARDS
function renderPersonas() {
    if (!personasRow || !PERSONAS_DATA) return;
    personasRow.innerHTML = '';

    PERSONAS_DATA.forEach((persona, index) => {
        const img = document.createElement('img');
        img.src = persona.avatar;
        img.classList.add('row__poster');

        img.addEventListener('click', () => {
            currentPersonaIndex = index;
            updateHero(persona);
            openPersonaModal(persona);
            scrollToActiveCard(index);
        });

        personasRow.appendChild(img);
    });
}

// 6. SCROLL DO CARROSSEL
function scrollToActiveCard(index) {
    const cardWidth = 215; // Largura aproximada
    personasRow.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
    });
}

// 7. MODAL
function openPersonaModal(persona) {
    const musicasHTML = persona.musicas.map(m => `
        <div class="suno-embed-container" style="margin-bottom:15px;">
            <iframe src="https://suno.com/embed/${m.sunoId}" width="100%" height="150px" style="border:none;border-radius:8px;"></iframe>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <video controls autoplay width="100%" poster="${persona.banner}" style="border-radius:8px;background:#000;">
            <source src="${persona.videoDestaque}" type="video/mp4">
        </video>
        <h1 style="margin-top:20px;">${persona.nome}</h1>
        <p style="color:#ccc;margin-bottom:20px;">${persona.descricao}</p>
        ${musicasHTML}
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

const closeModalAction = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalBody.innerHTML = '';
};

closeModal.onclick = closeModalAction;

// 8. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PERSONAS_DATA !== 'undefined' && PERSONAS_DATA.length > 0) {
        renderPersonas();
        updateHero(PERSONAS_DATA[0]);

        // Evento: Se o vídeo acabar antes dos 15s, muda na hora!
        heroVideo.addEventListener('ended', playNext);

        // Detecta mouse no carrossel
        personasRow.addEventListener('mouseenter', () => isMouseOverRow = true);
        personasRow.addEventListener('mouseleave', () => isMouseOverRow = false);
    }
});