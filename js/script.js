// Container onde os resumos serão inseridos
const notesContainer = document.getElementById("notesContainer");

// Campos de busca e filtro, com fallbacks para evitar erro
const searchInput = document.querySelector(".search-input") || null;
// tenta primeiro por id, depois pela classe existente no HTML
const courseFilter =
  document.getElementById("courseFilter") ||
  document.querySelector(".course-filter") ||
  null;

// Cria cada card de resumo
function criarCardResumo(resumo) {
  const card = document.createElement("div");
  card.classList.add("note-card");

  card.innerHTML = `
    <a href="${resumo.link}">
      <img src="${resumo.thumbnail}" alt="Thumbnail do curso ${resumo.curso}" class="course-thumbnail">
    </a>
    <div class="note-content">
      <div class="course-info">
        <span>${resumo.curso}</span>
        <span>${resumo.data}</span>
      </div>
      <h3 class="course-title">${resumo.titulo}</h3>
      <p class="note-excerpt">${resumo.resumo}</p>
      <div class="tags">
        ${resumo.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;
  return card;
}

// Aplica busca e filtro sem quebrar caso os elementos não existam
function aplicarFiltros(lista) {
  const termoBusca = (searchInput && searchInput.value ? searchInput.value : "").toLowerCase();
  const cursoSelecionado = courseFilter && courseFilter.value ? courseFilter.value : "";

  return lista.filter(resumo => {
    const correspondeBusca =
      termoBusca === "" ||
      resumo.titulo.toLowerCase().includes(termoBusca) ||
      resumo.resumo.toLowerCase().includes(termoBusca) ||
      resumo.tags.some(tag => tag.toLowerCase().includes(termoBusca));

    const correspondeCurso =
      cursoSelecionado === "" || resumo.curso === cursoSelecionado;

    return correspondeBusca && correspondeCurso;
  });
}

// Renderiza os resumos na tela
function renderizarResumos() {
  if (!notesContainer) return;

  const lista = aplicarFiltros(resumos);

  notesContainer.innerHTML = "";

  if (lista.length === 0) {
    notesContainer.innerHTML = `<p class="no-results">Nenhum resumo encontrado.</p>`;
    return;
  }

  lista.forEach(resumo => {
    const card = criarCardResumo(resumo);
    notesContainer.appendChild(card);
  });
}

// Eventos: só adiciona se os elementos existirem
if (searchInput) searchInput.addEventListener("input", renderizarResumos);
if (courseFilter) courseFilter.addEventListener("change", renderizarResumos);

// Render inicial: mostra todos
renderizarResumos();