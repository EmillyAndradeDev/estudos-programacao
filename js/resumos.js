// Array com todos os resumos que aparecerão na página inicial
// Cada objeto representa um resumo com informações para o card
// D96299 - cor Rosa padrão
// C5D5E4 - cor EstudanteDev
// 037171 - cor CursoEmVideo
// AFA98D - cor card 
// 494368 - cor card
// 48284A
const resumos = [
    // {
    //     curso: "Nome do Curso",      
    //     data: "10/05/2023",                        
    //     titulo: "Tema do Curso",        
    //     resumo: "Resumo da aula...", 
    //     tags: ["HTML", "CSS", "Fundamentos"],      
    //     thumbnail: "https://placehold.co/600x400/D96299/white?text=Modelo+Card", // Imagem do card
    //     link: "resumos/00-resumo-modelo.html"       
    // },

    {
        curso: "EstudanteDev",  // Nome do curso
        data: "01/01/2025",  // Data do resumo
        titulo: "Introdução ao CSS e JavaScript", // Título do resumo
        resumo: "Propriedades do CSS, adicionando CSS ao HTML, seletores CSS, adicionando JavaScript ao HTML, variáveis JS", //trecho do conteúdo
        tags: ["CSS", "CSS Seletores", "CSS no HTML", "JavaScript", "Variáveis JS"], // Tags que aparecerão no card
        thumbnail: "https://placehold.co/600x400/C5D5E4/white?text=Introdução:+CSS+e+JavaScript", //imagem do card
        link: "resumos/EstudanteDev/01-css-EstudanteDev.html" // Caminho para o HTML completo do resumo
    },

    {
        curso: "CursoEmVideo",
        data: "01/02/2025",
        titulo: "HTML - Conceitos básicos",
        resumo: "Significado das tags iniciais, parágrafos, quebras de linha, símbolos especiais, emojis, favicon, negrito e itálico, destaque no texto, ênfase, marcador de texto, texto grande/pequeno, texto deletado, texto inserido, texto subescrito/sobrescrito",
        tags: ["Conceitos", "Tags básicas", "Significado tags HTML", "HTML", "Símbolos especiais", "Emojis no HTML", "tag de imagens", "favicon", "negrito e itálico", "destaque no texto", "ênfase", "marcador de texto", "texto grande/pequeno", "texto deletado", "texto inserido", "texto subescrito/sobrescrito"],
        thumbnail: "https://placehold.co/600x400/037171/white?text=Conceitos+básicos+HTML",
        link: "resumos/CursoEmVideo/01-html-conceitos-basicos.html"
    },

    {
        curso: "CursoEmVideo",
        data: "15/02/2025",
        titulo: "Citações e Códigos no HTML",
        resumo: "Formatações de códigos dentro do HTML, tags de citação, abreviação e texto invertido.",
        tags: ["Código-fonte", "Pré-formatação", "Tag &lt;pre&gt;&lt;/pre&gt;", "Citações", "tag &lt;q&gt;&lt;/q&gt;", "tag &lt;blockquote&gt;&lt;/blockquote&gt;", "Abreviações", "tag &lt;abbr&gt;&lt;/abbr&gt;", "Texto invertido", "tag &lt;bdo&gt;&lt;/bdo&gt;"],
        thumbnail: "https://placehold.co/600x400/037171/white?text=Citações+e+Códigos+dentro+do+HTML",
        link: "resumos/CursoEmVideo/02-citacoes-e-codigos.html"
    },

    {
        curso: "CursoEmVideo",
        data: "01/03/2025",
        titulo: "Listas no HTML",
        resumo: "Trabalhando com listas: lista ordenada, lista desordenada, juntando listas e lista de definição.",
        tags: ["Listas", "tag &lt;ol&gt;&lt/;ul&gt;", "tag &lt;ul&gt;&lt/;ul&gt;", "Listas personalizadas", "Juntando listas", "Lista de definição", "tag &lt;dl&gt; &lt;dt&gt;&lt;/dt&gt; &lt;dd&gt;&lt;/dd&gt; &lt;/dl&gt;"],
        thumbnail: "https://placehold.co/600x400/037171/white?text=Trabalhando+com+listas+no+HTML",
        link: "resumos/CursoEmVideo/03-listas-ul-e-ol.html"
    },

    {
        curso: "CursoEmVideo",
        data: "15/03/2025",
        titulo: "Links e âncoras",
        resumo: "O que é um link externo? Target blank. Parâmetro rel.Target self. MIME types.",
        tags: ["Links externos", "Links internos", "Links para download", "tag &lt;a href=&gt;&lt;/a&gt;"],
        thumbnail: "https://placehold.co/600x400/037171/white?text=Trabalhando+com+links+no+HTML",
        link: "resumos/CursoEmVideo/04-links-e-ancoras.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Computação em Nuvem",
        data: "01/01/2025",
        titulo: "Fundamentos da Computação em Nuvem",
        resumo: "Conteúdo da matéria: Computação em Nuvem. Tema: Fundamentos da Computação em Nuvem.",
        tags: ["Fundamentos da Computação em Nuvem", "Evolução até a Nuvem", "Vantagens e Desvantagens", "Modelos de Serviço na Nuvem", "Tipos de Nuvem", "Tenologias Habilitadoras"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Computação+em+Nuvem:+01",
        link: "resumos/ADS/01-semestre/ComputacaoEmNuvem/01-fundamentos-da-computacao-em-nuvem.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Computação em Nuvem",
        data: "01/01/2025",
        titulo: "Arquitetura de Computação em Nuvem",
        resumo: "Conteúdo da matéria: Computação em Nuvem. Tema: Arquitetura da Computação em Nuvem.",
        tags: ["Arquitetura de Computação em Nuvem", "Modelos de Camadas", "Componentes Principais", "Serviços de Arquitetura", "Iaas", "PaaS", "SaaS"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Computação+em+Nuvem:+02",
        link: "resumos/ADS/01-semestre/ComputacaoEmNuvem/02-arquitetura-de-computacao-em-nuvem.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Computação em Nuvem",
        data: "01/01/2025",
        titulo: "Segurança em Computação em Nuvem",
        resumo: "Conteúdo da matéria: Computação em Nuvem. Tema: Segurança em Computação em Nuvem.",
        tags: ["Segurança em Computação em Nuvem", "Importância da Segurança em Computação em Nuvem", "Fundamentos e Conceitos", "Responsabilidades de Segurança", "Iaas", "Paas", "Saas", "CSA Security Guidance 4.0", "Boas Práticas para Segurança na Nuvem"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Computação+em+Nuvem:+03",
        link: "resumos/ADS/01-semestre/ComputacaoEmNuvem/03-seguranca-em-computacao-em-nuvem.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Computação em Nuvem",
        data: "01/01/2025",
        titulo: "Ambiente de computação em nuvem - Azure",
        resumo: "Conteúdo da matéria: Computação em Nuvem. Tema: Ambiente de computação em nuvem - Azure.",
        tags: ["O que é Azure?", "Modelos e Tipos de Nuvens no Azure", "Componentes de Arquitetura e Serviços do Azure", "Gerenciamento, Governança e Monitoramento", "Aplicações Práticas"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Computação+em+Nuvem:+04",
        link: "resumos/ADS/01-semestre/ComputacaoEmNuvem/04-ambiente-de-computacao-em-nuvem-azure.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Computação em Nuvem",
        data: "01/01/2025",
        titulo: "Ambiente de Computação em nuvem - AWS",
        resumo: "Conteúdo da matéria: Computação em Nuvem. Tema: Ambiente de Computação em nuvem - AWS.",
        tags: ["O que é AWS?", "Principais Soluções de Computação", "Opções de Armazenamento na AWS", "Rede na AWS", "Aplicações Web na AWS"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Computação+em+Nuvem:+05",
        link: "resumos/ADS/01-semestre/ComputacaoEmNuvem/05-ambiente-de-computacao-em-nuvem-aws.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Computação em Nuvem",
        data: "01/01/2025",
        titulo: "Ambiente de Computação em Nuvem - Google Cloud",
        resumo: "Conteúdo da matéria: Computação em Nuvem. Tema: Ambiente de Computação em Nuvem - Google Cloud.",
        tags: ["O que é Google Cloud?", "Diferenciais do Google Cloud", "Principais Serviços", "Boas Práticas de Segurança e Operações", "Aplicações Práticas no Google Cloud", "Comparativo: Azure x AWS x GCP"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Computação+em+Nuvem:+06",
        link: "resumos/ADS/01-semestre/ComputacaoEmNuvem/06-ambiente-de-computacao-em-nuvem-google-cloud.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Pensamento Computacional",
        data: "01/01/2025",
        titulo: "Introdução aos Princípios Fundamentais da Computação",
        resumo: "Conteúdo da matéria: Pensamento Computacional. Tema: Introdução aos Princípios Fundamentais da Computação.",
        tags: ["Entrada", "Processamento", "Saída", "Algoritmos", "Códigos", "Pseudocódigo", "Python"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Pensamento+Computacional:+01",
        link: "resumos/ADS/01-semestre/PensamentoComputacional/01-introducao-aos-principios-fundamentais-da-computacao.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Pensamento Computacional",
        data: "01/01/2025",
        titulo: "Pensamento Computacional e Aplicações nas Áreas de Conhecimento",
        resumo: "Conteúdo da matéria: Pensamento Computacional. Tema: Pensamento Computacional e Aplicações nas Áreas de Conhecimento.",
        tags: ["Pensamento Computacional", "Abstração", "Decomposição", "Reconhecimento de Padrões", "Algoritmos", "Economia Criativa", "Negócios", "Ciências Jurídicas", "Educação", "Engenharia", "Pseudocódigo", "Python"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Pensamento+Computacional:+02",
        link: "resumos/ADS/01-semestre/PensamentoComputacional/02-aplicacoes-nas-areas-de-conhecimento.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Pensamento Computacional",
        data: "01/01/2025",
        titulo: "Sistemas Computacionais",
        resumo: "Conteúdo da matéria: Pensamento Computacional. Tema: Sistemas Computacionais.",
        tags: ["Sistemas Computacionais", "Hardware", "Software", "Linguagens de Programação", "Sistema Operacional"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Pensamento+Computacional:+03",
        link: "resumos/ADS/01-semestre/PensamentoComputacional/03-sistemas-computacionais.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Pensamento Computacional",
        data: "01/01/2025",
        titulo: "Representação de Imagens em Computadores",
        resumo: "Conteúdo da matéria: Pensamento Computacional. Tema: Representação de Imagens em Computadores.",
        tags: ["Fundamentos da imagem digital", "RGB", "Grayscale", "Imagens Bitmap x Vetoriais", "Profundidade de cor e resolução", "Python"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Pensamento+Computacional:+04",
        link: "resumos/ADS/01-semestre/PensamentoComputacional/04-representacao-de-imagens-em-computadores.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Pensamento Computacional",
        data: "01/01/2025",
        titulo: "Noções de Programação: Exemplos Com Manipulação de Imagens Digitais",
        resumo: "Conteúdo da matéria: Pensamento Computacional. Tema: Noções de Programação: Exemplos Com Manipulação de Imagens Digitais.",
        tags: ["Manipulação singular de dados", "Estruturas de repetição: for", "Expressões em código de computador", "Estrutura condicional: if", "Programação dinâmica em páginas HTML com PHP"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Pensamento+Computacional:+05",
        link: "resumos/ADS/01-semestre/PensamentoComputacional/05-nocoes-de-programacao-manipulacao-de-imagens-digitais.html"
    },

    {
        curso: "Análise e Desenvolvimento de Sistemas - Pensamento Computacional",
        data: "01/01/2025",
        titulo: "A Revolução da Inteligência Artificial",
        resumo: "Conteúdo da matéria: Pensamento Computacional. Tema: A Revolução da Inteligência Artificial.",
        tags: ["?"],
        thumbnail: "https://placehold.co/600x400/7B3E19/white?text=Pensamento+Computacional:+06",
        link: "resumos/ADS/01-semestre/PensamentoComputacional/06-a-revolucao-da-inteligencia-artificial.html"
    }
];
