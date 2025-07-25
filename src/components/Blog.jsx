import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://vps-5177755-x.dattaweb.com/blog/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error al traer posts:', err));
  }, []);

  return (
    <div>
      <h2>Últimas Entradas del Blog</h2>
      {posts.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <a href={post.link} target="_blank" rel="noopener noreferrer">Leer más</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
