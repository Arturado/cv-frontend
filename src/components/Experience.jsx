import { useEffect, useState } from 'react';

export default function Experience() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://168.197.50.86:3000/experience')
      .then(res => res.json())
      .then(setJobs);
  }, []);

  return (
    <section>
      <h2>Experiencia</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <h3>{job.role} @ {job.company}</h3>
          <p><em>{job.period}</em></p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
}
