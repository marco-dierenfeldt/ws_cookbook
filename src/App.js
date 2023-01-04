import 'bulma/css/bulma.css';
import './App.css';
import Recipe from './components/recipe.component';

function App() {
  return (
    <div>
      <section className='hero is-fullheight'>
        <div className='hero-head'>
          <div className='hero is-primary'>
            <div className='hero-body'>
              <p className='title'>
                Mein Kochbuch
              </p>
            </div>
          </div>
        </div>
        <div className='hero-body'>
          <section id="main_content" className='section'>
            <Recipe/>
          </section>
        </div>
        <div className='hero-foot'>
          <footer className='footer'>
            <div className='content has-text-centered'>
              <p>
                made with &#10084; by <a href="mailto:marco.dierenfeldt@ausy-technologies.de">Marco Dierenfeldt</a>.
              </p>
            </div>
          </footer>
        </div>
      </section>


    </div>
  );
}

export default App;
