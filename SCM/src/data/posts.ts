import heroTvDeRua from "@/assets/hero-tv-de-rua.jpg";
import feiraAgroecologia from "@/assets/feira-agroecologia.jpg";
import caretas from "@/assets/caretas.jpg";
import casaDigital from "@/assets/casa-digital.jpg";

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  tags: string[];
  body: string[];
  links?: { label: string; href: string; note?: string }[];
};

export const posts: Post[] = [
  {
    slug: "mostra-de-filmes-5-edicao-tv-de-rua",
    title: "Mostra de Filmes da 5ª Edição do Projeto TV de Rua",
    category: "Audiovisual",
    date: "2024-04-01",
    dateLabel: "1 de abril de 2024",
    excerpt:
      "Meruoca tem despontado nos últimos anos como um relevante polo de produções audiovisuais, com filmes que circularam por importantes festivais de cinema no Brasil.",
    image: heroTvDeRua,
    imageAlt:
      "Exibição de filmes ao ar livre em praça de comunidade rural ao anoitecer",
    tags: ["Audiovisual", "TV de Rua", "Jovens", "Meruoca", "Cultura"],
    body: [
      "Meruoca tem despontado nos últimos anos como um relevante polo de produções audiovisuais. Alguns dos filmes produzidos no município circularam por importantes festivais de cinema no Brasil e foram veiculados em programas de TV.",
      "A partir de 2018, um ambicioso projeto nasceu para dar vazão às extensas possibilidades que a sétima arte proporciona, tanto em termos culturais quanto artísticos e econômicos. Acreditando que a formação é uma etapa crucial para o crescimento da cadeia produtiva, criou-se o projeto TV DE RUA, uma formação em audiovisual para jovens do município de Meruoca a partir de 15 anos de idade, com aulas de Roteiro, Fotografia, Captação de som direto, Produção, Edição, acessibilidade e muito mais.",
      "Ao longo de seis anos, já são cinco turmas com esta da Palestina. O curso já teve etapas em Santo Elias, na sede de Meruoca, no distrito de Anil, e contou também com uma edição online. Cerca de 120 adolescentes e jovens passaram pela incrível experiência do TV DE RUA e muitos trabalham atualmente em áreas da produção audiovisual, de forma autônoma ou vinculados a produtoras da região.",
      "Não poderíamos deixar de citar o apoio imprescindível da coordenadora do projeto Naiana Sousa, de Gabriel Soares, que participou do TV de Rua em Anil e em 2024 atuou como fotógrafo still, e dos produtores Rozalvo Barbosa (Promova Produções) e Raylane Neres (Argumento), incansáveis batalhadores para que o projeto não só permaneça, como cresça a cada edição.",
      "Com apoio logístico e supervisão das produtoras Narrativa Entretenimento, Promova e Argumento Produções, os TVs de Rua de Palestina do Norte e São Gonçalo mergulharam profundamente nas várias e complexas etapas da produção audiovisual, compilando todo seu conhecimento, técnica e arte em três filmes.",
      "O TV DE RUA é uma realização da Associação Sociedade Coração de Maria, com o apoio cultural do Governo do Estado do Ceará.",
    ],
  },
  {
    slug: "x-feira-de-agroecologia-e-cultura-familiar",
    title: "X Feira de Agroecologia e Cultura Familiar",
    category: "Agroecologia",
    date: "2024-02-29",
    dateLabel: "29 de fevereiro de 2024",
    excerpt:
      "Com capacitações, exposições, venda de produtos e shows culturais, a feira é gratuita e aberta a todos, celebrando a agricultura familiar da serra.",
    image: feiraAgroecologia,
    imageAlt: "Produtos orgânicos em caixotes de madeira numa feira da agricultura familiar",
    tags: ["Agroecologia", "Agricultura familiar", "Cultura", "Meruoca"],
    body: [
      "Com capacitações, exposições, vendas de produtos e shows culturais, a X Feira de Agroecologia e Cultura Familiar é gratuita e aberta a todos.",
      "A programação inclui abertura oficial e capacitação de produtores e agricultores da região no dia 08 de março, das 8h às 16h, no auditório dos Chalés Encontro das Brisas.",
      "Nos dias 09, das 14h às 00h, e 10 de março, das 8h às 12h, acontecem a feira da agricultura familiar, o artesanato, a rodada de negócios e a noite cultural, na Praça da Bifurcação Meruoca/Alcântaras.",
      "Realização: Sociedade Coração de Maria. Este projeto tem o apoio do Governo do Estado do Ceará — Casa Civil.",
    ],
  },
  {
    slug: "encerramento-4-edicao-tv-de-rua",
    title: "Encerramento da 4ª Edição do Projeto TV de Rua",
    category: "Audiovisual",
    date: "2023-05-25",
    dateLabel: "25 de maio de 2023",
    excerpt:
      "Jovens de Meruoca tiveram formação gratuita nas diversas áreas do audiovisual, com aulas teóricas e práticas e curtas-metragens exibidos para a comunidade.",
    image: casaDigital,
    imageAlt: "Equipamento de cinema e computadores em mesa de trabalho",
    tags: ["Anil", "Audiovisual", "Jovens", "Meruoca", "TV de Rua"],
    body: [
      "Promovido pela Sociedade Coração de Maria, que desenvolve projetos voltados à arte, cultura e agricultura familiar, jovens de Meruoca tiveram formação gratuita nas diversas áreas do audiovisual.",
      "A edição se iniciou em novembro de 2022 e terminou em maio de 2023, no distrito de Anil. Os alunos tiveram acesso a aulas teóricas e práticas de Direção de Fotografia, Trilha Sonora para cinema, TV e publicidade, Técnicas de Roteirização, Planejamento de Produção, Acessibilidade nos conteúdos audiovisuais, Direção e Montagem, Produção Audiovisual e Diversidade, e Assessoria de Comunicação.",
      "O TV de Rua conta com o apoio da Secretaria da Cultura do Estado (Secult), por meio do programa Escolas Livres da Cultura. O projeto já aconteceu em 2017, 2018 e 2019, beneficiando mais de 100 adolescentes e jovens da região.",
      "Com assistência de profissionais da área, os alunos produziram curtas-metragens exibidos para a comunidade, dando maior visibilidade ao curso e oportunidades de mercado.",
    ],
    links: [
      { label: "Vozes Ocultas", href: "https://youtu.be/0SOOZ7PsTlA", note: "Dirigido por Rosana Lucas" },
      { label: "Em Busca do Tesouro", href: "https://youtu.be/rKqhTjInBYs", note: "Dirigido por Italo Pereira" },
      { label: "História Mal Contada", href: "https://youtu.be/bG4UqP_9qvE", note: "Dirigido por Adalto Mesquita" },
      {
        label: "Desafios do Empreendedorismo Feminino",
        href: "https://youtu.be/QI1bhIdVMpc",
        note: "Dirigido por Tainara Tomé de Albuquerque",
      },
    ],
  },
  {
    slug: "i-seminario-natal-na-serra",
    title: "I Seminário Natal na Serra",
    category: "Cultura",
    date: "2017-12-15",
    dateLabel: "15 de dezembro de 2017",
    excerpt:
      "Um seminário para discutir o fomento às tradições natalinas da região, reunindo lideranças, artistas e produtores culturais da serra.",
    image: caretas,
    imageAlt: "Máscaras artesanais coloridas da cultura popular nordestina",
    tags: ["Cultura", "Natal na Serra", "Meruoca"],
    body: [
      "Na manhã desta sexta-feira foi realizado um seminário com o intuito de discutir o fomento às tradições natalinas da região.",
      "Estiveram presentes representantes de grupos culturais, artistas locais, produtores e lideranças comunitárias, num encontro voltado ao fortalecimento das manifestações culturais que marcam o fim de ano na Serra da Meruoca.",
    ],
  },
  {
    slug: "iii-meruoca-fazendo-caretas",
    title: "III Meruoca Fazendo Caretas",
    category: "Memória Viva",
    date: "2014-04-10",
    dateLabel: "10 de abril de 2014",
    excerpt:
      "A Sociedade Coração de Maria — Associação Santo Elias foi contemplada com o Edital Ceará da Paixão do Governo do Estado do Ceará.",
    image: caretas,
    imageAlt: "Máscaras de caretas penduradas com tecidos coloridos",
    tags: ["Caretas", "Cultura", "Meruoca", "Governo do Estado"],
    body: [
      "A Sociedade Coração de Maria — Associação Santo Elias foi contemplada com o Edital Ceará da Paixão do Governo do Estado do Ceará.",
      "O projeto resgata a brincadeira secular dos mascarados que povoam o imaginário da região, reunindo jovens e mestres na confecção das máscaras e na ocupação das ruas durante a Semana Santa.",
    ],
  },
];

export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export const archive = [
  { year: "2024", count: 2 },
  { year: "2023", count: 1 },
  { year: "2017", count: 1 },
  { year: "2014", count: 1 },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
