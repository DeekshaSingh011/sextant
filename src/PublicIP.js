import React, { useEffect, useState } from "react";

export default function PublicIP({ version }) {
  const [ip, setIp] = useState("Loading...");

  useEffect(() => {
    const url =
      version === "v6"
        ? "https://api64.ipify.org?format=json"
        : "https://api.ipify.org?format=json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Error fetching IP"));
  }, [version]);

  return (
    <div className="p-4 border rounded bg-gray-100">
      <p>
        <strong>{version.toUpperCase()} Address:</strong> {ip}
      </p>
    </div>
  );
}

