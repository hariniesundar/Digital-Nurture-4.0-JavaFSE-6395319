import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.TrainerId === parseInt(id));

  return trainer ? (
    <div style={{ textAlign: 'center' }}>
  <h2>Trainer Details</h2>
  <p><strong>ID:</strong> {trainer.TrainerId}</p>
  <p><strong>Name:</strong> {trainer.Name}</p>
  <p><strong>Email:</strong> {trainer.Email}</p>
  <p><strong>Phone:</strong> {trainer.Phone}</p>
  <p><strong>Technology:</strong> {trainer.Technology}</p>
  <p><strong>Skills:</strong> {trainer.Skills}</p>
</div>

  ) : <p>Trainer not found</p>;
}

export default TrainerDetails;
