import './App.css';
import MainComponent from './components/main.component';

function App() {
  return (
    <div>
      <div className="siimple-navbar siimple-navbar-dark">
        <div className="siimple-navbar-title">Mein Kochbuch</div>
      </div>
      <div className="siimple-content siimple--display-flex siimple--px-4">
        <MainComponent/>     
      </div>
      <div className="siimple-footer siimple-footer--small siimple-footer--dark siimple--text-center">
        Made with love by <strong>Marco Dierenfeldt</strong>
      </div>
    </div>
  );
}

export default App;
