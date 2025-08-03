import React from 'react';

function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      <table style={{ margin: '0 auto', textAlign: 'left', borderCollapse: 'separate', borderSpacing: '20px 10px' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React Explained</td>
            <td>Zac Gordon</td>
            <td>₹699</td>
          </tr>
          <tr>
            <td>Learning React</td>
            <td>Alex Banks</td>
            <td>₹899</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookDetails;
