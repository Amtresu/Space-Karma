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
          {reservationRocket.map((v) => (
            <ListGroup.Item key={v.id}>
              <h4>{v.name}</h4>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Myprofile;
