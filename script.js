/**
 * SUNOFLIX - SCRIPT.JS (VERSÃO FINAL CONSOLIDADA)
 */

const personasRow = document.getElementById('personasRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const heroVideo = document.getElementById('heroVideo');

let currentIdx = 0;
let autoTimer;

// --- 1. ATUALIZAR O HERO (BACKGROUND) ---
function updateHero(persona) {
    if (!persona) return;
    
    // Transição suave de texto
    const hTitle = document.getElementById('heroTitle');
    const hDesc = document.getElementById('heroDesc');
    
    hTitle.style.opacity = 0;
    hDesc.style.opacity = 0;

    setTimeout(() => {
        hTitle.innerText = persona.nome;
        hDesc.innerText = persona.descrica || persona.descricao; // Suporte a erro de digitação se houver
        hTitle.style.opacity = 1;
        hDesc.style.opacity = 1;
    }, 500);
    
    heroVideo.pause();
    heroVideo.poster = persona.banner || persona.avatar;
    
    if (persona.videoDestaque) {
        heroVideo.src = persona.videoDestaque;
        heroVideo.load();
        heroVideo.play().catch(() => console.log("Autoplay aguardando interação."));
    } else {
        heroVideo.src = "";
    }
    resetTimer();
}

function nextHero() {
    if (modal.style.display === 'block') return;
    currentIdx = (currentIdx + 1) % PERSONAS_DATA.length;
    updateHero(PERSONAS_DATA[currentIdx]);
    
    // Scroll suave no carrossel para acompanhar a playlist
    personasRow.scrollTo({ left: currentIdx * 215, behavior: 'smooth' });
}

function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(nextHero, 15000);
}

// --- 2. RENDERIZAR CARROSSEL (9:16) ---
function renderPersonas() {
    if (!personasRow) return;
    personasRow.innerHTML = '';
    PERSONAS_DATA.forEach((p, i) => {
        const img = document.createElement('img');
        img.src = p.avatar;
        img.classList.add('row__poster');
        img.alt = p.nome;
        img.onclick = () => { 
            currentIdx = i; 
            updateHero(p); 
            openModal(p); 
        };
        personasRow.appendChild(img);
    });
}

// --- 3. ABRIR MODAL (PERFIL COM IMAGEM CIRCULAR) ---
function openModal(p) {
    const embeds = p.musicas.map(m => `
        <div style="margin-bottom:20px;">
            <p style="color:#888; font-size:0.85rem; margin-bottom:8px; font-weight:500;">Track: ${m.titulo}</p>
            <iframe src="https://suno.com/embed/${m.sunoId}" width="100%" height="150px" style="border:none;border-radius:12px;" allow="encrypted-media"></iframe>
        </div>
    `).join('');

    const videoBtn = p.videoDestaque ? 
        `<button class="modal__video-btn" onclick="playVideoModal('${p.videoDestaque}', '${p.banner}')">▶ ASSISTIR VÍDEO</button>` : '';

    modalBody.innerHTML = `
        <div id="modalMainContent">
            <div class="modal__profile-header">
                <img src="${p.avatar2 || p.avatar}" class="modal__profile-avatar">
                <div class="modal__profile-info">
                    <p class="modal__profile-category">${p.categoria || 'Artista IA'}</p>
                    <h1 class="modal__profile-name">${p.nome}</h1>
                    <p class="modal__profile-desc">${p.descricao || p.descrica}</p>
                    ${videoBtn}
                </div>
            </div>
            <div class="modal__playlist">
                <h3 style="margin-bottom:25px; letter-spacing:1px; border-bottom: 1px solid #333; padding-bottom:10px;">PLAYLIST OFICIAL</h3>
                ${embeds}
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// --- 4. PLAYER DE VÍDEO DENTRO DO MODAL ---
window.playVideoModal = function(src, poster) {
    const main = document.getElementById('modalMainContent');
    // Salva a playlist para mostrar abaixo do vídeo
    const playlist = main.querySelector('.modal__playlist').outerHTML;

    main.innerHTML = `
        <div style="margin-bottom:30px; position:relative;">
            <button onclick="openModal(PERSONAS_DATA[currentIdx])" class="modal__video-back-btn">← VOLTAR AO PERFIL</button>
            <video controls autoplay width="100%" poster="${poster}" style="border-radius:12px; background:#000; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <source src="${src}" type="video/mp4">
            </video>
        </div>
        ${playlist}
    `;
};

// --- 5. FECHAMENTO ---
const fecharModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalBody.innerHTML = '';
};

closeModal.onclick = fecharModal;
window.onclick = (e) => { if(e.target == modal) fecharModal(); };

// --- 6. INIT ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PERSONAS_DATA !== 'undefined' && PERSONAS_DATA.length > 0) {
        renderPersonas();
        updateHero(PERSONAS_DATA[0]);

        // Eventos de Navegação Manual
        document.getElementById('nextBtn').onclick = nextHero;
        document.getElementById('prevBtn').onclick = () => {
            currentIdx = (currentIdx - 1 + PERSONAS_DATA.length) % PERSONAS_DATA.length;
            updateHero(PERSONAS_DATA[currentIdx]);
        };

        // Evento: Quando o vídeo do Hero acaba, pula pro próximo
        heroVideo.onended = nextHero;
    }
});