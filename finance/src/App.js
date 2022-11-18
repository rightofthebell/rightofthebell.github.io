import logo from './logo.svg';
import './App.css';
import MaterialTableComponent from './components/materialTable.tsx'
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <MaterialTableComponent name="test"></MaterialTableComponent>
    </div>
  );
}

export default App;
