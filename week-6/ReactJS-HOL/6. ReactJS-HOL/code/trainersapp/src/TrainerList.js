import { Link } from 'react-router-dom';

function TrainerList({ data }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Trainers List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.map(trainer => (
          <li key={trainer.TrainerId} style={{ margin: '10px 0' }}>
            <Link to={`/trainers/${trainer.TrainerId}`}>{trainer.Name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerList;
