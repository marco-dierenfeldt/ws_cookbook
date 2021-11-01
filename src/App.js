import './App.css';
import Recipe from './components/recipe.component'

function App() {
  return (
    <div>
      <div className="siimple-navbar">
        <div className="siimple-navbar-title">Mein Kochbuch</div>
      </div>
      <div className="siimple-content">
        <Recipe/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </div>
      <div className="siimple-footer siimple-footer--dark">
        Made with love by <strong>Marco Dierenfeldt</strong>
      </div>
    </div>
  );
}

export default App;
