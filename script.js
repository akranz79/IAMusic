/**
 * SUNOFLIX - SCRIPT.JS (FULL ENGINE)
 */

const personasRow = document.getElementById('personasRow');
const musicasRow = document.getElementById('musicasRecentesRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const heroVideo = document.getElementById('heroVideo');

let currentIdx = 0;
let autoTimer;

// 1. ATUALIZAR HERO
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
    } else {
        heroVideo.src = "";
    }
    resetTimer();
}

// 2. RENDERIZAR FEED DE MÚSICAS (LANÇAMENTOS)
function renderMusicasFeed() {
    let allTracks = [];
    PERSONAS_DATA.forEach(p => {
        p.musicas.forEach(m => allTracks.push({...m, persona: p.nome}));
    });
    
    // Inverte para as últimas adicionadas virem primeiro
    const lastTracks = allTracks.reverse().slice(0, 10);
    
    musicasRow.innerHTML = lastTracks.map(m => `
        <div class="musica-card">
            <p style="color:red; font-size:0.7rem; font-weight:bold;">${m.persona}</p>
            <p style="margin-bottom:10px; font-size:0.9rem;">${m.titulo}</p>
            <iframe src="https://suno.com/embed/${m.sunoId}" width="100%" height="150px" style="border:none;border-radius:6px;"></iframe>
        </div>
    `).join('');
}

// 3. RENDERIZAR PERSONAS
function renderPersonas() {
    personasRow.innerHTML = '';
    PERSONAS_DATA.forEach((p, i) => {
        const img = document.createElement('img');
        img.src = p.avatar;
        img.classList.add('row__poster');
        img.onclick = () => { currentIdx = i; updateHero(p); openModal(p); };
        personasRow.appendChild(img);
    });
}

// 4. PLAYLIST AUTOMÁTICA
function nextHero() {
    currentIdx = (currentIdx + 1) % PERSONAS_DATA.length;
    updateHero(PERSONAS_DATA[currentIdx]);
    personasRow.scrollTo({ left: currentIdx * 215, behavior: 'smooth' });
}

function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(nextHero, 15000); // 15s por persona
}

// 5. MODAL
function openModal(p) {
    const embeds = p.musicas.map(m => `
        <iframe src="https://suno.com/embed/${m.sunoId}" width="100%" height="150px" style="margin-bottom:10px; border:none;border-radius:8px;"></iframe>
    `).join('');
    
    modalBody.innerHTML = `
        <video controls autoplay width="100%" poster="${p.banner}" style="border-radius:8px;">
            <source src="${p.videoDestaque}" type="video/mp4">
        </video>
        <h1 style="margin-top:20px;">${p.nome}</h1>
        <p style="margin:15px 0; color:#ccc;">${p.descricao}</p>
        ${embeds}
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

const fechar = () => { modal.style.display = 'none'; document.body.style.overflow = 'auto'; modalBody.innerHTML = ''; };
closeModal.onclick = fechar;
window.onclick = (e) => { if(e.target == modal) fechar(); };

// 6. INIT
document.addEventListener('DOMContentLoaded', () => {
    renderMusicasFeed();
    renderPersonas();
    updateHero(PERSONAS_DATA[0]);
    heroVideo.onended = nextHero;
    document.getElementById('nextBtn').onclick = nextHero;
    document.getElementById('prevBtn').onclick = () => {
        currentIdx = (currentIdx - 1 + PERSONAS_DATA.length) % PERSONAS_DATA.length;
        updateHero(PERSONAS_DATA[currentIdx]);
    };
});