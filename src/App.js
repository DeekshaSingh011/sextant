import './App.css';
import React from "react";
import Banner from "./components/banner";
import Exhibit from "./components/exhibit";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Banner title="Welcome to Sextant!" />
      <main>
        <Exhibit heading="Tic-Tac-Toe Game">
          <p>Tic-tac-toe</p>
        </Exhibit>
        <Exhibit heading="About">
          <p>This site demonstrates component composition using React.</p>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
