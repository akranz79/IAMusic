/**
 * SUNOFLIX - SCRIPT.JS (VERSÃO CONSOLIDADA 2.0)
 * Foco: Layout Vertical, Scroll Automático e Injeção de Dados
 */

// 1. REFERÊNCIAS DO DOM
const personasRow = document.getElementById('personasRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroVideo = document.getElementById('heroVideo');

// 2. FUNÇÃO: ATUALIZAR O DESTAQUE (HERO)
function updateHero(persona) {
    if (!persona) return;

    heroTitle.innerText = persona.nome;
    heroDesc.innerText = persona.descricao;
    
    // Se houver vídeo, atualiza a fonte e dá play
    if (persona.videoDestaque) {
        heroVideo.src = persona.videoDestaque;
        heroVideo.load();
        // O play() pode falhar se o browser bloquear som, por isso o catch
        heroVideo.play().catch(() => console.log("Autoplay aguardando interação do usuário."));
    }
}

// 3. FUNÇÃO: RENDERIZAR CARDS (LAYOUT 9:16)
function renderPersonas() {
    if (!personasRow || !PERSONAS_DATA) return;
    
    personasRow.innerHTML = '';

    PERSONAS_DATA.forEach(persona => {
        const img = document.createElement('img');
        img.src = persona.avatar;
        img.alt = persona.nome;
        img.classList.add('row__poster');

        // Ao clicar, abre o modal detalhado
        img.addEventListener('click', () => {
            openPersonaModal(persona);
        });

        personasRow.appendChild(img);
    });
}

// 4. FUNÇÃO: ABRIR MODAL (VÍDEO + SUNO)
function openPersonaModal(persona) {
    const musicasHTML = persona.musicas.map(musica => `
        <div class="suno-embed-container" style="margin-bottom: 20px;">
            <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 8px;">Música: ${musica.titulo}</p>
            <iframe 
                src="https://suno.com/embed/${musica.sunoId}" 
                width="100%" 
                height="150px" 
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
    document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
}

// 5. FUNÇÃO: SCROLL AUTOMÁTICO
function setupAutoScroll() {
    let isMouseOver = false;

    personasRow.addEventListener('mouseover', () => isMouseOver = true);
    personasRow.addEventListener('mouseout', () => isMouseOver = false);

    setInterval(() => {
        if (!isMouseOver) {
            // Se chegou no fim da linha, volta suavemente ao zero
            if (personasRow.scrollLeft + personasRow.offsetWidth >= personasRow.scrollWidth - 10) {
                personasRow.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                personasRow.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }
    }, 4000); // Rola a cada 4 segundos
}

// 6. EVENTOS DE FECHAMENTO
const closeModalAction = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalBody.innerHTML = ''; // Importante para parar o som dos vídeos/iframes
};

closeModal.onclick = closeModalAction;
window.onclick = (event) => {
    if (event.target == modal) closeModalAction();
};

// 7. INICIALIZAÇÃO AO CARREGAR A PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    // Validação de dados
    if (typeof PERSONAS_DATA !== 'undefined' && PERSONAS_DATA.length > 0) {
        renderPersonas();
        updateHero(PERSONAS_DATA[0]); // Carrega o primeiro persona no Hero
        setupAutoScroll();
    } else {
        console.error("Erro crítico: Variável PERSONAS_DATA não encontrada no data.js");
    }
});