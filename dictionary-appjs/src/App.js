import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="experience" />
        </main>
            <footer className="App-footer">
            This project was coded by <a href='https://github.com/oezlemcelik?tab=repositories' 
            target='_blank' rel='noopener noreferrer'>Özlem Celik</a> and is <a href="https://github.com/oezlemcelik/dictionary-app" 
            target='_blank' rel='noopener noreferrer'> open-sourced on Github</a> and <a href="https://oez-dictionary-app.netlify.app/" target="_blank" rel="noopener noreferrer"> hosted on Netlify</a>
            </footer>
      </div>
    </div>
  );
}