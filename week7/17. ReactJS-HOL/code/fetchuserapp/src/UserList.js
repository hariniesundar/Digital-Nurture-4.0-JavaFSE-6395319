import React from "react";

function UserList({ users, onSelect }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>User List</h2>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            cursor: "pointer"
          }}
          onClick={() => onSelect(user)}
        >
          <img src={user.picture.medium} alt="User" />
          <p>{user.name.first}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
