import './App.css';

function App() {
  return (
    <div id="page-container">
      <div className="siimple-navbar">
        <div className="siimple-navbar-title">Mein Kochbuch</div>
      </div>
      <div className="siimple-content" id="content-wrap">
        Hier kommt der Inhalt...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </div>
      <div className="siimple-footer siimple-footer--dark" id="footer">
        Made with love by <strong>Marco Dierenfeldt</strong>
      </div>
    </div>
  );
}

export default App;
