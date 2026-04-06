/**
 * SUNOFLIX - SCRIPT v5.0 (ENGINE DINÂMICA)
 */

const personasRow = document.getElementById('personasRow');
const musicasRow = document.getElementById('musicasRecentesRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const heroVideo = document.getElementById('heroVideo');

let currentIdx = 0;
let autoTimer;

// 1. SCROLL DINÂMICO DO CARROSSEL
function scrollToPersona(index) {
    if (!personasRow || !personasRow.children.length) return;
    const cardWidth = personasRow.children[0].offsetWidth;
    const gap = 20; // Valor definido no CSS (--gap)
    personasRow.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
}

// 2. FEED DE MÚSICAS (PÁGINA PRINCIPAL)
function renderMusicasFeed() {
    if (!musicasRow || !PERSONAS_DATA) return;
    let allTracks = [];
    PERSONAS_DATA.forEach(p => {
        if (p.musicas) p.musicas.forEach(m => allTracks.push({...m, persona: p.nome}));
    });
    const lastTracks = allTracks.reverse().slice(0, 10);
    musicasRow.innerHTML = lastTracks.map(m => `
        <div class="audio-card">
            <p style="color:#e50914; font-size:0.7rem; font-weight:bold; text-transform:uppercase;">${m.persona}</p>
            <p style="margin-top:5px; font-size:0.9rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.titulo}</p>
            <audio controls preload="none"><source src="${m.arquivo}" type="audio/mpeg"></audio>
        </div>
    `).join('');
}

// 3. HERO MANAGEMENT
function updateHero(persona) {
    if (!persona) return;
    const hTitle = document.getElementById('heroTitle');
    hTitle.style.opacity = 0;
    setTimeout(() => { hTitle.innerText = persona.nome; hTitle.style.opacity = 1; }, 500);

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
    currentIdx = (currentIdx + 1) % PERSONAS_DATA.length;
    updateHero(PERSONAS_DATA[currentIdx]);
    scrollToPersona(currentIdx);
}

function resetTimer() { clearInterval(autoTimer); autoTimer = setInterval(nextHero, 15000); }

// 4. RENDER PERSONAS
function renderPersonas() {
    if (!personasRow) return;
    personasRow.innerHTML = '';
    PERSONAS_DATA.forEach((p, i) => {
        const img = document.createElement('img');
        img.src = p.avatar;
        img.classList.add('row__poster');
        img.onclick = () => { currentIdx = i; updateHero(p); openModal(p); scrollToPersona(i); };
        personasRow.appendChild(img);
    });
}

// 5. MODAL PERFIL ARTISTA
function openModal(p) {
    const playlistHTML = p.musicas.map((m, index) => `
        <div class="audio-card" style="width:100%; margin-bottom:15px;">
            <p style="font-size:0.75rem; color:#888;">TRACK ${index + 1}: ${m.titulo}</p>
            <audio controls><source src="${m.arquivo}" type="audio/mpeg"></audio>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <div id="modalMainContent">
            <div class="modal__profile-header">
                <img src="${p.avatar2 || p.avatar}" class="modal__profile-avatar">
                <div class="modal__profile-info">
                    <p style="color:#e50914; font-weight:bold; font-size:0.8rem;">${p.categoria || 'ARTISTA IA'}</p>
                    <h1 class="modal__profile-name">${p.nome}</h1>
                    <p style="color:#ccc; margin-bottom:15px;">${p.descricao}</p>
                    ${p.videoDestaque ? `<button class="modal__video-btn" onclick="playVideoModal('${p.videoDestaque}', '${p.banner}')">▶ ASSISTIR VÍDEO</button>` : ''}
                </div>
            </div>
            <div class="modal__playlist">
                <h3 style="margin-bottom:20px; border-bottom:1px solid #333; padding-bottom:10px;">PLAYLIST OFICIAL</h3>
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
            <button onclick="openModal(PERSONAS_DATA[currentIdx])" style="position:absolute; top:10px; left:10px; z-index:10; background:rgba(0,0,0,0.7); color:white; border:none; padding:8px 15px; border-radius:20px; cursor:pointer;">← VOLTAR</button>
            <video controls autoplay width="100%" poster="${poster}" style="border-radius:12px; background:#000;"><source src="${src}" type="video/mp4"></video>
        </div>
        ${playlist}
    `;
};

// 6. INIT
document.addEventListener('DOMContentLoaded', () => {
    renderMusicasFeed();
    renderPersonas();
    if (PERSONAS_DATA.length > 0) updateHero(PERSONAS_DATA[0]);
    document.getElementById('nextBtn').onclick = nextHero;
    document.getElementById('prevBtn').onclick = () => {
        currentIdx = (currentIdx - 1 + PERSONAS_DATA.length) % PERSONAS_DATA.length;
        updateHero(PERSONAS_DATA[currentIdx]);
        scrollToPersona(currentIdx);
    };
    heroVideo.onended = nextHero;
    closeModal.onclick = () => { modal.style.display = 'none'; document.body.style.overflow = 'auto'; modalBody.innerHTML = ''; };
    window.onclick = (e) => { if(e.target == modal) closeModal.onclick(); };
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('nav__black'); else nav.classList.remove('nav__black');
    });
});