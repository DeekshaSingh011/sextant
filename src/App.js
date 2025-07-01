import './App.css';
import React from "react";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner title="Welcome to Sextant!" />
      <Exhibit heading="Tic-Tac-Toe Game">
        <p>This is where the Tic-Tac-Toe game will go.</p>
      </Exhibit>
      <Exhibit heading="About">
        <p>This site demonstrates component composition using React.</p>
      </Exhibit>
    </div>
  );
}

export default App;
