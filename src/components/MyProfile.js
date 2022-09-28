/* eslint-disable */

import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

function Myprofile() {
  const reservationRocket = useSelector((state) =>
    state.rocket.filter((rocket) => rocket.reserved)
  );
  return (
    <div className="main">
      <div className="rockets">
        <h2>Reserved Rockets</h2>
        <ListGroup>
          {reservationRocket.map((rocket) => (
            <ListGroup.Item key={rocket.id}>
              <h4>{rocket.name}</h4>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Myprofile;
