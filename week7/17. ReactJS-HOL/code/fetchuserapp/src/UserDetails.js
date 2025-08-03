import React from "react";

function UserDetails({ user, onBack }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Details</h2>
      <img src={user.picture.large} alt="User" />
      <p><strong>Title:</strong> {user.name.title}</p>
      <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <button onClick={onBack} style={{ marginTop: "20px" }}>Back to List</button>
    </div>
  );
}

export default UserDetails;
