import React, { useState } from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true); // Initially true

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <button
        onClick={() => setFlag(!flag)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginBottom: "30px",
          cursor: "pointer"
        }}
      >
        Toggle View
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
