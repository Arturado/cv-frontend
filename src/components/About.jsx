import { useEffect, useState } from 'react';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://vps-5177755-x.dattaweb.com/about')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <section>
      <h2>Sobre mí</h2>
      <p><strong>{data.name}</strong> — {data.title}</p>
      <p>{data.description}</p>
      <p>📍 {data.location}</p>
    </section>
  );
}
