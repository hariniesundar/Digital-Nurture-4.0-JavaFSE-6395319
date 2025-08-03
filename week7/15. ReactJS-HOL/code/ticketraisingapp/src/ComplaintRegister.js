import React, { useState } from 'react';

function ComplaintRegister() {
  const [empName, setEmpName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNo = Math.floor(Math.random() * 1000000);
    alert(`Complaint submitted by ${empName}\nReference Number: #${refNo}`);
    setEmpName('');
    setComplaint('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
        <label>Employee Name:</label><br />
        <input
          type="text"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
          required
          style={{ padding: '8px', width: '300px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Complaint:</label><br />
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
          rows={5}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Submit Complaint
      </button>
    </form>
  );
}

export default ComplaintRegister;
