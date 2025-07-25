import { useEffect, useState } from 'react';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://168.197.50.86:3000/about')
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
