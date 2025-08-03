import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#eef9f4',
      maxWidth: '550px',
      margin: '0 auto'
    }}>
      <h2>Welcome, User!</h2>
      <p>You can now book your flight tickets:</p>
      <ul>
        <li>Hyderabad ➝ Bangalore - ₹4500 <button>Book</button></li>
        <li>Chennai ➝ Delhi - ₹5500 <button>Book</button></li>
        <li>Mumbai ➝ Kolkata - ₹5000 <button>Book</button></li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
