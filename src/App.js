import './App.css';
import Activities from './Components/Activities/Activities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFistRaised } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <h1>
        <FontAwesomeIcon icon={faFistRaised}></FontAwesomeIcon>
        Ultra Daily Life Activity
      </h1>
      <Activities></Activities>
    </div>
  );
}

export default App;
