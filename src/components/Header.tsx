import { useState } from "react";
import "./styles/Header.css"; // si querés estilos extra personalizados

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const sections = [
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Habilidades" },
    { id: "experience", label: "Experiencia" },
    { id: "portfolio", label: "Portafolio" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav className="navbar is-white is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-bold is-size-5" href="#">
          Arturo Vásquez
        </a>

        <a
          role="button"
          className={`navbar-burger ${isOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <div className="navbar-end">
          {sections.map((sec) => (
            <a
              key={sec.id}
              className="navbar-item"
              onClick={() => handleScroll(sec.id)}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
