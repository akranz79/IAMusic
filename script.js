/**
 * LÓGICA DO FRONT-END - SUNOFLIX
 */

// 1. REFERÊNCIAS DO DOM (Elementos do HTML)
const personasRow = document.getElementById('personasRow');
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Elementos do Hero para atualização dinâmica (opcional)
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroVideo = document.getElementById('heroVideo');

// 2. FUNÇÃO PARA RENDERIZAR OS PERSONAS NA TELA
function renderPersonas() {
    // Limpa a fileira antes de renderizar (boa prática)
    personasRow.innerHTML = '';

    PERSONAS_DATA.forEach(persona => {
        // Criar o elemento de imagem (Card)
        const img = document.createElement('img');
        img.src = persona.avatar;
        img.alt = persona.nome;
        img.classList.add('row__poster');

        // Evento de clique para abrir o Modal
        img.addEventListener('click', () => {
            openPersonaModal(persona);
        });

        // Adicionar o card na fileira
        personasRow.appendChild(img);
    });
}

// 3. FUNÇÃO PARA ABRIR O MODAL E CARREGAR OS EMBEDS DO SUNO
function openPersonaModal(persona) {
    // Gerar o HTML das músicas dinamicamente
    const musicasHTML = persona.musicas.map(musica => `
        <div class="suno-embed-container">
            <h4 style="margin-bottom: 10px; color: #aaa;">${musica.titulo}</h4>
            <iframe 
                src="https://suno.com/embed/${musica.sunoId}" 
                width="100%" 
                height="150px" 
                style="border: none;" 
                allow="autoplay; encrypted-media">
            </iframe>
        </div>
    `).join('');

    // Montar o conteúdo completo do modal
    modalBody.innerHTML = `
        <h1 style="font-size: 2.5rem; margin-bottom: 10px;">${persona.nome}</h1>
        <p style="color: #46d369; font-weight: bold; margin-bottom: 15px;">${persona.categoria}</p>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">${persona.descricao}</p>
        <hr style="border: 0.1px solid #333; margin-bottom: 30px;">
        <h3 style="margin-bottom: 20px;">Discografia Recomendada</h3>
        ${musicasHTML}
    `;

    // Exibir o modal
    modal.style.display = 'block';
    // Travar o scroll do fundo enquanto o modal estiver aberto
    document.body.style.overflow = 'hidden';
}

// 4. EVENTOS DE FECHAMENTO
closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Devolve o scroll
    modalBody.innerHTML = ''; // Limpa para parar o áudio dos iframes
};

// Fechar se clicar fora da caixa branca
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalBody.innerHTML = '';
    }
};

// 5. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    renderPersonas();
    
    // Configura o primeiro persona como destaque no Hero automaticamente
    if (PERSONAS_DATA.length > 0) {
        const p1 = PERSONAS_DATA[0];
        heroTitle.innerText = p1.nome;
        heroDesc.innerText = p1.descricao;
        // Se você já tiver o vídeo local:
        // heroVideo.src = p1.videoDestaque;
    }
});