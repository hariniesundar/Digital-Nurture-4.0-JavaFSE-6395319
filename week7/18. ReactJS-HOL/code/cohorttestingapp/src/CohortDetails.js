import React from 'react';

const CohortDetails = ({ cohort }) => {
  return (
    <div>
      <h2>{cohort.name}</h2>
      <p>Technology: {cohort.technology}</p>
      <p>Status: {cohort.status}</p>
    </div>
  );
};

export default CohortDetails;
