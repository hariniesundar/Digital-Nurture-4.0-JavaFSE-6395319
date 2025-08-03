import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  const employees = [
    { id: 1, name: 'Rajeswari', role: 'Developer' },
    { id: 2, name: 'Keerthana', role: 'Designer' },
  ];

  return (
    <div>
      <h3>Employee List</h3>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeesList;
