import React, { useEffect, useState } from "react";
export default function Latency() {
  const [latency, setLatency] = useState(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        const sentTime = message.data;
        const now = Date.now();
        setLatency(now - sentTime);
      } catch (err) {
        console.error("Error parsing websocket data:", err);
      }
    };
    return () => ws.close();
  }, []);
  return (
    <div className="p-4 border rounded bg-gray-100">
      <p>
        <strong>Packet Latency:</strong>{" "}
        {latency !== null ? `${latency} ms` : "Waiting for data..."}
      </p>
    </div>
  );
}
