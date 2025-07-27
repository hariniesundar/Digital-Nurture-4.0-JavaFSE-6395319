import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Elisabeth", score: 61 },
    { name: "Stokes", score: 90 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 94 },
    { name: "Jadeja", score: 64 },
    { name: "Rajas", score: 75 },
    { name: "Rohit", score: 80 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "10px" }}>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>Mr. {player.name} {player.score}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>
        List of Players having Scores Less than 70
      </h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>Mr. {player.name} {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
