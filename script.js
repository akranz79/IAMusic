/**
 * SUNOFLIX - SCRIPT.JS (VERSÃO ENGENHARIA FINAL)
 * Funcionalidades: Playlist Auto, Fallback de Banner, Navegação Manual e Scroll Suave.
 */

// 1. REFERÊNCIAS DO DOM
const personasRow = document.getElementById('personasRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroVideo = document.getElementById('heroVideo');

// 2. VARIÁVEIS DE CONTROLE
let currentPersonaIndex = 0;
let isMouseOverRow = false;
let autoPlayTimer; 
const TIME_PER_PERSONA = 15000; // 15 segundos (para banners ou vídeos longos)

// 3. FUNÇÃO: ATUALIZAR O HERO (VÍDEO OU BANNER)
function updateHero(persona) {
    if (!persona) return;

    // Efeito de fade nos textos
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
        
        // Define o banner/poster como fundo imediato
        heroVideo.poster = persona.banner || persona.avatar;

        if (persona.videoDestaque && persona.videoDestaque !== "") {
            heroVideo.src = persona.videoDestaque;
            heroVideo.load();
            heroVideo.play().catch(() => {
                console.log("Autoplay bloqueado pelo browser. Exibindo banner.");
            });
        } else {
            heroVideo.src = ""; // Remove vídeo anterior para mostrar o banner
        }
    }
    
    // Reinicia o cronômetro de troca automática sempre que o Hero muda
    resetAutoPlayTimer();
}

// 4. FUNÇÃO: NAVEGAÇÃO (NEXT / PREV)
function playNext() {
    if (modal.style.display === 'block') return;

    currentPersonaIndex++;
    if (currentPersonaIndex >= PERSONAS_DATA.length) {
        currentPersonaIndex = 0;
    }
    
    const nextPersona = PERSONAS_DATA[currentPersonaIndex];
    updateHero(nextPersona);
    scrollToActiveCard(currentPersonaIndex);
}

function playPrev() {
    if (modal.style.display === 'block') return;

    currentPersonaIndex--;
    if (currentPersonaIndex < 0) {
        currentPersonaIndex = PERSONAS_DATA.length - 1;
    }
    
    const prevPersona = PERSONAS_DATA[currentPersonaIndex];
    updateHero(prevPersona);
    scrollToActiveCard(currentPersonaIndex);
}

// 5. GESTÃO DO TIMER AUTOMÁTICO
function resetAutoPlayTimer() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => {
        // Só muda se o usuário não estiver com o mouse no carrossel ou no modal
        if (!isMouseOverRow && modal.style.display !== 'block') {
            playNext();
        }
    }, TIME_PER_PERSONA);
}

// 6. RENDERIZAR CARDS NO CARROSSEL
function renderPersonas() {
    if (!personasRow || !PERSONAS_DATA) return;
    personasRow.innerHTML = '';

    PERSONAS_DATA.forEach((persona, index) => {
        const img = document.createElement('img');
        img.src = persona.avatar;
        img.alt = persona.nome;
        img.classList.add('row__poster');

        // Clique no card: foca no persona e abre detalhes
        img.addEventListener('click', () => {
            currentPersonaIndex = index;
            updateHero(persona);
            openPersonaModal(persona);
            scrollToActiveCard(index);
        });

        personasRow.appendChild(img);
    });
}

// 7. SCROLL SUAVE DO CARROSSEL
function scrollToActiveCard(index) {
    // Cálculo: (Largura do Card 200px + Margem 15px)
    const scrollAmount = index * 215; 
    personasRow.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// 8. MODAL DE DETALHES (VÍDEO + SUNO)
function openPersonaModal(persona) {
    const musicasHTML = persona.musicas.map(m => `
        <div class="suno-embed-container" style="margin-bottom: 20px;">
            <p style="color: #888; font-size: 0.8rem; margin-bottom: 5px;">Track: ${m.titulo}</p>
            <iframe src="https://suno.com/embed/${m.sunoId}" width="100%" height="150px" style="border: none; border-radius: 8px;" allow="autoplay; encrypted-media"></iframe>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
            <video controls autoplay width="100%" poster="${persona.banner}" style="border-radius: 8px; background: #000;">
                <source src="${persona.videoDestaque}" type="video/mp4">
            </video>
        </div>
        <h1 style="font-size: 2rem;">${persona.nome}</h1>
        <p style="color: #e50914; font-weight: bold; text-transform: uppercase; font-size: 0.8rem;">${persona.categoria}</p>
        <p style="color: #ccc; margin: 20px 0; line-height: 1.6;">${persona.descricao}</p>
        <h3 style="margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 10px;">Discografia IA</h3>
        ${musicasHTML}
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 9. EVENTOS DE FECHAMENTO E BOTÕES
const closeModalAction = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalBody.innerHTML = '';
};

// 10. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PERSONAS_DATA !== 'undefined' && PERSONAS_DATA.length > 0) {
        renderPersonas();
        updateHero(PERSONAS_DATA[0]);

        // Listeners de Botões (Next/Prev)
        document.getElementById('nextBtn')?.addEventListener('click', playNext);
        document.getElementById('prevBtn')?.addEventListener('click', playPrev);

        // Listener: Quando o vídeo do Hero acaba, pula pro próximo
        heroVideo.addEventListener('ended', playNext);

        // Listeners de Mouse no Carrossel
        personasRow.addEventListener('mouseenter', () => isMouseOverRow = true);
        personasRow.addEventListener('mouseleave', () => isMouseOverRow = false);

        // Listener de Fechamento
        closeModal.onclick = closeModalAction;
        window.onclick = (e) => { if (e.target == modal) closeModalAction(); };
    }
});