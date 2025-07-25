import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Blog from './components/Blog';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>CV de Arturo Vásquez</h1>
      <About />
      <Skills />
      <Experience />
      <Blog />
    </div>
  );
}

export default App;
