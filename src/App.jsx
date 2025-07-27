import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Header from './components/Header';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <Header />
      <h1>CV de Arturo Vásquez</h1>
      <div id="about" className="pt-20">
        <About />
      </div>
      <div id="skills" className="pt-20">
        <Skills />
      </div>
      <div id="experience" className="pt-20">
      <Experience />
      </div>
      <div id="blog" className="pt-20">
      <Blog />
      </div>
    </div>
  );
}

export default App;
