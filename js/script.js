// Seleciona o container onde os resumos serão inseridos
const notesContainer = document.getElementById("notesContainer");

// Função para criar cada card de resumo
function criarCardResumo(resumo) {
    const card = document.createElement("div");
    card.classList.add("note-card");

    // Estrutura HTML do card, preenchida com os dados do resumo
    card.innerHTML = `
        <a href="${resumo.link}">
            <img src="${resumo.thumbnail}" alt="Thumbnail do curso ${resumo.curso}" class="course-thumbnail">
        </a>
        <div class="note-content">
            <div class="course-info">
                <span>${resumo.curso}</span> <!-- Nome do curso -->
                <span>${resumo.data}</span>  <!-- Data do resumo -->
            </div>
            <h3 class="course-title">${resumo.titulo}</h3> <!-- Título do resumo -->
            <p class="note-excerpt">${resumo.resumo}</p> <!-- Trecho/resumo do conteúdo -->
            <div class="tags">
                ${resumo.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
        </div>
    `;

    return card;
}

// Função para renderizar todos os resumos na tela
function renderizarResumos() {
    notesContainer.innerHTML = ""; // Limpa o container antes de renderizar

    // Percorre o array `resumos` (definido no resumos.js) e cria cada card
    resumos.forEach(resumo => {
        const card = criarCardResumo(resumo);
        notesContainer.appendChild(card);
    });
}

// Executa a renderização assim que o script carregar
renderizarResumos();
