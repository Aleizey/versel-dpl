import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <header className="header">
        <nav className="navbar">
          <a href="https://vite.dev" target="_blank" className="logo-link">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="logo-link">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </nav>
        <h1>Bienvenido a Mi Página</h1>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Hola, soy Alejandro Versel</h2>
          <p>Explora esta página para aprender sobre React y Vite.</p>
        </section>

        <section className="counter-section">
          <h2>Contador Interactivo</h2>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              El contador está en {count}
            </button>
            <p>
              Edita el archivo <code>src/App.tsx</code> para personalizar esta sección.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2025 Alejandro Versel. Aprende más haciendo clic en los logos de Vite y React.
        </p>
      </footer>
    </div>
  );
}

export default App;
