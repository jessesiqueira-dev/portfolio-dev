import { projects } from '../data/portfolio.js'

function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="visual">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
        />
      </div>
      <div className="cardbody">
        <span className="num">{project.number} / {project.category.toUpperCase()}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="links">
          {project.links.map((link) => (
            <a key={link.url} className="textlink" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="wrap">
        <div className="sectionhead">
          <div>
            <div className="kicker">Trabalhos selecionados</div>
            <h2>Projetos em destaque</h2>
          </div>
          <p className="sectionlead">
            Aplicações que mostram como transformo uma ideia em uma experiência funcional.
          </p>
        </div>
        <div className="grid">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}
