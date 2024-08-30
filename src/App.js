import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div>
      <nav className='navbar'>
          damn
      </nav>
      <header className='intro'>
        <h1>Altstadt Winterthur</h1>
      </header>
      <section className='section dark history'>
        <div className="history-content">
          <div className="text">
            <h2>Geschichte</h2>
            <p>wow</p>
          </div>
          <div className="image">
            <img src={logo} alt="Geschichte Bild" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
