import React from 'react';
import CohortDetails from './CohortDetails';
import styles from './CohortDetails.module.css';

function App() {
  const cohorts = [
    {
      name: 'INTADMDF10 - .NET FSD',
      startDate: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose'
    },
    {
      name: 'ADM21JF014 - Java FSD',
      startDate: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith'
    },
    {
      name: 'CDBJF21025 - Java FSD',
      startDate: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe'
    },
    {
      name: 'PYTH1023 - Python FSD',
      startDate: '01-Mar-2023',
      status: 'Scheduled',
      coach: 'Ravi Shankar',
      trainer: 'Anjali Gupta'
    },
    {
      name: 'FSDADV2401 - Advanced FSD',
      startDate: '10-Apr-2023',
      status: 'Ongoing',
      coach: 'Neha Sinha',
      trainer: 'Rahul Mehta'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Cohorts Details</h2>
      <div className={styles.container}>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
