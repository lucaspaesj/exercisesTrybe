import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <main>
    <h1>Pokedex:</h1>
    <section className="container">
      <Pokedex pokemons={pokemons}/>
    </section>
    </main>
  );
}

export default App;
