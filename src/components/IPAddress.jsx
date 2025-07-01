import React, { useEffect, useState } from "react";

function IPAddress({ version }) {
  const [ip, setIP] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = version === "v6"
      ? "https://api64.ipify.org?format=json"
      : "https://api.ipify.org?format=json";

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch IP address");
        return response.json();
      })
      .then((data) => setIP(data.ip))
      .catch((err) => setError(err.message));
  }, [version]);

  return (
    <div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {ip ? <p>Your public {version === "v6" ? "IPv6" : "IPv4"} address is: <strong>{ip}</strong></p> : <p>Loading...</p>}
    </div>
  );
}

export default IPAddress;
