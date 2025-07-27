import { useEffect, useState } from 'react';
import './styles/About.css';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://vps-5177755-x.dattaweb.com/api/about')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="has-text-centered">Cargando...</p>;

  return (
    <section className="section about-section">
      <div className="container">
        <h2 className="title is-3 has-text-primary">Sobre mí</h2>
        <p className="subtitle is-5">
          <strong>{data.name}</strong> — {data.title}
        </p>
        <p>{data.description}</p>
        <p className="has-text-grey-dark mt-2">📍 {data.location}</p>
        <p className="has-text-grey-dark mt-2"> 📍{data.languajes} </p>
      </div>
    </section>
  );
}
