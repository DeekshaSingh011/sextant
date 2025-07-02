import React, { useEffect, useState } from "react";

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:55455");

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const packetTimestamp = data.timestamp;
        const now = Date.now();
        setLatency(now - packetTimestamp);
      } catch (err) {
        console.error("WebSocket data error:", err);
      }
    };

    socket.onerror = (err) => console.error("WebSocket error:", err);

    return () => socket.close();
  }, []);

  return (
    <div>
      {latency !== null ? (
        <p>Current Packet Latency: <strong>{latency} ms</strong></p>
      ) : (
        <p>Waiting for latency data...</p>
      )}
    </div>
  );
}

export default Latency;
