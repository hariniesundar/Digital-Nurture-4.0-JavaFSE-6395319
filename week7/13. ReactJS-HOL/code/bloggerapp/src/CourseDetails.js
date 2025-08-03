import React from 'react';

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <table style={{ margin: '0 auto', textAlign: 'left', borderCollapse: 'separate', borderSpacing: '20px 10px' }}>
        <thead>
          <tr>
            <th>Course</th>
            <th>Duration</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Stack Development</td>
            <td>3 Months</td>
            <td>Udemy</td>
          </tr>
          <tr>
            <td>React + Redux Mastery</td>
            <td>6 Weeks</td>
            <td>Coursera</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseDetails;
