import './App.css';
import React from "react";
import Banner from "./components/banner";
import Exhibit from "./components/exhibit";
import IPAddress from "./components/IPAddress";
import Latency from "./components/Latency"; // <-- added

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Banner title="Welcome to Sextant!" />
      <main>
        <Exhibit heading="Tic-Tac-Toe Game">
          <p>Tic-tac-toe</p>
        </Exhibit>

        <Exhibit heading="Public IPv4 Address">
          <IPAddress version="v4" />
        </Exhibit>

        <Exhibit heading="Public IPv6 Address">
          <IPAddress version="v6" />
        </Exhibit>

        <Exhibit heading="Packet Latency">
          <Latency /> {/* <-- added */}
        </Exhibit>

        <Exhibit heading="About">
          <p>This site demonstrates component composition using React.</p>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
