import './App.css';
import React from 'react'
import GetCats from './components/getCats'
import PrintCats from './components/printCats'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetCats />
        {/* <PrintCats /> */}
      </header>
    </div>
  );
}

export default App;
