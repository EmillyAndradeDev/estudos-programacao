// Array com todos os resumos que aparecerão na página inicial
// Cada objeto representa um resumo com informações para o card
const resumos = [
    {
        curso: "Nome do Curso",      // Nome do curso
        data: "10/05/2023",                        // Data do resumo
        titulo: "Tema do Curso",        // Título do resumo
        resumo: "Resumo da aula...", // Trecho do conteúdo
        tags: ["HTML", "CSS", "Fundamentos"],      // Tags que aparecerão no card
        thumbnail: "https://placehold.co/600x400/8d5a3c/white?text=Modelo+Card", // Imagem do card
        link: "resumos/00-resumo-modelo.html"       // Caminho para o HTML completo do resumo
    },

    {
        curso: "EstudanteDev",
        data: "01/01/2025",
        titulo: "Introdução ao CSS e JavaScript",
        resumo: "Propriedades do CSS, adicionando CSS ao HTML, seletores CSS, adicionando JavaScript ao HTML, variáveis JS",
        tags: ["CSS", "CSS Seletores", "CSS no HTML", "JavaScript", "Variáveis JS"],
        thumbnail: "https://placehold.co/600x400/D96299/white?text=Introdução:+CSS+e+JavaScript",
        link: "resumos/EstudanteDev/01-css-EstudanteDev.html"
    },

    {
      curso: "CursoEmVideo",
      data: "01/02/2025",
      titulo: "HTML - Conceitos básicos",
      resumo: "Significado das tags iniciais, parágrafos, quebras de linha, símbolos especiais, emojis, favicon, negrito e itálico, destaque no texto, ênfase, marcador de texto, texto grande/pequeno, texto deletado, texto inserido, texto subescrito/sobrescrito",
      tags: ["Conceitos", "Tags básicas", "Significado tags HTML", "HTML", "Símbolos especiais", "Emojis no HTML", "tag de imagens", "favicon", "negrito e itálico", "destaque no texto", "ênfase", "marcador de texto", "texto grande/pequeno", "texto deletado", "texto inserido", "texto subescrito/sobrescrito"],
      thumbnail: "https://placehold.co/600x400/D96299/white?text=Conceitos+básicos+HTML",
      link: "resumos/CursoEmVideo/01-html-conceitos-basicos.html"
    },

    {
        curso: "CursoEmVideo",
        data: "15/02/2025",
        titulo: "Citações e Códigos no HTML",
        resumo: "Formatações de códigos dentro do HTML, tags de citação, abreviação e texto invertido.",
        tags: ["Código-fonte", "Pré-formatação", "Tag &lt;pre&gt;&lt;/pre&gt;", "Citações", "tag &lt;q&gt;&lt;/q&gt;", "tag &lt;blockquote&gt;&lt;/blockquote&gt;", "Abreviações", "tag &lt;abbr&gt;&lt;/abbr&gt;", "Texto invertido", "tag &lt;bdo&gt;&lt;/bdo&gt;"],
        thumbnail: "https://placehold.co/600x400/D96299/white?text=Citações+e+Códigos+dentro+do+HTML",
        link: "resumos/CursoEmVideo/02-citacoes-e-codigos.html"
    },

    {
        curso: "CursoEmVideo",
        data: "01/03/2025",
        titulo: "Listas no HTML",
        resumo: "Trabalhando com listas: lista ordenada, lista desordenada, juntando listas e lista de definição.",
        tags: ["Listas","tag &lt;ol&gt;&lt/;ul&gt;", "tag &lt;ul&gt;&lt/;ul&gt;", "Listas personalizadas", "Juntando listas", "Lista de definição", "tag &lt;dl&gt; &lt;dt&gt;&lt;/dt&gt; &lt;dd&gt;&lt;/dd&gt; &lt;/dl&gt;"],
        thumbnail: "https://placehold.co/600x400/D96299/white?text=Trabalhando+com+listas+no+HTML",
        link: "resumos/CursoEmVideo/03-listas-ul-e-ol.html"
    }
];
