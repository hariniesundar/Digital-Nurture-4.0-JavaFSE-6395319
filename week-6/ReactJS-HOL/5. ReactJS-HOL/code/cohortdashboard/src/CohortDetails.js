import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const colorStyle = {
    color: cohort.status === 'Ongoing' ? 'green' : 'blue',
    fontWeight: 'bold',
  };

  return (
    <div className={styles.box}>
      <h4 style={colorStyle}>{cohort.name}</h4>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
