import { useState } from "react";

export default function Navbar() {
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
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-xl font-bold">Arturo Vásquez</div>

        <div className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleScroll(sec.id)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {sec.label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 flex flex-col gap-4">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleScroll(sec.id)}
              className="text-left text-gray-700 hover:text-blue-600"
            >
              {sec.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
