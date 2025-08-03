import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h2>Welcome Guest!</h2>
      <p>You can browse available flights:</p>
      <ul>
        <li>✈️ Hyderabad ➝ Bangalore</li>
        <li>✈️ Chennai ➝ Delhi</li>
        <li>✈️ Mumbai ➝ Kolkata</li>
      </ul>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default GuestPage;
