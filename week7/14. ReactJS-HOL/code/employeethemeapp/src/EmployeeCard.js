import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#1e1e1e' : '#fff',
    color: theme === 'dark' ? '#eee' : '#000',
    border: '1px solid',
    borderColor: theme === 'dark' ? '#333' : '#ccc',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '15px',
    width: '300px',
    boxShadow: theme === 'dark'
      ? '0 0 8px rgba(255,255,255,0.1)'
      : '0 0 8px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    backgroundColor: theme === 'dark' ? '#444' : '#ddd',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    marginTop: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <h4>{employee.name}</h4>
      <p>Role: {employee.role}</p>
      <button style={buttonStyle}>Message</button>
    </div>
  );
}

export default EmployeeCard;
