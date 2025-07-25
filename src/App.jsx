import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>CV de Arturo Vásquez</h1>
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
