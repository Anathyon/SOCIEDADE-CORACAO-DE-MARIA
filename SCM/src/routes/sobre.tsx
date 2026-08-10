import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import casaDigital from "@/assets/casa-digital.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Sociedade Coração de Maria | Sítio Santo Elias" },
      {
        name: "description",
        content:
          "A Sociedade Coração de Maria (SCM) atua no Sítio Santo Elias, em Meruoca (CE), com projetos de cultura, audiovisual, agroecologia e agricultura familiar.",
      },
      { property: "og:title", content: "Sobre a Sociedade Coração de Maria" },
      {
        property: "og:description",
        content:
          "Cultura, audiovisual e agroecologia na Serra da Meruoca, Ceará. Conheça a associação e seus projetos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

const projetos = [
  {
    nome: "TV de Rua",
    texto:
      "Formação gratuita em audiovisual para jovens de Meruoca a partir de 15 anos: roteiro, fotografia, som direto, produção, edição e acessibilidade. Cinco edições, mais de 120 jovens formados.",
  },
  {
    nome: "Feira de Agroecologia e Cultura Familiar",
    texto:
      "Capacitações, exposições, rodada de negócios e noite cultural, fortalecendo a produção limpa e a economia solidária da serra.",
  },
  {
    nome: "Meruoca Fazendo Caretas",
    texto:
      "Resgate da brincadeira secular dos mascarados, unindo jovens e mestres na confecção das máscaras e na ocupação das ruas.",
  },
  {
    nome: "Casa Digital Santo Elias",
    texto:
      "Espaço de convivência e inclusão digital da comunidade, onde nascem boa parte das produções do território.",
  },
];

function SobrePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-olive">
          Sobre nós
        </span>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-olive-deep md:text-5xl">
          Sociedade Coração de Maria — SCM
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          Associação comunitária sediada no Sítio Santo Elias, em Meruoca, Ceará. Desenvolve
          projetos voltados à arte, à cultura e à agricultura familiar, com apoio do Governo do
          Estado do Ceará e de parceiros da região.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <img
          src={casaDigital}
          alt="Espaço da Casa Digital Santo Elias com equipamentos de produção"
          loading="lazy"
          width={800}
          height={600}
          className="mt-12 aspect-[16/9] w-full rounded-2xl object-cover"
        />
      </Reveal>

      <div className="mt-16 space-y-10">
        {projetos.map((p, i) => (
          <Reveal key={p.nome} delay={i * 90}>
            <div className="border-b border-border pb-8">
              <h2 className="font-serif text-2xl text-olive-deep">{p.nome}</h2>
              <p className="mt-3 text-sm leading-relaxed">{p.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <Link
          to="/"
          className="mt-12 inline-block border-b-2 border-olive text-xs font-bold uppercase tracking-widest text-olive-deep"
        >
          Ver as publicações
        </Link>
      </Reveal>
    </main>
  );
}
