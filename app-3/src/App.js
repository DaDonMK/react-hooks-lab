import './App.css';
import Pokemon from './component/pokemon'
import routes from './routes'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Pokemon /> */}
       {routes}
      </header>
    </div>
  );
}

export default App;
