import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Mein Kochbuch
          </p>
          <p class="subtitle">
            Workshop am 13.01.2023
          </p>
        </div>
      </section>
      <section id='main_content' className='section'>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>
      <footer class="footer is-align-self-baseline" id='footer'>
        <div class="content has-text-centered">
          <p>
            made with &#10084; by <a href="mailto:marco.dierenfeldt@ausy-technologies.de">Marco Dierenfeldt</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
