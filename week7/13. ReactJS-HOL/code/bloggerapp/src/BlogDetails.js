import React from 'react';

function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <table style={{ margin: '0 auto', textAlign: 'left', borderCollapse: 'separate', borderSpacing: '20px 10px' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Learning React</td>
            <td>Rajeswari</td>
            <td>July 2025</td>
          </tr>
          <tr>
            <td>React in Practice</td>
            <td>Kiran</td>
            <td>August 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BlogDetails;
