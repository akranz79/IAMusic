/**
 * LÓGICA DO FRONT-END - SUNOFLIX (VERSÃO VÍDEO NO MODAL)
 */

const personasRow = document.getElementById('personasRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Renderização dos cards no carrossel
function renderPersonas() {
    personasRow.innerHTML = '';
    PERSONAS_DATA.forEach(persona => {
        const img = document.createElement('img');
        img.src = persona.avatar;
        img.alt = persona.nome;
        img.classList.add('row__poster');
        img.addEventListener('click', () => openPersonaModal(persona));
        personasRow.appendChild(img);
    });
}

// Função Principal: Abre o Modal com Vídeo + Descrição + Músicas
function openPersonaModal(persona) {
    // 1. Gerar os Embeds das músicas do Suno
    const musicasHTML = persona.musicas.map(musica => `
        <div class="suno-embed-container">
            <p style="margin: 10px 0; color: #888; font-size: 0.9rem;">Ouvir: ${musica.titulo}</p>
            <iframe 
                src="https://suno.com/embed/${musica.sunoId}" 
                width="100%" 
                height="150px" 
                style="border: none; border-radius: 8px;" 
                allow="autoplay; encrypted-media">
            </iframe>
        </div>
    `).join('');

    // 2. Montar o HTML do Modal (Vídeo no topo)
    modalBody.innerHTML = `
        <div class="modal__video-wrapper" style="margin-bottom: 25px;">
            <video controls autoplay width="100%" style="border-radius: 8px; border: 1px solid #333; background: #000;">
                <source src="${persona.videoDestaque}" type="video/mp4">
                Seu navegador não suporta a tag de vídeo.
            </video>
        </div>
        
        <h1 style="font-size: 2.2rem; margin-bottom: 5px;">${persona.nome}</h1>
        <p style="color: #e50914; font-weight: bold; margin-bottom: 15px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;">
            ${persona.categoria}
        </p>
        
        <p style="font-size: 1.1rem; line-height: 1.5; color: #ccc; margin-bottom: 30px;">
            ${persona.descricao}
        </p>

        <h3 style="border-bottom: 1px solid #333; padding-bottom: 10px; margin-bottom: 20px;">Canções em Destaque</h3>
        <div class="modal__music-list">
            ${musicasHTML}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Trava o scroll da página
}

// Fechamento do Modal
const handleClose = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava o scroll
    modalBody.innerHTML = ''; // Crucial: mata o vídeo e os áudios ao fechar
};

closeModal.onclick = handleClose;
window.onclick = (event) => { if (event.target == modal) handleClose(); };


function setupAutoScroll() {
    const row = document.getElementById('personasRow');
    let isMouseOver = false;

    // Pausa o scroll quando o usuário coloca o mouse em cima
    row.onmouseover = () => isMouseOver = true;
    row.onmouseout = () => isMouseOver = false;

    setInterval(() => {
        if (!isMouseOver) {
            // Se chegou ao fim, volta ao início (loop infinito)
            if (row.scrollLeft + row.offsetWidth >= row.scrollWidth) {
                row.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Rola 300px para a direita
                row.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }
    }, 5000); // Rola a cada 5 segundos
}

// Chame a função dentro do DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    renderPersonas();
    setupAutoScroll(); // Ativa a rolagem automática
});

// Inicialização
document.addEventListener('DOMContentLoaded', renderPersonas);