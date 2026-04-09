/**
 * SUNOFLIX - ENGINE v7.0 (LISTA VERTICAL DE ATUALIZAÇÕES)
 */

const personasRow = document.getElementById('personasRow');
const musicasRow = document.getElementById('musicasRecentesRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const heroVideo = document.getElementById('heroVideo');

let currentIdx = 0;
let autoTimer;

// 1. UTILITÁRIO: PEGAR DATA DA MÚSICA MAIS RECENTE
function getLatestUpdate(persona) {
    if (!persona.musicas || persona.musicas.length === 0) return 0;
    return Math.max(...persona.musicas.map(m => new Date(m.data || "2000-01-01").getTime()));
}

// 2. RENDERIZAR LISTA DE ATUALIZAÇÕES (UMA ABAIXO DA OUTRA)
function renderMusicasFeed() {
    if (!musicasRow || !PERSONAS_DATA) return;
    
    let allTracks = [];
    PERSONAS_DATA.forEach(p => {
        if (p.musicas) {
            p.musicas.forEach(m => {
                allTracks.push({
                    ...m, 
                    personaNome: p.nome,
                    personaAvatar: p.avatar2 || p.avatar // Usa o avatar circular se disponível
                });
            });
        }
    });
    
    // Ordena por data decrescente e pega as 5 últimas
    const lastTracks = allTracks
        .sort((a, b) => new Date(b.data || 0) - new Date(a.data || 0))
        .slice(0, 5);
    
    // Renderiza como uma lista vertical
    musicasRow.innerHTML = lastTracks.map(m => `
        <div class="musica-item-vertical">
            <img src="${m.personaAvatar}" alt="${m.personaNome}" class="musica-item__avatar">
            <div class="musica-item__info">
                <div class="musica-item__text">
                    <span class="musica-item__persona">${m.personaNome}</span>
                    <span class="musica-item__titulo">${m.titulo}</span>
                </div>
                <audio controls preload="none" class="musica-item__audio">
                    <source src="${m.arquivo}" type="audio/mpeg">
                </audio>
            </div>
        </div>
    `).join('');
}

// 3. RENDERIZAR CARROSSEL DE PERSONAGENS (ORDENADO)
function renderPersonas() {
    if (!personasRow) return;
    const sortedPersonas = [...PERSONAS_DATA].sort((a, b) => getLatestUpdate(b) - getLatestUpdate(a));
    
    personasRow.innerHTML = '';
    sortedPersonas.forEach((p, i) => {
        const img = document.createElement('img');
        img.src = p.avatar;
        img.classList.add('row__poster');
        img.onclick = () => { 
            currentIdx = i; 
            updateHero(p); 
            openModal(p); 
            scrollToPersona(i);
        };
        personasRow.appendChild(img);
    });
    window.SORTED_DATA = sortedPersonas;
}

// 4. FUNÇÕES DE NAVEGAÇÃO E HERO
function scrollToPersona(index) {
    const cardWidth = personasRow.children[0]?.offsetWidth || 200;
    const gap = 20;
    personasRow.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
}

function updateHero(persona) {
    if (!persona) return;
    document.getElementById('heroTitle').innerText = persona.nome;
    document.getElementById('heroDesc').innerText = persona.descricao;
    heroVideo.pause();
    heroVideo.poster = persona.banner || persona.avatar;
    if (persona.videoDestaque) {
        heroVideo.src = persona.videoDestaque;
        heroVideo.load();
        heroVideo.play().catch(() => {});
    }
    resetTimer();
}

function nextHero() {
    if (modal.style.display === 'block') return;
    currentIdx = (currentIdx + 1) % window.SORTED_DATA.length;
    updateHero(window.SORTED_DATA[currentIdx]);
    scrollToPersona(currentIdx);
}

function resetTimer() { clearInterval(autoTimer); autoTimer = setInterval(nextHero, 15000); }

// 5. MODAL DE PERFIL
function openModal(p) {
    const playlistHTML = p.musicas.map(m => `
        <div class="audio-card" style="width:100%; margin-bottom:12px;">
            <p style="font-size:0.8rem; color:#888;">${m.titulo}</p>
            <audio controls><source src="${m.arquivo}" type="audio/mpeg"></audio>
        </div>
    `).join('');

    const videoBtn = p.videoDestaque ? 
        `<button class="modal__video-btn" onclick="playVideoModal('${p.videoDestaque}', '${p.banner}')">▶ ASSISTIR VÍDEO</button>` : '';

    modalBody.innerHTML = `
        <div id="modalMainContent">
            <div class="modal__profile-header">
                <img src="${p.avatar2 || p.avatar}" class="modal__profile-avatar">
                <div class="modal__profile-info">
                    <p style="color:#e50914; font-weight:bold; font-size:0.75rem;">${p.categoria || 'ARTISTA IA'}</p>
                    <h1 class="modal__profile-name">${p.nome}</h1>
                    <p style="color:#ccc; margin-top:5px;">${p.descricao}</p>
                    ${videoBtn}
                </div>
            </div>
            <div class="modal__playlist">
                <h3 style="margin-bottom:15px; border-bottom:1px solid #333; padding-bottom:10px;">PLAYLIST OFICIAL</h3>
                ${playlistHTML}
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

window.playVideoModal = function(src, poster) {
    const main = document.getElementById('modalMainContent');
    const playlist = main.querySelector('.modal__playlist').outerHTML;
    main.innerHTML = `
        <div style="margin-bottom:30px; position:relative;">
            <button onclick="openModal(window.SORTED_DATA[currentIdx])" style="position:absolute; top:10px; left:10px; z-index:10; background:rgba(0,0,0,0.7); color:white; border:none; padding:8px 15px; border-radius:20px; cursor:pointer;">← VOLTAR</button>
            <video controls autoplay width="100%" poster="${poster}" style="border-radius:12px; background:#000;"><source src="${src}" type="video/mp4"></video>
        </div>
        ${playlist}
    `;
};

// 6. INIT
document.addEventListener('DOMContentLoaded', () => {
    renderPersonas(); 
    renderMusicasFeed(); 
    if (window.SORTED_DATA && window.SORTED_DATA.length > 0) updateHero(window.SORTED_DATA[0]);
    document.getElementById('nextBtn').onclick = nextHero;
    document.getElementById('prevBtn').onclick = () => {
        currentIdx = (currentIdx - 1 + window.SORTED_DATA.length) % window.SORTED_DATA.length;
        updateHero(window.SORTED_DATA[currentIdx]);
        scrollToPersona(currentIdx);
    };
    closeModal.onclick = () => { modal.style.display = 'none'; document.body.style.overflow = 'auto'; modalBody.innerHTML = ''; };
    heroVideo.onended = nextHero;
    window.onclick = (e) => { if(e.target == modal) closeModal.onclick(); };
});