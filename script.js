/**
 * SUNOFLIX - ENGINE COMPLETA v3.0
 * Corrigido: Formatação e Quebras de Linha
 */

const personasRow = document.getElementById('personasRow');
const musicasRow = document.getElementById('musicasRecentesRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const heroVideo = document.getElementById('heroVideo');

let currentIdx = 0;
let autoTimer;

// 1. RENDERIZAR FEED DE MÚSICAS (LANÇAMENTOS GERAIS)
function renderMusicasFeed() {
    if (!musicasRow || !PERSONAS_DATA) return;
    
    let allTracks = [];
    PERSONAS_DATA.forEach(p => {
        if (p.musicas) {
            p.musicas.forEach(m => allTracks.push({...m, persona: p.nome}));
        }
    });
    
    const lastTracks = allTracks.reverse().slice(0, 10);
    
    musicasRow.innerHTML = lastTracks.map(m => `
        <div class="musica-card" style="width: 300px; flex-shrink: 0; background: #181818; padding: 15px; border-radius: 12px; transition: 0.3s;">
            <p style="color:#e50914; font-size:0.7rem; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">${m.persona}</p>
            <p style="margin-bottom:12px; font-size:0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.titulo}</p>
            <iframe src="https://suno.com/embed/${m.sunoId}" width="100%" height="150px" style="border:none;border-radius:8px;" allow="encrypted-media"></iframe>
        </div>
    `).join('');
}

// 2. ATUALIZAR O HERO
function updateHero(persona) {
    if (!persona) return;
    const hTitle = document.getElementById('heroTitle');
    const hDesc = document.getElementById('heroDesc');
    
    hTitle.style.opacity = 0;
    hDesc.style.opacity = 0;

    setTimeout(() => {
        hTitle.innerText = persona.nome;
        hTitle.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        hDesc.innerText = persona.descricao || persona.descrica;
        hDesc.style.opacity = 1;
    }, 600);
    
    heroVideo.pause();
    heroVideo.poster = persona.banner || persona.avatar;
    
    if (persona.videoDestaque) {
        heroVideo.src = persona.videoDestaque;
        heroVideo.load();
        heroVideo.play().catch(() => console.log("Autoplay bloqueado"));
    } else {
        heroVideo.src = "";
    }
    resetTimer();
}

function nextHero() {
    if (modal && modal.style.display === 'block') return;
    currentIdx = (currentIdx + 1) % PERSONAS_DATA.length;
    updateHero(PERSONAS_DATA[currentIdx]);
    if (personasRow) {
        personasRow.scrollTo({ left: currentIdx * 215, behavior: 'smooth' });
    }
}

function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(nextHero, 15000);
}

// 3. RENDERIZAR CARROSSEL DE PERSONAS
function renderPersonas() {
    if (!personasRow) return;
    personasRow.innerHTML = '';
    PERSONAS_DATA.forEach((p, i) => {
        const img = document.createElement('img');
        img.src = p.avatar;
        img.classList.add('row__poster');
        img.onclick = () => { currentIdx = i; updateHero(p); openModal(p); };
        personasRow.appendChild(img);
    });
}

// 4. MODAL PERFIL ARTISTA
function openModal(p) {
    const embeds = p.musicas.map(m => `
        <div style="margin-bottom:20px;">
            <p style="color:#888; font-size:0.85rem; margin-bottom:8px;">Track: ${m.titulo}</p>
            <iframe src="https://suno.com/embed/${m.sunoId}" width="100%" height="150px" style="border:none;border-radius:12px;"></iframe>
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
                <h3 style="margin-bottom:25px; border-bottom: 1px solid #333; padding-bottom:10px;">PLAYLIST OFICIAL</h3>
                ${embeds}
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
            <button onclick="openModal(PERSONAS_DATA[currentIdx])" class="modal__video-back-btn">← VOLTAR AO PERFIL</button>
            <video controls autoplay width="100%" poster="${poster}" style="border-radius:12px; background:#000;">
                <source src="${src}" type="video/mp4">
            </video>
        </div>
        ${playlist}
    `;
};

const fecharModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalBody.innerHTML = '';
};

// 5. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PERSONAS_DATA !== 'undefined' && PERSONAS_DATA.length > 0) {
        renderMusicasFeed();
        renderPersonas();
        updateHero(PERSONAS_DATA[0]);
        
        document.getElementById('nextBtn').onclick = nextHero;
        document.getElementById('prevBtn').onclick = () => {
            currentIdx = (currentIdx - 1 + PERSONAS_DATA.length) % PERSONAS_DATA.length;
            updateHero(PERSONAS_DATA[currentIdx]);
        };
        
        heroVideo.onended = nextHero;
        closeModal.onclick = fecharModal;
        window.onclick = (e) => { if(e.target == modal) fecharModal(); };
    }
});