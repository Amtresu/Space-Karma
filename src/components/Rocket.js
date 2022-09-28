import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRocket } from '../redux/rockets/rockets';

function Rocket(props) {
  const { id, name, description, img, reserved } = props;

  const button = reserved ? 'Cancel Reservation' : 'Reserve Rocket';

  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(toggleRocket(id));
  };
  return (
    <div>
      <img src={img} alt="rocket" />
      <h2>{name}</h2>
      <div className="reservation">
        <button>{reserved && 'Reserved'}</button>
        {description}
      </div>
      <button id={id} type="button" onClick={toggleReservation}>
        {button}
      </button>
    </div>
  );
}

export default Rocket;
