import './App.css';
import { NavBar } from './Home';
import { Stories } from './Stories';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Stories />
      </main>
    </div>
  );
}

export default App;
