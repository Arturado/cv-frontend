import { useEffect, useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('https://vps-5177755-x.dattaweb.com/api/skills')
      .then(res => res.json())
      .then(setSkills);
  }, []);

  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
