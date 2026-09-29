import { technologies } from '../data/portfolio.js'

function CodeAccent({ side }) {
  return (
    <div className={`code-accent accent-${side}`} aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => <i key={index} />)}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="reference-hero wrap" aria-labelledby="titulo">
      <CodeAccent side="left" />
      <div className="hero-centered">
        <div className="avatar-ring">
          <img
            src="/jesse-portrait.jpg"
            alt="Retrato de Jessé Siqueira"
            width="800"
            height="800"
            fetchPriority="high"
          />
          <span className="avatar-code" aria-hidden="true">&lt;/&gt;</span>
        </div>
        <p className="hero-greeting">
          Hello World! Meu nome é <strong>Jessé Siqueira</strong> e sou
        </p>
        <h1 id="titulo">Desenvolvedor Full Stack</h1>
        <p className="hero-description">
          Desenvolvo aplicações web com React e Node.js, conectando interfaces,
          APIs e dados. Conheça alguns projetos que construí ao longo dessa jornada.
        </p>
        <div className="hero-technologies" aria-label="Tecnologias e perfil">
          <a href="https://github.com/jessesiqueira-dev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <a className="scroll-cue" href="#projetos" aria-label="Ir para os projetos">
          <span /><span />
        </a>
      </div>
      <CodeAccent side="right" />
    </section>
  )
}
