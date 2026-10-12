export default function Header() {
  return (
    <header className="top">
      <nav className="nav wrap" aria-label="Navegação principal">
        <a className="brand" href="#inicio">
          Jessé<span>.com</span>
        </a>
        <div className="navlinks">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>
    </header>
  );
}
