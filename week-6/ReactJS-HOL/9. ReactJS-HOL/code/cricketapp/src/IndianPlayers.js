import React from "react";

function IndianPlayers() {
  const oddPlayers = ["Sachin1", "Virat3", "Yuvraj5"];
  const evenPlayers = ["Dhoni2", "Rohit4", "Rahul6"];

  const T20players = ["First Player", "Second Player", "Third Player"];
  const ranjiPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const mergedPlayers = [...T20players, ...ranjiPlayers];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "10px" }}>Odd Players</h2>
      <ul>
        <li>First - {oddPlayers[0]}</li>
        <li>Third - {oddPlayers[1]}</li>
        <li>Fifth - {oddPlayers[2]}</li>
      </ul>

      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>Even Players</h2>
      <ul>
        <li>Second - {evenPlayers[0]}</li>
        <li>Fourth - {evenPlayers[1]}</li>
        <li>Sixth - {evenPlayers[2]}</li>
      </ul>

      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>
        List of Indian Players Merged:
      </h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
