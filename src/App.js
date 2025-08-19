import './App.css';
import React from "react";
import Banner from "./components/banner";
import Exhibit from "./components/exhibit";
import IPAddress from "./components/IPAddress";
import Latency from "./components/Latency";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Top Banner */}
      <Banner title="Welcome to Sextant!" />

      <main>
        {/* Example Tic-Tac-Toe Exhibit (already present) */}
        <Exhibit heading="Tic-Tac-Toe Game">
          <p>Tic-tac-toe</p>
        </Exhibit>

        {/* Public IPs (IPv4 + IPv6 in separate Exhibits) */}
        <Exhibit heading="Public IPv4 Address">
          <IPAddress version="v4" />
        </Exhibit>

        <Exhibit heading="Public IPv6 Address">
          <IPAddress version="v6" />
        </Exhibit>

        {/* Packet Latency Exhibit */}
        <Exhibit heading="Packet Latency">
          <Latency />
        </Exhibit>

        {/* About Exhibit */}
        <Exhibit heading="About">
          <p>This site demonstrates component composition using React.</p>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
