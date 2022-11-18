import logo from './logo.svg';
import './App.css';
import FinanceCard from './components/financeCard'
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <FinanceCard></FinanceCard>
    </div>
  );
}

export default App;
