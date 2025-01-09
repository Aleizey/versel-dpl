import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>SocialVite</h1>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <h2>Menú</h2>
          <ul>
            <li>Inicio</li>
            <li>Perfil</li>
            <li>Configuración</li>
          </ul>
        </aside>

        <main className="feed">
          <section className="post">
            <h2>Publicación Principal</h2>
            <p>
              Bienvenido a SocialVite, una red social construida con React y Vite.
            </p>
            <button onClick={() => setCount((count) => count + 1)}>
              Me gusta ({count})
            </button>
          </section>

          <section className="comments">
            <h3>Comentarios</h3>
            <div className="comment-input">
              <input
                type="text"
                value={newComment}
                placeholder="Escribe un comentario..."
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={addComment}>Enviar</button>
            </div>
            <ul className="comment-list">
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
