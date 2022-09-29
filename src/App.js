import './App.css';
import Activities from './Components/Activities/Activities';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Interview from './Components/Interview-Question/Interview';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Interview></Interview>
      <Footer></Footer>
    </div>
  );
}

export default App;
